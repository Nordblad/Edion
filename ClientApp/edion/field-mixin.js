const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur non magna id placerat. Duis non tempus arcu, at pretium nibh. Suspendisse auctor ipsum vitae urna rhoncus rhoncus. Nullam nec' +
  'diam mattis, eleifend mauris sed, venenatis erat. Maecenas posuere purus lorem, quis interdum justo posuere eget. Sed et cursus velit, dictum lacinia nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
  'Fusce vel accumsan urna. Proin nec dolor mi.Pellentesque ac nulla consequat, feugiat felis non, auctor urna.Donec a velit aliquet, fringilla ipsum id, iaculis est.Nunc et dolor accumsan orci mollis' +
  'fringilla in nec est. Maecenas sollicitudin maximus metus, tempor eleifend nibh imperdiet tempor. Nam ac mauris at turpis imperdiet placerat. In arcu dui, laoreet ut congue id, elementum in urna.Nunc sed semper' +
  'nisl, sed fermentum ipsum.Aenean a est nunc.In et est et leo pellentesque efficitur non vitae dolor.Vivamus commodo ultrices tincidunt.Duis at neque' +
  'id nibh molestie tincidunt.Nam varius, leo in sollicitudin rutrum, ex orci laoreet ligula, ut vehicula felis libero at mauris.Sed dapibus commodo nunc.Nulla sit amet mauris quis nibh euismod consectetur id vitae diam.' +
  'Praesent ut ipsum eu ligula consequat vulputate.Nam non fringilla massa.Vivamus ultricies non sem non laoreet.In mattis id mauris ac maximus.Ut rhoncus leo ut faucibus faucibus.Curabitur pharetra dictum eros vitae dictum.Vestibulum pharetra'

const fieldMixin = {
  props: {
    rowId: Number,
    fieldName: String,
    defaultValue: { required: true }
  },
  methods: {
    editField(field) {
      this.$store.commit('EDIT_FIELD', field);
    },
    lorem(noOfWords) {
      var result = ['Lorem'];
      var words = loremIpsum.split(' ');
      for (var i = 1; i < noOfWords; i++) {
        var r = Math.floor(Math.random() * words.length) + 1;

        var rollForExtraTags = Math.floor(Math.random() * 100);
        if (rollForExtraTags <= 3) // 3% change to be a link
          result.push('<a>' + words[r] + '</a>');
        else if (rollForExtraTags <= 6) // 3% to be bold
          result.push('<strong>' + words[i] + '</strong>')
        //else if (noOfWords > 20)
        else
          result.push(words[r]);
        if (i % 50 == 0) {
          result.push('<br>')
        }
      }
      console.log(result.join(' '));
      return result.join(' ') + '.';
    },
    getGeneratedDefaultValue(defVal) {
      if (defVal.type === 'lorem') {
        return this.lorem(defVal.words || 1);
      } else if (defVal.type === 'image') {
        var i = Math.floor(Math.random() * 10) + 1;
        return 'example' + i + '.jpg';
      }
    }
  },
  mounted() {
    //this.lorem();
    // const regex = /^lorem\((\d*)\)$/g;
    // ///^lorem\((\d*)\)$/g
    // var re = new RegExp(/^lorem\((\d*)\)$/g);
    // console.log('A', re.match(str));

    // let m;

    // m = regex.exec(str);
    // console.log('Å Å Å ', m)


  },
  computed: {
    stateFields() {
      var f = this.$store.state.rows[this.rowId].fields[this.fieldName];
      if (f) return f;
      var languages = this.translate ? [1, 2, 3] : [0];
      var defVal = (typeof this.defaultValue === 'object' ? this.getGeneratedDefaultValue(this.defaultValue) : this.defaultValue);

      for (var i = 0; i < languages.length; i++) {
        this.editField({
          rowId: this.rowId,
          name: this.fieldName,
          languageId: languages[i],
          value: defVal
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