<template>
    <div class="test-field-container notification is-info">
        <div class="content" :contentEditable="editMode">PLACEHOLDER</div>
        <div class="box is-paddingless test-toolbar" v-if="editMode">
            <div class="field has-addons">
                <p class="control">
                    <button class="button is-danger">
                        <span class="icon">
                            <i class="fa fa-times"></i>
                        </span>
                    </button>
                </p>
                <p class="control">
                    <button class="button is-danger">
                        <span class="icon">
                            <i class="fa fa-language"></i>
                        </span>
                        <span>{{ currentLanguage }}</span>
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'test-field',
  props: ['parent', 'fieldName'],
  data () {
    return {
      msg: 'Welcome to test-field'
    }
  },
  computed: {
      editMode() {
          return this.$store.state.canEdit;
      },
      values() {
          return this.$store.state.fields[this.parent];
      },
      currentLanguage() {
          return this.$store.state.languageId;
      }
  }
}
</script>

<style>
.test-field-container {
    position: relative;
}

.test-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
}
</style>