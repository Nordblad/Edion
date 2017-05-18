<template>
    <div class="ed-hover-buttons">
        <slot name="content"></slot>
        <div :class="classes">
            <!--<div class="card-content">-->
                <slot name="buttons"></slot>
            <!--</div>-->
        </div>
    </div>
</template>

<script>
export default {
  name: 'ed-button-bar',
  props: ['pos', 'show'],
  computed: {
      classes: function() {
          if (!this.pos || this.pos == 'topleft') {
              return ['box', 'ed-button-bar', 'is-top-left']
          }
      }
  }
//   data () {
//     return {
//       msg: 'Welcome to ed-button-bar'
//     }
//   }
}
</script>

<style>
.ed-button-bar .box {
    padding: 3px;
    background-color: #b5b5b5;
}

.ed-hover-buttons:not(:hover) .ed-button-bar {
    display: none;
}

.ed-button-bar.is-top-left {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
}
</style>