export class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
    this.unsub = false; //false je signal da je stranica 1. put ucitana
  }

  //SETERI

  set room(r) {
    this._room = r;
  }
  set username(u) {
    if (this.validate_user(u)) {
      this._username = u;
    } else {
      alert(
        "Username must be between 2 and 10 characters long and cannot be made of spaces only"
      );
    }
  }

  //GETERI

  get room() {
    return this._room;
  }
  get username() {
    return this._username;
  }

  //METODE

  //USER UPDATE
  update_user(u) {
    if (this.validate_user(u)) {
      this._username = u;
    } else {
      alert(
        "Username must be between 2 and 10 characters long and cannot be made of spaces only"
      );
    }
  }
//VALIDATOR ZA USLOV USERNAME-a
  validate_user(u){
    let u1 = u.trim();
    if (u1.length >= 2 && u1.length <= 10) {
      return true;
    } else {
      return false;
    }
  }

  //CHANGE ROOM
  change_room(r){
    this.room = r;
  }

  //UPDATE ROOM
  update_room(ur){
    this.room = ur;
    if(this.unsub != false){ //unsub vise nije false nego je u getchats postalo funkcija
      this.unsub();
    }
  }
  //DODAVANJE NOVE PORUKE
  async addChat(msg) {
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
  }

  //METOD KOJI PRATI PROMENE U BAZI I VRACA PORUKE
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          let type = change.type;
          let doc = change.doc;
          //ISPISATI DOKUMENTE KOJI SU DODATI U BAZU
          if (type == "added") {
            let obj = doc.data();
            if (obj.room === this.room) {
              callback(obj); //prosledjivanje dokumenta na ispis koji se realizuje realizovanjem callback f-je
            }
          }
        });
      });
  }
}
