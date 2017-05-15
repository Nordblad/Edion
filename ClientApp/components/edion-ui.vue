<template>
  <div class="page-editor">
    <ed-topbar :pages="pages" :selectedPageId="id"></ed-topbar>
    Meny osv {{ id }} {{ language }}
  </div>
</template>

<script>
import EdTopbar from 'components/ed-topbar'

export default {
  name: 'edion-ui',
  components: {
    EdTopbar
  },
  props: ['id', 'language'],
  data () {
    return {
      msg: 'Welcome to page-editor',
      pages: []
    }
  },
  created() {
    this.getPages();
    this.fetchRows();
  },
  methods: {
    getPages: function() {
      this.$http
        .get('/api/Page')
        .then(response => {
            console.log('RECIEVED PAGE LIST!', response.data)
            this.pages = response.data;
        })
        .catch((error) => console.log(error))
    },
    fetchRows: function() {
      console.log('FETCH MY ROWS!');
      this.$http
        .get('/api/Page')
        .then(response => {
            console.log('RECIEVED ROW LIST!', response.data)
            this.rows = response.data;
        })
        .catch((error) => console.log(error))
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchRows' // .params.id ?
  },
}
</script>

<style>

</style>