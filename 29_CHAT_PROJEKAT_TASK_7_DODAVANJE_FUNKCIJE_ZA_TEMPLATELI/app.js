import { Chatroom } from "./chat.js";
import { chatUI } from "./ui.js";

//DOM
let ul = document.querySelector(".msg-display");
let notification = document.querySelector("#username");
let upd_btn = document.querySelector("#btn_username");
let dropdown_btn = document.querySelector("#dropdown_btn");
let chatrooms = document.querySelector(".chatrooms");
let chevron_up = document.querySelector("#up");
let chevron_down = document.querySelector("#down");
let nav = document.querySelector('nav');
let li = document.querySelectorAll('li');



//PROVERA USERNAME-A U LOCALU
let username = "Anonymus";
if(localStorage.username){
  username = localStorage.username;
}

//OBJECTS
let chatroom = new Chatroom("btn_general", username);
let c = new chatUI(ul);


//ISPIS IZ DB NA STRANICI
chatroom.getChats((d) => {
  c.templateLI(d);
});

// if(chatroom.username == username){
//   li.forEach(li=>{
//     li.classList.toggle('sent')
//   })
// }

//ADDCHAT DODAJE NA STRANICU

let send_btn = document.querySelector("#btn_message");
send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let msg_input = document.querySelector("#message");
  let new_msg = document.querySelector("#message").value;
  chatroom
    .addChat(new_msg)
    .then(() => {
      console.log("Poruka uspesno dodata.");
      msg_input.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE USER DUGME

upd_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let user_input = document.querySelector("#update_input");
  let new_user = document.querySelector("#update_input").value;
  chatroom.update_user(new_user);
  if (chatroom.validate_user(new_user)) {
    localStorage.setItem("username", new_user);
    let p = document.createElement("p");
    p.innerHTML = new_user.trim();
    p.style.color = "#53b87b";
    notification.appendChild(p);
    notification.classList.toggle("show");
    setTimeout(() => {
      notification.classList.toggle("show");
      p.remove();
    }, 3000);
  }
  user_input.value = "";
});

//DROPDOWN MENU

dropdown_btn.addEventListener("click", (e) => {
  e.preventDefault();
  chatrooms.classList.toggle("active");
  chevron_down.classList.toggle("hide");
  chevron_up.classList.toggle("show");
  dropdown_btn.classList.toggle("border");
});

//CHANGE ROOM

nav.addEventListener('click',(e)=>{
  if(e.target.tagName == 'BUTTON'){
    c.delete(); //brise poruke sa erkana
    chatroom.update_room(e.target.id); //poziva promenu sobe
    chatroom.getChats(d=>{ //prikazuje cetove
      c.templateLI(d);
    })
  chatrooms.classList.toggle("active");
  chevron_down.classList.toggle("hide");
  chevron_up.classList.toggle("show");
  }
})