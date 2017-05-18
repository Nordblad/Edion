<template>
  <div class="page-editor">
    <ed-topbar :selectedPageId="id" @newPageCreated="getPages" @click.native="deselectRow()" @addRowButtonClicked="openRowPicker">
      <language-tabs slot="center" />
    </ed-topbar>
    <div style="height: 52px"></div>
  
    <!--<div class="notification is-info" v-if="numberOfRows == 0 && !rowsLoading && !dismissStarterNotification" style="position: absolute; left: 10px; top: 62px;">
        <button class="delete" @click="dismissStarterNotification = true"></button>
        Press the "new row" button in the top menu to add content.
      </div>-->
  
    <div class="ed-page" :data-page-id="id">
      <!--<ed-row-base v-for="row in $store.state.rows" :rowId="row.rowId">
                  <component :is="row.type"></component>
                </ed-row-base>-->
  
      <component v-for="row in $store.state.rows" :is="row.type" :rowId="row.rowId"></component>
  
      <!--<div class="section">
              <div class="container">
                <button class="button is-info is-outlined is-fullwidth" @click="openRowPicker()">Add row</button>
              </div>
            </div>-->
  
      <div class="is-overlay" style="background-color: rgba(1, 1, 1, .5)" v-if="rowsLoading">LOADING!</div>
  
      <row-picker v-show="rowPickerOpen" @ok="addNewRow" @cancel="rowPickerOpen = false"></row-picker>
  
    </div>
  </div>
</template>

<script>
import EdTopbar from 'components/ed-topbar'
import LanguageTabs from 'components/language-tabs'
import Rows from '../rows'
import RowSimple from 'components/rows/row-simple'
import RowBlocks from 'components/rows/row-blocks'
import Languages from '../languages'
import RowPicker from 'components/row-picker'
import EdRowBase from 'components/rows/ed-row-base'


export default {
  name: 'edion-ui',
  components: {
    EdTopbar,
    LanguageTabs,
    RowSimple,
    RowBlocks,
    RowPicker,
    EdRowBase
  },
  props: ['id', 'languageCode'],
  data() {
    return {
      newRowIdCounter: -1,
      pagesLoading: false,
      rowsLoading: false,
      rowPickerOpen: false
    }
  },
  computed: {
    languageId() {
      return this.$store.state.languageId;
    },
    rows() {
      return this.$store.state.rows;
    }
  },
  created() {
    this.getPages();
    this.fetchRows();
    this.$store.commit("CHANGE_LANGUAGE", this.$route.params.languageCode);
  },
  methods: {
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
      this.$store.dispatch('FETCH_ROWS', this.id).then(() => self.rowsLoading = false);
    },
    openRowPicker: function () {
      console.log('Open row picker!', this.newRowIdCounter);
      var row = {
        pageId: this.id,
        rowId: this.newRowIdCounter,
        //type: 'row-simple',
        type: 'row-blocks',
        fields: {},
        sortOrder: this.$store.getters.numberOfRows
      }
      this.newRowIdCounter--;
      this.$store.commit('ADD_ROW', row)
      //this.$store.commit('SELECT_ROW', row.rowId);
    },
    deselectRow() {
      //this.$store.commit('SELECT_ROW', 0);
    }
  },
  watch: {
    '$route.params.id': function () {
      console.log('ID CHANGED!');
      this.fetchRows();
    },
    '$route.params.languageCode': function (val) {
      this.$store.commit("CHANGE_LANGUAGE", val);
    }
  }
}
</script>

<style>

</style>