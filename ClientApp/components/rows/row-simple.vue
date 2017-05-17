<template>
    <div class="section ed-row">
        <a class="ed-delete-row delete is-medium"></a>
        <div class="container">
            <div class="columns">
                <div class="column is-two-thirds">
                    <div class="notification">
                        <!--{{ leftText2 }}
                                            <button class="button" @click="leftText2 = 'nytt värde'; test()">Byt värde</button>
                                            <br>-->
                        {{ leftText }}
                        <br>
                        <ed-text fieldName="leftText" :languageId="languageId" :rowId="rowId" default="detta är vänstertext" />
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <ed-image v-model="image" :rowId="rowId" size="4by3" />
                        </div>
                        <div class="card-content">
                            <!--<ed-text v-model="imageDescription" :languageId="languageId" :rowId="rowId" :testFields="testFields['leftText']" default="En snazzig bildtext"/>-->
                            <!--@onFieldChange="saveField"-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'

// let defaultValues = {
//     leftText: 'Default left text',
//     imageDescription: 'A pretty picture',
//     image: { translate: false, value: 'example2.jpg' }
// }

// let fieldInits = {
//     leftText: {
//         1: 'På svenska',
//         2: 'English',
//         3: 'Japanese'
//     },
//     image: {
//         0: 'example5.jpg'
//     },
//     imageDescription: {
//         1: 'På svenska 222',
//         2: 'English 222',
//         3: 'Japanese 222'
//     }
// }

// var spreadData = {
//     leftText: {},
//     image: {},
//     imageDescription: {}
// }


// let fieldInit = {};
// Object.keys(defaultValues).map(function (key, index) {
//     fieldInit[key] = '';
// });

export default {
    name: 'row-simple',
    components: {
        EdText,
        EdImage
    },
    props: ['fields', 'rowId', 'languageId'], // Mixin
    data() {
        return {
            //leftText: {},
            image: {},
            imageDescription: {}
            //...fieldInits
            //leftText2: ''
        }
    },
    computed: {
        // leftText: function() {
        //     return this.fields.leftText[languageId];
        // }
        //   testText: function() {
        //     return this.fields.leftText
        //   }
        imageTest: function() {
            return this.$store.state.rows[this.rowId]
        },
        fieldsTest: function() {
            return this.$store.state.rows[this.rowId].fields;
        },
        leftText: function() {
            return this.fieldsTest[this.languageId];
        }
    },
    methods: {
        test() {
            console.log('TEST - BLUR', this.leftText2);
        }
        // saveField(f) {
        //     console.log('ÖÖÖÖ', f)
        //     this.$store.commit('setField', {
        //         rowId: this.rowId,
        //         name: f.name,
        //         languageId: f.languageId,
        //         value: f.value
        //     });
        //     this[f.name][f.languageId] = f.value;
        //}

    },
    watch: {
        // fields: function (newValue) {
        //     console.log('fields changed', Object.keys(this.fields));
        //     // this.leftText = newValue.leftText;
        //     // this.imageDescription = newValue.imageDescription;
        //     // this.image = newValue.image;
        // }
        // 'leftText': function (newVal, a, b) {
        //     console.log('LeftText changed', newVal, a, b)
        //     //console.log('Row: ' + this.rowId + ', field: ' + this.f)
        // },
        // languageId: function (newVal) {
        //     //if (this)
        //     var lt = this.fields.leftText[newVal]; // loop obv
        //     this.leftText = lt;

        //     console.log('language switched, changing lefttext', lt);
        //     //this.imageDescription = this.fields;
        // }
    },
    created() {
        // console.log('TESTA SPREAD?', defaultValues);
        // // var nullade;
        // var res = {};
        // var test = Object.keys(defaultValues).map(function (key, index) {
        //     var v = defaultValues[key];
        //     var lang = (typeof v === 'string' || v.translate === true) ? this.languageId : 0

        //     //nullade[key] *= 2;
        // });
        // console.log('Test:', res)

        // Bara om prop är noll
        // for (var f of Object.keys(defaultValues)) {
        //     console.log('FROM STORE:', this.$store.state.rows.find(r => r.rowId == this.id));
        //     console.log('Field ' + f, defaultValues[f].value || defaultValues[f], this[f])
        //     var val = defaultValues[f]

        //     let translate = (typeof val === 'string' || val.translate === true); // Either current languageId or dont translate
        //     let lang =  translate ? this.languageId : 0;
        //     //console.log('xxxxx', this[f][lang]);
        //     if (!this[f][lang]) { // It has no field
        //         let defaultFieldValue = defaultValues[f].value || defaultValues[f];
        //         var vm = {};
        //         var translations = translate ? [1, 2, 3] : [0];
        //         translations.forEach((v, i) => {
        //             vm[v] = defaultFieldValue;
        //         });
        //         console.log('NY FIN VM:', vm);
        //         this[f] = vm;
        //         //this.$set(this[f], lang, defaultFieldValue);
        //         //this[f][lang] = defaultValues[f].value || defaultValues[f]; // The default value
        //         var self = this;
        //         translations.forEach(function(v, i) {
        //             self.$store.commit('setField', { // Only really needs to be setField..
        //                 name: f,
        //                 rowId: self.rowId,
        //                 value: defaultFieldValue,
        //                 languageId: v
        //             });
        //         });
        //     }
        //     console.log('Create a new field for row', this.rowId, 'called', f, 'now');
        //     this.$watch(f, function (newVal, oldVal) {
        //         console.log('FIELD CHANGED: ' + f, newVal, 'från', oldVal, 'language:', this.$route.params.languageCode);
        //     });
        // }

        // if (!this.fields) {
        //     console.log('Created. Fields3 Does not exist - theres no saved data for this so create defaults');
        //     var keys = Object.keys(defaultValues);
        //     var viewModel = {};
        //     for (var f of keys) {
        //         console.log('Field ' + f + ': ' + defaultValues[f], this[f])
        //         let val = defaultValues[f];

        //         let lang = (typeof val === 'string' || val.translate === true) ? this.languageId : 0; // Either current languageId or dont translate
        //         this.$store.commit('addField', {
        //             name: f,
        //             rowId: this.rowId,
        //             newValue: this[f],

        //         });
        //         //this[f] = defaultValues[f];
        //         console.log('Create a new field for row', this.rowId, 'called', f, 'now');
        //         this.$watch(f, function (newVal, oldVal) {
        //             console.log('FIELD CHANGED: ' + f, newVal, 'från', oldVal, 'language:', this.$route.params.languageCode);
        //         });
        //     }
        // }
    }
}
</script>

<style>
.ed-row {
    position: relative;
}

.ed-delete-row {
    position: absolute;
    right: 6px;
    top: 6px;
}
</style>