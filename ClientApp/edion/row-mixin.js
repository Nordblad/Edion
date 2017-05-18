import EdRowBase from 'components/rows/ed-row-base'

const rowMixin = {
  props: ['rowId'],
  components: { EdRowBase },
  data() {
    return {
      //rowId: 0
    }
  },
  methods: {
    lorem(noOfWords) {
      var result = [];
      var words = loremIpsum.split(' ');
      var rng = Math.random()
      for (var i = 0; i < noOfWords; i++) {
        var r = Math.floor(Math.random() * words.length) + 1;
        result.push(words[r]); 
      }
      console.log(noOfWords + ' words:');
      console.log(result.join(' '));
    }
  },
  //props: [rowId],
  // inject: ['rowId'],
  mounted() {
    //console.log('ROWMIXIN IN THA HOUSE');
  }
}

export default rowMixin