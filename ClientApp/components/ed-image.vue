<template>
    <div>
        <ed-button-bar pos="topleft">
            <figure class="image is-4by3" slot="content">
                <img :src="fullUrl" :alt="value" />
            </figure>
            <a class="button" slot="buttons" @click="openImagePicker">
                <span class="icon">
                    <i class="fa fa-image"></i>
                </span>
                <span>Change</span>
            </a>
        </ed-button-bar>
        <ed-modal v-if="imagePickerOpen" @ok="changeToImage" @cancel="imagePickerOpen = false">
            <div v-for="image in images" class="ed-imagepicker">
                {{ image }}
                <figure class="image is-4by3" slot="content">
                    <img :src="getImagePath(image)" :alt="value" />
                </figure>
            </div>
        </ed-modal>
    </div>
</template>

<script>
import EdButtonBar from './ed-button-bar'
import EdModal from './ed-modal'

let images = ['example1.jpg', 'example2.jpg', 'example3.jpg']

export default {
  name: 'ed-image',
  components: {
      EdButtonBar,
      EdModal
  },
  props: ['value', 'size'],
  data () {
    return {
      imagePickerOpen: false,
      images
    }
  },
  computed: {
      fullUrl: function() {
          return '/dist/img/' + this.value
      }
  },
  methods: {
      openImagePicker() {
          console.log('open the image picker!')
          this.imagePickerOpen = true;
      },
      changeToImage(arg) {
          console.log('changetoimage ' + arg);
      },
      getImagePath(fileName) {
          return '/dist/img/' + fileName;
      }
  }
}
</script>

<style>

</style>