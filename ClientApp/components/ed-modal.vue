<template>
    <div class="modal is-active">
        <div class="modal-background" @click="cancel"></div>
        <div class="modal-card">
            <header class="modal-card-head" v-if="title">
                <p class="modal-card-title">{{ title }}</p>
                <button class="delete" @click="cancel"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <a class="button is-success" @click="ok">{{ okButton }}</a>
                <a class="button" @click="cancel">{{ cancelButton }}</a>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      open: {
          default: false
      },
      title: {
          default: null
      },
      okButton: {
          default: 'Ok'
      },
      cancelButton: {
          default: 'Cancel'
      }
  },
  data () {
    return {
      //msg: 'Welcome to modal-new-page'
    }
  },
  methods: {
      ok: function() {
          console.log('Modal OK')
          this.$emit('ok');
      },
      cancel: function() {
          console.log('Modal cancel');
          this.$emit('cancel');
      }
  }
}
</script>

<style>

</style>