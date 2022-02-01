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
    this.chats.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        //ISPISATI DOKUMENTE KOJI SU DODATI U BAZU
        if (change.type == "added") {
          callback(change.doc.data()); //prosledjivanje dokumenta na ispis koji se realizuje realizovanjem callback f-je
        }
      });
    });
  }
}

let chatroom1 = new Chatroom("js", "kenny2");
//getter test
console.log(chatroom1.username, chatroom1.room); //test getera
chatroom1.username = "Dusan"; //setter test
chatroom1.room = "general";
console.log(chatroom1.room, chatroom1.username);

let chatroom2 = new Chatroom("general", "Milena");

//DODAVANJE PORUKE

// chatroom2
//   .addChat("Trening pisanja CV-a")
//   .then(() => console.log(`Uspesno dodat chat`))
//   .catch((err) => console.log(err));

chatroom2.getChats((d) => {
  console.log(d.message);
});


let dropdown_btn = document.querySelector("#dropdown_btn");
let chatrooms = document.querySelector(".chatrooms");
let chevron_up = document.querySelector('#up');
let chevron_down = document.querySelector('#down');
dropdown_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  chatrooms.classList.toggle('active');
  chevron_down.classList.toggle('hide');
  chevron_up.classList.toggle('show');
  dropdown_btn.classList.toggle('border');
})