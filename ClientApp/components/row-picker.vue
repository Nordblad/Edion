<template>
    <!--<div class="row-picker">
            <div class="container">
                <div class="box">Hej</div>
            </div>
        </div>-->
    <div class="modal is-active" v-if="show">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">asd</div>
        </div>
        <button class="modal-close"></button>
    </div>
</template>

<script>
import Rows from '../rows'

export default {
  name: 'row-picker',
  data () {
    return {
      rows: Rows,
      show: false
    }
  }
}
</script>

<style>
.row-picker {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(1, 1, 1, .4);
    z-index: 7800;
    padding: 3rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
</style>