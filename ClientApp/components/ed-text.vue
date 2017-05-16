<template>
    <div class="ed-text">
        <!-- Add paste etc -->
        <div class="content ed-text-editor" contenteditable="true" @blur="saveField" @input="setEdited" v-html="value"></div>
        <div class="card ed-text-buttons">
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
    </div>
</template>

<script>
export default {
  name: 'ed-text',
//   model: {
//     prop: 'field',
//     event: 'bajs'
//   },
  props: ['languageId', 'value'],
  data () {
    return {
      edited: false,
      fieldName: ''
    }
  },
  created() {
      this.fieldName = this.$vnode.data.model.expression;
      console.log('FieldName:', this.fieldName)
  },
  computed: {
  },
  methods: {
      saveField(e) {
          let val = e.target.innerHTML;
          //console.log('savefield triggered in ed-text');
        //   var t = this.$vnode.data.model.expression;
        //   console.log('====', t);
          console.log('blur val:', val);
          //this.field2 = val;
          this.$emit('input', val);
          //this.$store.dispatch();
      },
      setEdited(e) {
          //console.log('edited e', e.target.innerHTML);
          if (!this.edited) {
            this.edited = true;
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

.ed-text-editor:not(:focus)+.ed-text-buttons {
    display: none;
}

.ed-text-buttons .card-content {
    padding: 0.5rem;
}
</style>