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

  //METODE

  //generating and adding new message
  async addChat(msg) {
    //dohvatanje trenutnog vremena koji nam je potreban za timestamp (created_at polje u dokumentu)
    let date = new Date();

    //kreiranje novog dokumenta/objekta koji prosledjujem bazi podataka
    let docChat = {
      message: msg,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date), //konvertovanje u firestore timestamp
    };

    //Da sacuvam dokument u db firestore
    let response = await this.chats.add(docChat);
    return response; //vraca promise i mogu za njega da kazem .then i .catch

    //dodavanje dokumenta u kolekciju na firestore
    this.chats.add(docChat);
  }
}

let chatroom1 = new Chatroom("js", "kenny2");
//getter test
console.log(chatroom1.username, chatroom1.room); //test getera
chatroom1.username = "Dusan"; //setter test
chatroom1.room = "general";
console.log(chatroom1.room, chatroom1.username);

let chatroom2 = new Chatroom("general", "Milena");

chatroom2
  .addChat("Trening pisanja CV-a")
  .then(() => console.log(`Uspesno dodat chat`))
  .catch((err) => console.log(err));
