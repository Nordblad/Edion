<template>
  <test-row-base>
      <div class="columns">
          <div class="column is-1"><div class="notification is-danger">{{ rowId }}</div></div>
          <div class="column">
              Fält: {{ settings.color }}
          </div>
          <div class="column">
              <test-field :parent="rowId" fieldName="note"/>
          </div>
      </div>
  </test-row-base>
</template>

<script>
import TestRowBase from 'components/test-row-base'
import TestField from 'components/test-field'

export default {
  name: 'section',
  props: ['rowId', 'settings'],
  components: {
      TestRowBase,
      TestField
  },
//   provide: {
//       'rowId': this.rowId
//   },
  data () {
    return {
      msg: 'Welcome to section'
    }
  }
}
</script>

<style>
</style>