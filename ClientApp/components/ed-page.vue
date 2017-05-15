<template>
  <div class="ed-page">
    Här är en sida som håller på att redigeras {{ language }}
    <div v-for="row in rows">
      Row {{ row.Id }}
      <br>Type: {{ row.Type }}
    </div>
    <button>Add row</button>
  </div>
</template>

<script>
export default {
  name: 'ed-page',
  props: {
    id: {
      required: true
    },
    language: {
      type: String,
      default: 'se'
    }
  },
  data() {
    return {
      msg: 'Welcome to ed-page',
      rows: []
    }
  },
  methods: {
    getRows: function (id) {
      console.log('Loading rows for Page ' + this.id);
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.rows = [];
    getRows(to.params.id);
    // getPost(to.params.id, (err, post) => {
    //   this.setData(err, post)
    //   next()
    // })
  }
}
</script>

<style>

</style>