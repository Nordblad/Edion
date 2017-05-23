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
    // lorem(noOfWords) {
    //   var result = [];
    //   var words = loremIpsum.split(' ');
    //   var rng = Math.random()
    //   for (var i = 0; i < noOfWords; i++) {
    //     var r = Math.floor(Math.random() * words.length) + 1;
    //     result.push(words[r]); 
    //   }
    //   console.log(noOfWords + ' words:');
    //   console.log(result.join(' '));
    // }
  },
  //props: [rowId],
  // inject: ['rowId'],
  mounted() {
    //console.log('ROWMIXIN IN THA HOUSE');
  }
}
var example = [{
  "rowId": 68,
  "type": "row-footer",
  "sortOrder": 3,
  "fields": {
    "image": {
      "0": "example-image.png"
    },
    "description": {
      "1": "Text på svenska",
      "2": "Text in english",
      "3": "日本語のテキスト"
    }
  }
}]
export default rowMixin