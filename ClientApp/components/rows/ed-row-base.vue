<template>
    <div :class="classes" @click="selectRow">
        <a class="ed-delete-row delete is-medium" v-if="isSelected" @click="deleteRow"></a>
        <div class="container">
            <slot name="container"></slot>
        </div>
    </div>
</template>

<script>
//import RowSimple from './row-simple'
export default {
  name: 'ed-row-base',
  components: {
      //RowSimple
  },
  data () {
    return {
      msg: 'Welcome to ed-row-base'
    }
  },
  props: ['rowId'],
  mounted() {
      console.log('BASE HAS ID: ' + this.rowId)
  },
  computed: {
      classes() {
          return {
              'section': true,
              'ed-row': true,
              'selected': this.isSelected
          }
      },
      isSelected() {
          return this.$store.state.selectedRow == this.rowId;
      }
  },
      methods: {
        selectRow(e) {
            if (!this.isSelected) {
                this.$store.commit("SELECT_ROW", this.rowId);
                console.log('Select row!' + this.rowId);
            }
        },
        deleteRow(e) {
            console.log('DELETE?!');
            this.$store.commit("DELETE_ROW", this.rowId);
        }
    }
}
</script>

<style>

</style>