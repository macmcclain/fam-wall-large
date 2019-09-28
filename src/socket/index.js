import io from 'socket.io-client';

export default class FamSocket {
  constructor(client){
    this.socket = io(client)
  }

  send(type, message) {
    this.socket.emit(type, message);
  }

  on(key, callback) {
    this.socket.on(key, function incoming(message) {
      callback(message);
      console.log('received: %s', message);
    });
  }
}

