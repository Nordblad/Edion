<template>
    <div :class="{ modal: true, 'is-active': true }">
        <div class="modal-background" @click="cancel()"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">New page</p>
                <button class="delete" @click="cancel()"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <a class="button is-success" @click="ok()">Create page</a>
                <a class="button" @click="cancel()">Cancel</a>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal-page',
  props: ['open'],
  data () {
    return {
      msg: 'Welcome to modal-new-page'
    }
  },
  methods: {
      ok: function() {
          console.log('CREATE PAGGGEE!!')
          this.$emit('ok');
      },
      cancel: function() {
          console.log('cancel!');
          this.$emit('cancel');
      }
  }
}
</script>

<style>

</style>