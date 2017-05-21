<template>
    <div class="ed-text">
        <!-- Add paste etc -->
        <ed-button-bar :show="showToolbar" position="below">
            <transition name="language-change" mode="out-in">
            <div class="content ed-text-editor" contenteditable="true" @blur="onFocusLost" @input="setEdited" v-html="html" :key="languageId" @focus="openToolbar"></div>
            </transition>
            <!--<div class="field is-horizontal" slot="buttons">
                        <div class="field-body">-->
            <div class="field is-grouped" slot="buttons">
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
                <div class="field">
                    <p class="control">
                        <span class="select">
                            <select>
                                <option>10</option>
                                <option selected>12</option>
                                <option>14</option>
                            </select>
                        </span>
                    </p>
                </div>
            </div>
            <!--</div>
                    </div>-->
        </ed-button-bar>
    </div>
</template>

<script>
import EdButtonBar from './ed-button-bar'
import Languages from '../languages'
import FieldMixin from '../edion/field-mixin'

export default {
  name: 'ed-text',
  mixins: [FieldMixin],
  components: {
      EdButtonBar
  },
  props: [],
  data () {
    return {
      edited: false,
      oldValue: null,
      translate: true,
      showToolbar: false
    }
  },
  computed: {
      html() {
          return this.stateFields[this.languageId]
      }
  },
  methods: {
    //   createDefaultStateFields() {
    //     var field = {};
    //     this.set(field, 'asd', 'ddsa')
    //     var translations = {};
    //     var lang = this.translate ? [1, 2, 3] : [0];
    //     var self = this;
    //     lang.forEach((i, v) => {
    //         translations[v] = self.defVal;
    //     });
    //     field[this.fieldName] = translations;
    //   },
      openToolbar(e) {
        this.showToolbar = true;
      },
      onFocusLost(e) {
          this.showToolbar = false;
          if (!this.edited) { return }
          let val = e.target.innerHTML;
          this.editField({
              rowId: this.rowId,
              name: this.fieldName,
              languageId: this.languageId,
              value: val
          });
        //   this.$store.commit('EDIT_FIELD', {
        //       rowId: this.rowId,
        //       name: this.fieldName,
        //       languageId: this.languageId,
        //       value: val
        //   });
      },
      setEdited(e) {
          if (!this.edited) {
            this.edited = true;
          }
      }
  }
}
</script>

<style>
.language-change-enter-active {
    transition: all 0.1s ease;
}

.language-change-leave-active {
    transition: all 0.1s ease;
}

.language-change-enter,
.language-change-leave-to {
    opacity: 0;
    /*transform: translateY(-100%);*/
}

</style>