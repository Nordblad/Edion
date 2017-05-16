<template>
    <div class="ed-text">
        <!-- Add paste etc -->
        <div class="card ed-text-buttons" v-if="showToolbar">
            <div class="card-content">
                <div class="field has-addons">
                    <p class="control">
                        <a class="button">
                            <span class="icon is-small">
                                <i class="fa fa-bold"></i>
                            </span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button">
                            <span class="icon is-small">
                                <i class="fa fa-italic"></i>
                            </span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button">
                            <span class="icon is-small">
                                <i class="fa fa-underline"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="content ed-text-editor" contenteditable="true" @blur="onFocusLost" @input="setEdited" v-html="value" @focus="openToolbar"></div>
    </div>
</template>

<script>
import EdButtonBar from './ed-button-bar'

export default {
  name: 'ed-text',
  components: {
      EdButtonBar
  },
//   model: {
//     prop: 'field',
//     event: 'bajs'
//   },
  props: ['languageId', 'value'],
  data () {
    return {
      edited: false,
      fieldName: '',
      showToolbar: false
    }
  },
  created() {
      this.fieldName = this.$vnode.data.model.expression;
      console.log('FieldName:', this.fieldName)
  },
  computed: {
  },
  methods: {
      openToolbar(e) {
        console.log('Open the toolbar, dear');
        this.showToolbar = true;
      },
      onFocusLost(e) {
          this.showToolbar = false;
          if (!this.edited) { return }
          let val = e.target.innerHTML;
          //console.log('onFocusLost triggered in ed-text');
        //   var t = this.$vnode.data.model.expression;
        //   console.log('====', t);
          console.log('blur val:', val);
          //this.field2 = val;
          this.$emit('input', val);
          this.$store.dispatch('changeField', {
              value: val,

          });
      },
      setEdited(e) {
          //console.log('edited e', e.target.innerHTML);
          if (!this.edited) {
            this.edited = true;
            this.$store.commit('increment', 'something');
            //console.log('Set edited')
          }
      }
  },
  watch: {
    //   value: function() {
    //       console.log('value did change');
    //   }
  }
}
</script>

<style>
.ed-text {
    /*box-shadow: 0 0 0 1px red;*/
    position: relative;
}

.ed-text-buttons {
    position: absolute;
    left: 0;
    bottom: -3.5rem;
}

/*.ed-text-editor:not(:focus)+.ed-text-buttons {
    display: none;
}*/

.ed-text-buttons .card-content {
    padding: 0.5rem;
}
</style>