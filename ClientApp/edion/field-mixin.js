const fieldMixin = {
  props: {
    rowId: Number,
    fieldName: String,
    defaultValue: String
  },
  methods: {
    editField(field) {
      this.$store.commit('EDIT_FIELD', field);
    }
  },
  inject: ['rowId2', 'something'],
  mounted() { console.log('INJECTED 2:', this.rowId2, this.bajs) },
  computed: {
    stateFields() {
      var f = this.$store.state.rows[this.rowId].fields[this.fieldName];
      if (f) return f;
      var languages = this.translate ? [1, 2, 3] : [0];
      for (var i = 0; i < languages.length; i++) {
        this.editField({
          rowId: this.rowId,
          name: this.fieldName,
          languageId: languages[i],
          value: this.defaultValue
        });
      }
      console.log('INITIALIZED FIELD', this.fieldName, this.rowId);
      return this.$store.state.rows[this.rowId].fields[this.fieldName];;
    },
    languageId() {
      return this.$store.state.languageId;
    }
  }
}
export default fieldMixin;