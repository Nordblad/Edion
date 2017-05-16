<template>
    <div class="section ed-row">
        <a class="ed-delete-row delete is-medium"></a>
        <div class="container">
            <div class="columns">
                <div class="column is-two-thirds">
                    <div class="notification">
                        {{ leftText2 }}
                        <button class="button" @click="leftText2 = 'nytt värde'; test()">Byt värde</button>
                        <br>
                        {{ leftText }}
                        <br>
                        <ed-text v-model="leftText" :languageId="languageId" />
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <ed-image v-model="image" size="4by3" />
                        </div>
                        <div class="card-content">
                            <ed-text v-model="imageDescription" />
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

let defaultValues = {
    leftText2: 'Default left text',
    imageDescription2: 'A pretty picture',
    image2: 'example2.jpg'
}

export default {
    name: 'row-simple',
    components: {
        EdText,
        EdImage
    },
    props: ['fields', 'rowId', 'languageId', 'fields3'], // Mixin
    data() {
        return {
            msg: 'Welcome to row-simple',
            leftText: this.fields.leftText,
            imageDescription: this.fields.imageDescription,
            image: this.fields.image,
            //testText: this.fields.leftText,
            fields2: {
                leftText: {
                    // id: 123,
                    // values: {
                    //     0: 'Används bara om det inte ska översättas?',
                    //     1: 'På svenska', // Behöver ju ID på alla
                    //     2: 'In english',
                    //     3: 'Domo Arigato'
                    // },
                    0: {
                        value: 'Tex en bild här',
                        id: 455
                    },
                    1: {
                        value: 'På svenska 2',
                        id: 45441
                    }
                },
                image: {
                    id: 333,
                    value: 'example1.jpg'
                }
            },
            ...defaultValues
            //leftText2: ''
        }
    },
    computed: {
        //   testText: function() {
        //     return this.fields.leftText
        //   }
    },
    methods: {
        test() {
            console.log('TEST - BLUR', this.leftText2);
        },
        saveField(rowId, fieldName, languageId, value) {
            console.log('SAVE - RowId', rowId, 'fieldName', fieldName, 'languageId', languageId, 'value:', value)
        }
    },
    watch: {
        fields: function (newValue) {
            console.log('fields changed', Object.keys(this.fields));
            this.leftText = newValue.leftText;
            this.imageDescription = newValue.imageDescription;
            this.image = newValue.image;
        },
        //   leftText: function(newVal) {
        //       console.log('LeftText changed')
        //       //console.log('Row: ' + this.rowId + ', field: ' + this.f)
        //   },
    },
    created() {
        if (!this.fields3) {
            console.log('Created. Fields3 Does not exist - theres no saved data for this so create defaults');
            var keys = Object.keys(defaultValues);
            console.log('Fields:', keys);

            for (var f of keys) {
                console.log('Field ' + f + ': ' + defaultValues[f], 'it already has value', this[f])
                //this[f] = defaultValues[f];
                console.log('Create a new field for row', this.rowId, 'called', f, 'now');
                this.$watch(f, function(newVal, oldVal) {
                    console.log('FIELD CHANGED: ' + f, newVal, 'från', oldVal, 'language:', this.$route.params.languageCode);
                });
            }
        }
        // var keys = Object.keys(this.fields2);
        // console.log('Created!', keys);

        // for (var t in keys) {
        //     console.log('LOOPING ' + t, keys[t])
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