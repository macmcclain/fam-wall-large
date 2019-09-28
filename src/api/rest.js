import axios from 'axios';

export default class FamRest {
  constructor(host){
    this.host = host;
  }

  send(method, endpoint, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: this.host + '/' + endpoint
      })
        .then(function (response) {
          resolve(response)
        }).catch((err) => {
          reject(err);
      });
    });

  }
}
