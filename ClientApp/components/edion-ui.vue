<template>
  <div class="page-editor">
    <ed-topbar :pages="pages" :selectedPageId="id" @newPageCreated="getPages">
      <language-tabs slot="center" :language="languageCode" :pageId="id" />
    </ed-topbar>
  
    <div class="section" v-if="rows.length == 0">
      <div class="container">
        <div class="columns">
        <div class="column card notification is-danger is-6 is-offset-3 has-text-centered">
          No rows, click below to choose and add one!
        </div>
        </div>
      </div>
    </div>

    <div class="notification is-danger">
      Pending Changes: {{ $store.state.changes.length }}
    </div>
  
    <div class="ed-page" :data-page-id="id">
      <component v-for="row in rows" :is="row.type" :languageId="languageId" :rowId="row.id" :fields="row.fields"></component>

      <div class="container">
        <button class="button is-info is-fullwidth" @click="openRowPicker()">Add row</button>
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
      msg: 'Welcome to page-editor',
      pages: [],
      rows: []
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
    getPages: function () {
      this.$http
        .get('/api/Page')
        .then(response => {
          //console.log('RECIEVED PAGE LIST!', response.data)
          this.pages = response.data;
        })
        .catch((error) => console.log(error))
    },
    fetchRows: function () {
      //console.log('FETCH MY ROWS!');
      this.$http
        .get('/api/Row?id=' + this.id + '&lang=' + this.languageId)
        .then(response => {
          console.log('RECIEVED ROW LIST!', response.data)
          this.rows = response.data;
          // this.rows = [
          //   {
          //     type: 'row-simple'
          //   }
          // ]
        })
        .catch((error) => {
          console.log(error);
          //this.$router.push({ name: 'home' });
        });
    },
    openRowPicker: function () {
      console.log('Open row picker!');
      //console.log(Rows)
      var row = Rows[0];
      console.log(row);

      this.$http
        .post('/api/Row', { pageId: this.id, type: row.type, fields: row.fields })
        .then(response => {
          console.log('RECIEVED THE ADDED ROW', response.data)
          this.rows.push(response.data);
        })
        .catch((error) => console.log(error))
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
    '$route': 'fetchRows' // .params.id ?
  },
}
</script>

<style>

</style>