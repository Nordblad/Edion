<template>
  <div>
    <ed-button-bar pos="topleft">
      <figure class="image is-4by3" slot="content">
        <transition name="slide-fade">
          <img :src="getImagePath(test2)" :alt="value" :key="value" />
        </transition>
      </figure>
      <h5>{{ test2 }}</h5>
      <a class="button" slot="buttons" @click="openImagePicker">
        <span class="icon">
          <i class="fa fa-image"></i>
        </span>
        <span>Change</span>
      </a>
    </ed-button-bar>
    <ed-modal v-if="imagePickerOpen" @cancel="imagePickerOpen = false" :card="false">
      <div class="columns" v-for="row in splitIntoRows(images, 3)">
        <div class="column" v-for="image in row">
          <!--<div class="box">
                                                                <figure class="image is-4by3" slot="content">
                                                                    <img :src="getImagePath(image)" :alt="value" />
                                                                </figure>
                                                            </div>-->
          <div :class="image == value ? 'card ed-imagepicker-card is-selected' : 'card ed-imagepicker-card'" @click="changeToImage(image)">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="getImagePath(image)" :alt="value" />
              </figure>
            </div>
            <!--<div class="card-content">
                                                                <div class="content">
                                                                    <small>{{ image }}</small>
                                                                </div>
                                                            </div>-->
          </div>
        </div>
      </div>
    </ed-modal>
  
    <!--<div class="modal-background ed-imagepicker">
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-content">Hej</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>-->
  </div>
</template>

<script>
import EdButtonBar from './ed-button-bar'
import EdModal from './ed-modal'
import { mapMutations } from 'vuex'


let images = Array.from(new Array(9), (x,i) => 'example' + (i+1) + '.jpg');

export default {
  name: 'ed-image',
  components: {
      EdButtonBar,
      EdModal
  },
  props: ['value', 'rowId', 'size'],
  data () {
    return {
      imagePickerOpen: false,
      images,
      fieldName: this.$vnode.data.model.expression
    }
  },
  computed: {
      currentSrc: function() {
          return this.value[0];
      },
      test2: function() {
        return this.$store.state.rows[this.rowId].fields[0];
      }
  },
  mounted() {
      if (!this.test2) {
          console.log('Ed-image has no field! create it!');
          this.saveFieldValue({
                name: this.fieldName,
                languageId: 0,
                rowId: this.rowId,
                value: this.default
            });
            // this.$store.commit('EDIT_FIELD', {
            //     name: this.fieldName,
            //     languageId: 0,
            //     rowId: this.rowId,
            //     value: this.default
            // });
      }
  },
  methods: {
    //...mapMutations(['saveStateTest']),
    saveFieldValue(field) {
      console.log('Save image value');
      this.$store.commit('EDIT_FIELD', field);
    },
    // saveStateTest() {
    //   console.log('I think image should saveStateTest() now')
    // },
      openImagePicker() {
          this.imagePickerOpen = true;
      },
      changeToImage(newSrc) {
          console.log('Changing image to ' + newSrc);
          this.imagePickerOpen = false;
          //this.$emit('input', newSrc);

          //this.$emit('onFieldChange', { name: this.fieldName, languageId: 0, value: newSrc });

          this.$store.commit()
      },
      getImagePath(fileName) {
          return '/dist/img/' + fileName;
      },
      splitIntoRows(list, columns) {
        var groups = list.map(function(e,i) { 
            return i%columns===0 ? list.slice(i,i+columns) : null; 
        }).filter(function(e){ return e; });
        return groups;
      }
  }
}
</script>

<style>
.ed-imagepicker-card {
  cursor: pointer;
}

.ed-imagepicker-card:hover {
  box-shadow: 0 0 0 0.5rem rgba(1, 1, 1, .2);
}

.ed-imagepicker-card.is-selected {
  box-shadow: 0 0 0 0.5rem #ce0000;
}

.ed-imagepicker {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}










/* Enter and leave animations can use different */


/* durations and timing functions.              */

.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>