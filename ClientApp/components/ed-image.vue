<template>
  <div>
    <ed-button-bar pos="topleft">
      <figure :class="imageClasses">
        <transition name="slide-fade">
          <img :src="getImagePath(imageUrl)" :alt="imageUrl" :key="imageUrl" />
        </transition>
      </figure>
      <div class="field" slot="buttons">
        <p class="control">
          <button class="button" @click="imagePickerOpen = true">
            <span class="icon">
              <i class="fa fa-image"></i>
            </span>
            <span>Change image</span>
          </button>
        </p>
      </div>
    </ed-button-bar>
    <ed-modal v-if="imagePickerOpen" @cancel="imagePickerOpen = false" :card="false">
      <div class="columns" v-for="row in splitIntoRows(images, 3)">
        <div class="column" v-for="image in row">
          <div :class="image == imageUrl ? 'card ed-imagepicker-card is-selected' : 'card ed-imagepicker-card'" @click="changeToImage(image)">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="getImagePath(image)" :alt="image" />
              </figure>
            </div>
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
import FieldMixin from '../edion/field-mixin'


let images = Array.from(new Array(9), (x,i) => 'example' + (i+1) + '.jpg');

export default {
  name: 'ed-image',
  mixins: [FieldMixin],
  components: {
      EdButtonBar,
      EdModal
  },
  props: {
    size: {
      type: String,
      default: '4by3'
    },
    center: Boolean
  },
  data () {
    return {
      imagePickerOpen: false,
      images,
      translate: false
    }
  },
  computed: {
      imageUrl() {
        return this.stateFields[0]
      },
      imageClasses() {
        var classObj = {
          'image': true
        };
        classObj['is-' + this.size] = true;
        if (this.center) {
          classObj['is-margin-auto'] = true;
        }
        return classObj;
      }
  },
  methods: {
    //...mapMutations(['saveStateTest']),

      openImagePicker() {
          this.imagePickerOpen = true;
      },
      changeToImage(newSrc) {
          console.log('Changing image to ' + newSrc);
          this.editField({
            rowId: this.rowId,
            name: this.fieldName,
            languageId: 0,
            value: newSrc
          });
          this.imagePickerOpen = false;
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

figure.is-margin-auto {
  margin-left: auto;
  margin-right: auto;
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