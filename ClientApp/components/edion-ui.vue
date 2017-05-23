<template>
  <div class="page-editor">
    <ed-topbar :selectedPageId="id" @newPageCreated="getPages" @click.native="deselectRow()" @addRowButtonClicked="rowPickerOpen = true" :hasLoadedRows="hasLoadedRows">
      <language-tabs slot="center" />
    </ed-topbar>
    <div style="height: 52px"></div>

  
    <div class="ed-page" :data-page-id="id" v-show="!rowsLoading">
      <ed-row-list></ed-row-list>
  
      <!--<component v-for="row in $store.state.rows" :is="row.type" :rowId="row.rowId"></component>-->
      <!--<component v-for="(row, i) in sortedRows" :is="row.type" :rowId="row.rowId"></component>-->
  
    </div>
    <!--<div class="is-overlay" style="background-color: rgba(1, 1, 1, .5); position: fixed;" v-if="rowsLoading">LOADING!</div>-->
  
    <transition name="modal-fade">
      <row-picker v-show="rowPickerOpen" @ok="addNewRow" @cancel="rowPickerOpen = false"></row-picker>
    </transition>
  
    <!--<ed-image-picker :show="true"></ed-image-picker>-->
  </div>
</template>

<script>
import EdTopbar from 'components/ed-topbar'
import LanguageTabs from 'components/language-tabs'

//import Rows from '../rows'
import EdRowList from 'components/ed-row-list'

//import EdImagePicker from 'components/ed-image-picker'

// import RowSimple from 'components/rows/row-simple'
// import RowBlocks from 'components/rows/row-blocks'
// import RowHeader from 'components/rows/row-header'
// import RowImages from 'components/rows/row-images'
// import RowFooter from 'components/rows/row-footer'
// import RowBar from 'components/rows/row-bar'

import Languages from '../languages'
import RowPicker from 'components/row-picker'
// import EdRowBase from 'components/rows/ed-row-base'


export default {
  name: 'edion-ui',
  components: {
    EdTopbar,
    LanguageTabs,
    // RowSimple,
    // RowBlocks,
    // RowHeader,
    // RowImages,
    // RowFooter,
    // RowBar,
    RowPicker,
    // EdRowBase,

    EdRowList
    //EdImagePicker
  },
  props: ['id', 'languageCode'],
  data() {
    return {
      newRowIdCounter: -1,
      pagesLoading: false,
      rowsLoading: false,
      rowPickerOpen: false,
      hasLoadedRows: false,
    }
  },
  computed: {
    languageId() {
      return this.$store.state.languageId;
    },
    // sortedRows() {
    //   var order = 1; // Ascending
    //   return this.$store.state.rowArray.sort((a, b) => {
    //     if (a.sortOrder < b.sortOrder) {
    //       return -order;
    //     }
    //     if (a.sortOrder > b.sortOrder) {
    //       return order;
    //     }
    //     return 0;
    //   });
    // }
  },
  created() {
    this.getPages();
    this.fetchRows();
    this.$store.commit("CHANGE_LANGUAGE", this.$route.params.languageCode);
  },
  methods: {
    setTitle() {
      //var t = this.$store.state.pages
    },
    addNewRow(type) {
      this.rowPickerOpen = false;
      console.log('ADD NEW ROW', type);

      var row = {
        pageId: this.id,
        rowId: this.newRowIdCounter,
        type: type,
        fields: {},
        sortOrder: this.$store.getters.numberOfRows
      }
      this.newRowIdCounter--;
      this.$store.commit('ADD_ROW', row)
    },
    print(m) {
      console.log(m);
    },
    getPages: function () {
      this.$store.dispatch('FETCH_PAGES');
    },
    fetchRows: function () {
      var self = this;
      this.rowsLoading = true;
      this.hasLoadedRows = false;
      this.$store.dispatch('FETCH_ROWS', this.id).then(() => { console.log('LADDAT!'); self.setTitle(); self.rowsLoading = false; self.hasLoadedRows = true });
    },
    deselectRow() {
      //this.$store.commit('SELECT_ROW', 0);
    }
  },
  watch: {
    '$route.params.id': function () {
      console.log('ID CHANGED!');
      this.hasLoadedRows = false;
      this.fetchRows();
    },
    '$route.params.languageCode': function (val) {
      this.$store.commit("CHANGE_LANGUAGE", val);
    }
  }
}
</script>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all .2s ease-in-out;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>