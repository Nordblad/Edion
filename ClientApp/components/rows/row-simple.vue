<template>
    <div class="section ed-row">
        <a class="ed-delete-row delete is-medium"></a>
        <div class="container">
            <div class="columns">
                <div class="column is-two-thirds">
                    <div class="notification ">
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

export default {
    name: 'row-simple',
    components: {
        EdText,
        EdImage
    },
    props: ['fields', 'rowId', 'languageId'], // Mixin
    data() {
        return {
            msg: 'Welcome to row-simple',
            leftText: this.fields.leftText,
            imageDescription: this.fields.imageDescription,
            image: this.fields.image,
            //testText: this.fields.leftText,
            maybeThisWay: {
                fields: {
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
                }
            }
        }
    },
    computed: {
        //   testText: function() {
        //     return this.fields.leftText
        //   }
    },
    methods: {
        test() {
            console.log('TEST - BLUR');
        }
    },
    watch: {
        fields: function (newValue) {
            console.log('fields changed');
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
        console.log('Created!', this.fields);

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