<template>
  <div class="field is-grouped">
    <router-link v-for="l in languages"
                :class="{ 'nav-item': true, 'is-tab': true, 'is-small': true, 'is-active': l.id == languageId }"
                :to="{ name: 'page', params: { id: pageId, languageCode: l.code} }">
      {{ l.code }}
    </router-link>
  </div>
</template>

<script>
import Languages from '../languages'

export default {
  name: 'language-tabs',
  data() {
    return {
      languages: Languages
    }
  },
  computed: {
    languageId() {
      return this.$store.state.languageId;
    },
    pageId() {
      return this.$route.params.id;
    }
  }
  //props: ['languageId', 'pageId']
  // computed: {
  //   languageId: function () {
  //     return Languages[this.language.toLowerCase()].id
  //   }
  // }
}
</script>

<style>

</style>