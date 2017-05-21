<template>
    <div class="test-row-list">
        <div class="test-row-admin-wrapper ed-row-edit-wrapper" v-for="(row, i) in sortedRows" :key="row.rowId">
            <!--<div class="notification is-danger" style="position: absolute; left: 50px; top: 10px; z-index: 9999">I: {{ i }} - row.sortOrder: {{ row.sortOrder }}</div>-->
            <a class="ed-delete-row delete is-large ed-row-buttons" @click="deleteRow(row.rowId)"></a>
            <div class="ed-row-order-buttons ed-row-buttons">
                <div class="ed-row-order-button ed-row-up" @click="moveRowUp(row)" v-show="row.sortOrder > 0">
                    <span class="icon is-medium">
                        <i class="fa fa-caret-up"></i>
                    </span>
                </div>
                <div class="ed-row-order-button ed-row-down" @click="moveRowDown(row)" v-show="row.sortOrder < sortedRows.length - 1">
                    <span class="icon is-medium">
                        <i class="fa fa-caret-down"></i>
                    </span>
                </div>
            </div>
    
            <component :is="row.type" :rowId="row.rowId" />
        </div>
    </div>
</template>

<script>
// import TestRowBase from 'components/test-row-base'
// import TestRowExample from 'components/test-row-example'

import RowSimple from 'components/rows/row-simple'
import RowBlocks from 'components/rows/row-blocks'
import RowHeader from 'components/rows/row-header'
import RowImages from 'components/rows/row-images'
import RowFooter from 'components/rows/row-footer'
import RowBar from 'components/rows/row-bar'

export default {
  name: 'ed-row-list',
  components: {
    //   TestRowBase,
    //   TestRowExample,
    RowSimple,
    RowBlocks,
    RowHeader,
    RowImages,
    RowFooter,
    RowBar,
  },
  data () {
    return {
    }
  },
  methods: {
      moveRowUp(row) {
        this.moveRow(row.sortOrder, row.sortOrder - 1);
      },
      moveRowDown(row) {
        this.moveRow(row.sortOrder, row.sortOrder + 1);
      },
      moveRow(from, to) {
        console.log('Moving row from', from, 'to', to)
        this.$store.commit('MOVE_ROW', { from, to });
        //row.sortOrder = row.sortOrder - 1;
      },
      deleteRow(rId) {
        this.$store.commit("DELETE_ROW", rId);
     }
  },
  computed: {
    sortedRows() {
      var order = 1; // Asc
      return this.$store.state.rowArray.sort((a, b) => {
        if (a.sortOrder < b.sortOrder) {
          return -order;
        }
        if (a.sortOrder > b.sortOrder) {
          return order;
        }
        return 0;
      });
    }
  }
}
</script>

<style>
.test-row-admin-wrapper {
    position: relative;
}

.ed-row-edit-wrapper:not(:hover) .ed-row-buttons {
    display: none;
}

.ed-row-buttons {
    z-index: 5;
}


/*
.test-row-settings {
    position: absolute;
    top: 10px;
    background-color: rgba(15, 15, 15, .5);
    padding: 4px;
    border-radius: 4px;
}

.test-row-settings.left {
    left: 10px;
}

.test-row-settings.right {
    right: 10px;
}*/

.ed-delete-row {
    position: absolute;
    right: 10px;
    top: 10px;
}

.ed-row-order-buttons {
    position: absolute;
    left: 10px;
    top: 10px;
}

.ed-row-order-buttons .ed-row-order-button {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(10, 10, 10, .2);
    border-radius: 4px;
}

.ed-row-order-buttons .ed-row-order-button:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(10, 10, 10, .6);
}

.ed-row-order-buttons .ed-row-order-button:not(:last-child) {
    margin-bottom: 4px;
}
</style>