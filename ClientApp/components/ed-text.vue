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
        <div class="content ed-text-editor" contenteditable="true" @blur="onFocusLost" @input="setEdited" v-html="html" @focus="openToolbar"></div>
        <div class="notification is-danger">{{ 'TOMT?' }}</div>
    </div>
</template>

<script>
import EdButtonBar from './ed-button-bar'
import Languages from '../languages'

export default {
  name: 'ed-text',
  components: {
      EdButtonBar
  },
//   model: {
//     prop: 'field',
//     event: 'bajs'
//   },
  props: ['languageId', 'rowId', 'fieldName', 'default'],
  data () {
    return {
      edited: false,
      oldValue: null,
      translate: true,
      showToolbar: false
    }
  },
  mounted() {
      console.log('FIELD INIT - ' + this.fieldName, this.stateFields)
    // Make sure we have fields - or create them


    // if (!this.stateFields) {
    //     console.log('Theres no fieldName prop in the state, create it');
    //     var poop = { 1: 'swe', 2:'eng', 3:'jaaap'};
    //     this.$store.commit('ADD_FIELD', { rowId: this.rowId, name: 'leftText', fields: poop });
    //     console.log('NU SKA DET VÄL FINNAS', this.$store.state.rows[this.rowId])
    // }


    // Object.keys(Languages).forEach((v, i) => {
    //     var lang = Languages[v].id;
    //     console.log('looping languages', lang);
    //     if (!this.stateFields[lang]) {
    //         console.log('No value for language ', lang)
    //         this.$store.commit('EDIT_FIELD', {
    //             name: this.fieldName,
    //             languageId: lang,
    //             rowId: this.rowId,
    //             value: this.default
    //         });
    //     }
    // });
    
    // if (!this.fields) {
    //     console.log('Ed-text är mountad och fields finns ej..');
    //     object. Languages.map(y => console.log(y));
    //     //  .forEach((i, v) => {
    //     //     console.log('Lägg tll fält för ' + v.code)
    //     // })
    // }
  },
  computed: {
      stateFields() {
                var f = this.$store.state.rows[this.rowId].fields[this.fieldName];
                if (f) return f;
                    var languages = this.translate ? [1, 2, 3] : [0];
                    for (var i = 0; i < languages.length; i++) {
                        this.editField({
                            rowId: this.rowId,
                            name: this.fieldName,
                            languageId: languages[i],
                            value: this.default + ' - ' + i});
                        //this.$store.commit('EDIT_FIELD', { rowId: this.rowId, name: this.fieldName, languageId: languages[i], value: this.default + ' - ' + i})
                    }

                    //var poop = { 1: 'swe', 2:'eng', 3:'jaaap'};
                    //this.$store.commit('ADD_FIELD', { rowId: this.rowId, name: this.fieldName, fields: translations });
                    console.log('INITIALIZED FIELD', this.fieldName, this.rowId);
            return this.$store.state.rows[this.rowId].fields[this.fieldName];;
        //   var f = this.$store.state.rows[this.rowId].fields[this.fieldName];
        //   if (!f) {
        //     console.log('Theres no fieldName prop in the state, create it');
        //     var translations = {};
        //     var languages = this.translate ? [1, 2, 3] : [0];
        //     for (var i = 0; i < languages.length; i++) {
        //         translations[languages[i]] = this.default + ' - ' + languages[i];
        //     }

        //     //var poop = { 1: 'swe', 2:'eng', 3:'jaaap'};
        //     this.$store.commit('ADD_FIELD', { rowId: this.rowId, name: this.fieldName, fields: translations });
        //     console.log('NU SKA DET VÄL FINNAS', this.$store.state.rows[this.rowId])
        //   if (!translations) {
        //       console.log('Init EdText translations!')
        //         Object.keys(Languages).forEach((v, i) => {
        //         var lang = Languages[v].id;
        //         console.log('looping languages', lang);
        //         if (!translations[lang]) {
        //             console.log('No value for language ', lang)
        //             this.$store.commit('EDIT_FIELD', {
        //                 name: this.fieldName,
        //                 languageId: lang,
        //                 rowId: this.rowId,
        //                 value: this.default
        //             });
        //         }
        //     });
        //   }
      },
      html() {
          //return 'shit';
        //   if (!this.stateFields) {
        //       this.createDefaultStateFields();
        //   }
          return this.stateFields[this.languageId]
      }
  },
  methods: {
      createDefaultStateFields() {
        var field = {};
        this.set(field, 'asd', 'ddsa')
        var translations = {};
        var lang = this.translate ? [1, 2, 3] : [0];
        var self = this;
        lang.forEach((i, v) => {
            translations[v] = self.defVal;
        });
        field[this.fieldName] = translations;
      },
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
            //console.log('Set edited')
          }
      },
      editField(field) {
          this.$store.commit('EDIT_FIELD', field);
      }
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