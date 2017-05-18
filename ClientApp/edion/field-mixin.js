const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur non magna id placerat. Duis non tempus arcu, at pretium nibh. Suspendisse auctor ipsum vitae urna rhoncus rhoncus. Nullam nec' +
  'diam mattis, eleifend mauris sed, venenatis erat. Maecenas posuere purus lorem, quis interdum justo posuere eget. Sed et cursus velit, dictum lacinia nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
  'Fusce vel accumsan urna. Proin nec dolor mi.Pellentesque ac nulla consequat, feugiat felis non, auctor urna.Donec a velit aliquet, fringilla ipsum id, iaculis est.Nunc et dolor accumsan orci mollis' +
  'fringilla in nec est. Maecenas sollicitudin maximus metus, tempor eleifend nibh imperdiet tempor. Nam ac mauris at turpis imperdiet placerat. In arcu dui, laoreet ut congue id, elementum in urna.Nunc sed semper' +
  'nisl, sed fermentum ipsum.Aenean a est nunc.In et est et leo pellentesque efficitur non vitae dolor.Vivamus commodo ultrices tincidunt.Duis at neque' +
  'id nibh molestie tincidunt.Nam varius, leo in sollicitudin rutrum, ex orci laoreet ligula, ut vehicula felis libero at mauris.Sed dapibus commodo nunc.Nulla sit amet mauris quis nibh euismod consectetur id vitae diam.' +
  'Praesent ut ipsum eu ligula consequat vulputate.Nam non fringilla massa.Vivamus ultricies non sem non laoreet.In mattis id mauris ac maximus.Ut rhoncus leo ut faucibus faucibus.Curabitur pharetra dictum eros vitae dictum.Vestibulum pharetra' +
  'euismod arcu ut imperdiet.Maecenas euismod vehicula blandit.Morbi imperdiet felis quam, eu ullamcorper lacus elementum quis.Nulla id urna rutrum leo aliquam euismod.' +
  'Integer sodales sapien et neque finibus molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi facilisis eros sit amet purus euismod, ac pretium erat luctus.Nulla' +
  'sollicitudin sed odio eu hendrerit.Nulla scelerisque mollis mi ut ultricies.Etiam finibus quis est ac eleifend.Cras neque est, bibendum eu viverra ac, ornare in sapien.Mauris gravida neque lacus, eget' +
  'dapibus metus interdum et.Cras posuere lorem sagittis, consequat ligula vel, fermentum nunc.Suspendisse suscipit mollis leo, sed interdum orci volutpat ut.Suspendisse accumsan ipsum at varius vestibulum' +
  'Suspendisse gravida id magna ut feugiat.Aliquam a dictum est, vel rhoncus ex.Curabitur sed nunc tempor arcu fermentum finibus vitae eu nibh.' +
  'Aenean et molestie odio, sit amet blandit est.Integer scelerisque mollis nunc a bibendum.Maecenas interdum eros metus, sed tincidunt lacus elementum sed.Duis condimentum ' +
  'nibh vitae eros sollicitudin tincidunt.Pellentesque quam dui, finibus sit amet tempus sed, placerat vel odio.Praesent in convallis risus.Donec vitae imperdiet arcu.' +
  'Phasellus et urna purus.Etiam pulvinar est quis sem fringilla imperdiet.Pellentesque et ante viverra, egestas tellus a, lacinia lectus.Vestibulum eget enim purus.Pellentesque' +
  'vitae metus at ex dignissim scelerisque.Praesent sit amet blandit purus.Etiam tempor sed quam nec maximus.Integer pharetra dui ullamcorper, interdum magna eget, ultricies enim.'

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
      const str = `lorem-100`;
      if (str.substring(0, 5) === 'lorem');
      var n = parseInt(str.split('-')[1]);

      var result = [];
      var words = loremIpsum.split(' ');
      for (var i = 0; i < n; i++) {
        var r = Math.floor(Math.random() * words.length) + 1;
        result.push(words[r]);
      }
      //console.log(noOfWords + ' words:');
      console.log(result.join(' '));
      return result.join(' ') + '.';
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