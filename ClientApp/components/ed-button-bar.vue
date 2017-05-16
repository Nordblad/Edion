<template>
    <div class="ed-hover-buttons">
        <slot name="content"></slot>
        <div :class="classes">
            <!--class="card ed-button-bar"-->
            <div class="card-content">
                <!--<p class="field">-->
                <slot name="buttons"></slot>
                <!--</p>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ed-button-bar',
  props: ['pos'],
  computed: {
      classes: function() {
          if (!this.pos || this.pos == 'topleft') {
              return ['card', 'ed-button-bar', 'is-top-left']
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
.ed-button-bar .card-content {
    padding: 0.5rem;
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