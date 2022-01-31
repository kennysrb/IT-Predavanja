class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
  }

  //SETERI

  set room(r) {
    this._room = r;
  }
  set username(u) {
    this._username = u;
  }
  //GETERI
  get room() {
    return this._room;
  }
  get username() {
    return this._username;
  }
}

let chatroom1 = new Chatroom("js", "kenny2");
//getter test
console.log(chatroom1.username, chatroom1.room); //test getara
chatroom1.username = "Dusan";
//setter test
console.log(chatroom1.username);
chatroom1.room = "general";
console.log(chatroom1.room);


