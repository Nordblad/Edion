<template>
    <div class="modal is-active">
        <div class="modal-background" @click="cancel"></div>
        <div :class="card ? 'modal-card' : 'modal-content is-extra-wide'">
            <header class="modal-card-head" v-if="card">
                <p class="modal-card-title">{{ title }}</p>
                <button class="delete" @click="cancel"></button>
            </header>
    
            <div :class="card ? 'modal-card-body' : 'box'">
                <slot></slot>
            </div>
    
            <!--<section class="modal-card-body" v-if="card">
                    <slot></slot>
                </section>
                <slot v-else></slot>-->
            <footer class="modal-card-foot" v-if="card" style="justify-content: flex-end;">
                <a class="button is-outline" @click="cancel">{{ cancelButton }}</a>
                <a :class="['button', okButtonClass]" @click="ok">{{ okButton }}</a>
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
      },
      card: {
          default: true
      },
      okButtonClass: {
          default: 'is-success'
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
.box.is-transparent {
    background-color: transparent;
}

@media screen and (min-width: 1024px) {
    .modal-content {
        width: 824px;
    }
}
</style>