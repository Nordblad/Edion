<template>
  <div class="page-editor">
    <ed-topbar :selectedPageId="id" @newPageCreated="getPages">
      <language-tabs slot="center" :languageId="languageId" :pageId="id" />
    </ed-topbar>
  
    <div class="section" v-if="$store.state.changedRows.length === 0 && $store.state.changedFields.length === 0">
      <div class="container">
        <div class="columns">
          <div class="column card notification is-danger is-6 is-offset-3 has-text-centered">
            No rows, click below to choose and add one!
          </div>
        </div>
      </div>
    </div>
  
    <div class="notification is-danger">
      Pending Changes: {{ $store.state.changes.length > 0 }}
    </div>
  
    <div class="ed-page" :data-page-id="id">
      <component v-for="row in $store.state.rows" :is="row.type" :languageId="languageId" :rowId="row.rowId"></component>
  
      <div class="container">
        <button class="button is-info is-outlined is-fullwidth" @click="openRowPicker()">Add row</button>
      </div>

      <div class="is-overlay" style="background-color: red" v-if="rowsLoading">LOADING!</div>
    </div>
    <div class="card" style="position: fixed; left: 20px; bottom: 20px; width: 360px">
      <header class="card-header">
        <p class="card-header-title">
          Changelog
        </p>
        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div class="card-content is-paddingless">
        <table class="table is-narrow">
          <!--<tr v-for="change in $store.state.changes">
            <td>{{ change.type }}</td>
            <td>{{ change.text }}</td>
          </tr>-->
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
// let languages = {
//   se: 1,
//   en: 2,
//   jn: 3
// }


export default {
  name: 'edion-ui',
  components: {
    EdTopbar,
    LanguageTabs,
    RowSimple
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
    languageId: function () {
      return Languages[this.languageCode.toLowerCase()].id;
    }
  },
  created() {
    this.getPages();
    this.fetchRows();
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
      this.$store.dispatch('FETCH_ROWS', this.id).then(() => self.rowsLoading = false );
    },
    openRowPicker: function () {
      console.log('Open row picker!', this.newRowIdCounter);
      var row = {
        pageId: this.id,
        rowId: this.newRowIdCounter,
        type: 'row-simple',
        fields: {},
        // fields: {
        //   leftText: {
        //     1: 'På svenska',
        //     //2: 'English',
        //     3: 'Japanese'
        //   },
        //   image: {
        //     0: 'example5.jpg'
        //   },
        //   imageDescription: {
        //     1: 'På svenska 222',
        //     2: 'English 222',
        //     //3: 'Japanese 222'
        //   }
        // },
        sortOrder: this.newRowIdCounter
      }
      this.newRowIdCounter--;

      //this.$store.commit('')

      //this.rows.push(row);
      this.$store.commit('ADD_ROW', row)
      //console.log('new row:', row)
      // var row = Rows[0];
      // console.log(row);

      // this.$http
      //   .post('/api/Row', { pageId: this.id, type: row.type, fields: row.fields })
      //   .then(response => {
      //     console.log('RECIEVED THE ADDED ROW', response.data)
      //     this.rows.push(response.data);
      //   })
      //   .catch((error) => console.log(error))
    }
    //   for (var prop in row.fields) {
    //     if (!row.fields.hasOwnProperty(prop)) {
    //         //The current property is not a direct property of p
    //         continue;
    //     }
    //     var f = row.fields[prop];
    //     if (typeof f === 'string') {
    //       console.log('this is string')
    //     } else if (typeof f === 'object') {
    //       console.log('and this is object');
    //     }
    //     //Do your logic with the property here
    //     console.log('FIELD:', prop, row.fields[prop], typeof f)
    //   }
    // }
  },
  watch: {
    // call again the method if the route changes
    //'$route': 'fetchRows' // .params.id ?
    '$route.params.id': function () {
      console.log('ID CHANGED!');
      this.fetchRows();
    }
  },
}
</script>

<style>

</style>