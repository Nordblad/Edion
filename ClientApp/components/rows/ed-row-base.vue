<template>
    <div :class="classes" :style="styles">
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
    }
  },
  props: ['rowId', 'backgroundColor', 'linearGradient', 'backgroundClass'],
  mounted() {
      console.log('BASE HAS ID: ' + this.rowId)
  },
  computed: {
      classes() {
          var classObj = {
              'section': true,
              'ed-row': true,
              'selected': this.isSelected
          };
          if (this.backgroundClass) {
              classObj['ed-row-bg-' + this.backgroundClass] = true;
          }
          return classObj;
      },
      styles() {
        if (this.linearGradient) {
          return { background: this.linearGradient }
        } else if (this.backgroundColor) {
          return { backgroundColor: this.backgroundColor }
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
.ed-row.selected {
    position: relative;
}

.ed-row.selected {
    box-shadow: 0px 0px 18px 3px #d2d2d2;
    z-index: 1;
}

.ed-delete-row {
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>