import { Chatroom } from "./chat.js";
import { chatUI } from "./ui.js";

let chatroom1 = new Chatroom("js", "kenny2");
//getter test
console.log(chatroom1.username, chatroom1.room); //test getera
chatroom1.username = "Dusan"; //setter test
chatroom1.room = "general";
console.log(chatroom1.room, chatroom1.username);

let chatroom2 = new Chatroom("general", "Milena");

//DODAVANJE PORUKE

chatroom2
  .addChat("Trening pisanja CV-a")
  .then(() => console.log(`Uspesno dodat chat`))
  .catch((err) => console.log(err));

let ul = document.querySelector(".msg-display");
let c = new chatUI(ul);

chatroom2.getChats((d) => {
  c.templateLI(d);
});

let dropdown_btn = document.querySelector("#dropdown_btn");
let chatrooms = document.querySelector(".chatrooms");
let chevron_up = document.querySelector("#up");
let chevron_down = document.querySelector("#down");
dropdown_btn.addEventListener("click", (e) => {
  e.preventDefault();
  chatrooms.classList.toggle("active");
  chevron_down.classList.toggle("hide");
  chevron_up.classList.toggle("show");
  dropdown_btn.classList.toggle("border");
});
