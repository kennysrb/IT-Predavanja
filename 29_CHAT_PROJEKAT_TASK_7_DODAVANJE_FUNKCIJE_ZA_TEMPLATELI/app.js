import { Chatroom } from "./chat.js";
import { chatUI } from "./ui.js";

let chatroom2 = new Chatroom("general", "Anonymus");
let ul = document.querySelector(".msg-display");
let c = new chatUI(ul);

chatroom2.getChats((d) => {
  c.templateLI(d);
});

//ADDCHAT DODAJE NA STRANICU

let send_btn = document.querySelector("#btn_message");
send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let msg_input = document.querySelector("#message");
  let new_msg = document.querySelector("#message").value;
  chatroom2
    .addChat(new_msg)
    .then(() => {
      console.log("Poruka uspesno dodata.");
      msg_input.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE DUGME
let notification = document.querySelector('#username');
let upd_btn = document.querySelector("#btn_username");
upd_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let user_input = document.querySelector("#update_input");
  let new_user = document.querySelector("#update_input").value;
  chatroom2.update_user(new_user);
  if(new_user.trim().length >= 2 && new_user.trim().length <=10){
    let p = document.createElement('p');
    p.innerHTML = new_user.trim();
    p.style.color = "#53b87b";
    notification.appendChild(p);
    notification.classList.toggle('show');
    setTimeout(() => {
      notification.classList.toggle('show');
      p.remove();
    }, 3000); 
  }
  user_input.value = "";
});

//DROPDOWN MENU

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






//CHANGE ROOM

// let general_btn = document.querySelector("#btn_general");
// general_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   chatroom2.change_room("general");
//   let li = document.querySelectorAll('li');
//   li.forEach(li=>{
//     li.remove();
//   })
//   chatroom2.getChats((d) => {
//     c.templateLI(d);
//   });
//   chatrooms.classList.toggle("active");
// });

// let js_btn = document.querySelector("#btn_js");
// js_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   chatroom2.change_room("js");
//   let li = document.querySelectorAll('li');
//   li.forEach(li=>{
//     li.remove();
//   })
//   chatroom2.getChats((d) => {
//     c.templateLI(d);
//   });
//   chatrooms.classList.toggle("active");
// });

// let homeworks_btn = document.querySelector("#btn_homeworks");
// homeworks_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   chatroom2.change_room("homeworks");
//   let li = document.querySelectorAll('li');
//   li.forEach(li=>{
//     li.remove();
//   })
//   chatroom2.getChats((d) => {
//     c.templateLI(d);
//   });
//   chatrooms.classList.toggle("active");
// });

// let test_btn = document.querySelector("#btn_test");
// test_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   chatroom2.change_room("tests");
//   let li = document.querySelectorAll('li');
//   li.forEach(li=>{
//     li.remove();
//   })
//   chatroom2.getChats((d) => {
//     c.templateLI(d);
//   });
//   chatrooms.classList.toggle("active");
// });


