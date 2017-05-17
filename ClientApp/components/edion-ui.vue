<template>
  <div class="page-editor">
    <ed-topbar :selectedPageId="id" @newPageCreated="getPages" @click.native="deselectRow()">
      <language-tabs slot="center" />
    </ed-topbar>
    <div style="height: 52px"></div>
  
    <div class="section" v-if="numberOfRows == 0">
      <div class="container">
        <div class="columns">
          <div class="column card notification is-danger is-6 is-offset-3 has-text-centered">
            No rows, click below to choose and add one!
          </div>
        </div>
      </div>
    </div>
  
    <div class="ed-page" :data-page-id="id">
      <!--<ed-row-base v-for="row in $store.state.rows" :rowId="row.rowId">
            <component :is="row.type"></component>
          </ed-row-base>-->
  
      <component v-for="row in $store.state.rows" :is="row.type" :rowId="row.rowId"></component>
  
      <div class="section">
        <div class="container">
          <button class="button is-info is-outlined is-centered" @click="openRowPicker()">Add row</button>
        </div>
      </div>
  
      <div class="is-overlay" style="background-color: rgba(1, 1, 1, .5)" v-if="rowsLoading">LOADING!</div>
  
      <row-picker></row-picker>
  
    </div>
    <div class="card" style="position: fixed; left: 20px; bottom: 20px; width: 360px; z-index: 3">
      <header class="card-header">
        <p class="card-header-title">
          Changes
        </p>
        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div class="card-content is-paddingless">
        <table class="table is-narrow">
          <tr v-for="r in $store.state.changedRows" @click="print(r)">
            <td>{{ r.type }}</td>
            <td>{{ r.rowId }}</td>
            <td>{{ r.sortOrder }}</td>
          </tr>
          <tr v-for="r in $store.state.changedFields" @click="print(r)">
            <td>{{ r.name }}</td>
            <td>{{ r.languageId }}</td>
            <td>{{ r.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import EdTopbar from 'components/ed-topbar'
import LanguageTabs from 'components/language-tabs'
import Rows from '../rows'
import RowSimple from 'components/rows/row-simple'
import Languages from '../languages'
import RowPicker from 'components/row-picker'
import EdRowBase from 'components/rows/ed-row-base'


export default {
  name: 'edion-ui',
  components: {
    EdTopbar,
    LanguageTabs,
    RowSimple,
    RowPicker,
    EdRowBase
  },
  props: ['id', 'languageCode'],
  data() {
    return {
      newRowIdCounter: -1,
      pagesLoading: false,
      rowsLoading: false
    }
  },
  computed: {
    languageId() {
      return this.$store.state.languageId;
    },
    numberOfRows() {
      return Object.keys(this.$store.state.rows).length;
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
        type: 'row-simple',
        fields: {},
        sortOrder: this.numberOfRows
      }
      this.newRowIdCounter--;
      this.$store.commit('ADD_ROW', row)
      this.$store.commit('SELECT_ROW', row.rowId);
    },
    deselectRow() {
      this.$store.commit('SELECT_ROW', 0);
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