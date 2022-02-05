import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//DOM
let ul = document.querySelector(".msg-display");
let notification = document.querySelector("#username");
let upd_btn = document.querySelector("#btn_username");
let dropdown_btn = document.querySelector("#dropdown_btn");
let chatrooms = document.querySelector(".chatrooms");
let chevron_up = document.querySelector("#up");
let chevron_down = document.querySelector("#down");
let nav = document.querySelector('nav');
//dodato za zadatke
let color_btn = document.querySelector('#btn_color');
let btn_date = document.getElementById('btn_date');


//PROVERA USERNAME-A U LOCALU
let username = "Anonymus";
if(localStorage.username){
  username = localStorage.username;
}

//OBJECTS
let chat = new Chatroom("btn_general", username);
let c = new ChatUI(ul);


//ISPIS IZ DB NA STRANICI
chat.getChats((d) => {
  c.templateLI(d);
});


// if(chat.username == username){
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
  chat
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
  chat.update_user(new_user);
  if (chat.validate_user(new_user)) {
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
    chat.update_room(e.target.id); //poziva promenu sobe
    chat.getChats(d=>{ //prikazuje cetove
      c.templateLI(d);
    })
  chatrooms.classList.toggle("active");
  chevron_down.classList.toggle("hide");
  chevron_up.classList.toggle("show");
  }
})


//brisanje poruke
ul.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.tagName === "I"){
    if(localStorage.username === e.target.parentNode.firstChild.innerHTML){
      confirm('Are you sure?')
      chat.delete_msg(e.target.parentElement.id);
      e.target.parentElement.remove();
    }else{
      e.target.parentElement.remove();
    }
  }
})

// JS ZA ZADATKE

//menjanje boje
color_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  let color = document.querySelector('#update_color');
  let new_color = document.querySelector('#update_color').value;
  if(new_color != ""){
    localStorage.setItem("last_color", new_color);
    setTimeout(() => {
      document.body.style.backgroundColor =new_color;
    }, 500);
  }else{
    localStorage.setItem("last_color", "#FFFFFF");
    setTimeout(() => {
      document.body.style.backgroundColor ="#FFFFFF";
    }, 500);
  }
});
document.body.style.backgroundColor = localStorage.last_color;


//date

btn_date.addEventListener('click',(e)=>{
  e.preventDefault();
  let start_date = document.querySelector('#start_date');
  let start_date_value = document.querySelector('#start_date').value;
  let due_date = document.querySelector('#due_date');
  let due_date_value = document.querySelector('#due_date').value;
  
})

