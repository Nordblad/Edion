import axios from 'axios'

const api = {
  get(url, cb) {
    axios
      .get(url)
      .then(response => {
        cb(response.data);
      })
      .catch((error) => {
        console.log(error);
        //this.$router.push({ name: 'home' });
      });
  },
  post(url, data, cb) {
    console.log('POST issued: ', url, data)
    axios
      .post(url, data)
      .then(response => {
        cb(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // getRows(pageId) {
  //   console.log('getRows api call runninng');
  //   axios
  //     .get('/api/Row?id=' + pageId)
  //     .then(response => {
  //       console.log('RECIEVED ROW LIST ........!', response.data);
  //       //this.rows = response.data;
  //       return response.data;
  //       // this.rows = [
  //       //   {
  //       //     type: 'row-simple'
  //       //   }
  //       // ]
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //this.$router.push({ name: 'home' });
  //     });
  // }
}

export default api