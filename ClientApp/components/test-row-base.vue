<template>
    <div class="test-new-row-base section">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'test-row-base',
  data () {
    return {
      msg: 'Welcome to test-new-row'
    }
  },
  methods: {
  }
}
</script>

<style>

</style>