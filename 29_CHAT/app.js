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
let nav = document.querySelector("nav");
let color_btn = document.querySelector("#btn_color");
let btn_date = document.getElementById("btn_date");
let btn_show_date = document.getElementById("btn_show_filter");
let date_filter = document.querySelector(".date_picker");
let chat_box = document.querySelector(".chat");
let btn_select_user = document.querySelector("#btn_select_username");
let sobe = document.querySelectorAll(".room");
let send_btn = document.querySelector("#btn_message");
let green = document.getElementById('green');








//USERNAME CHECK LOCAL STORAGE
let username = "Anonymus";
if (localStorage.username) {
  username = localStorage.username;
}

//OBJECTS
let chat = new Chatroom("btn_general", username);
let c = new ChatUI(ul);

//DATABASE DISPLAY ON SCREEN
chat.getChats((d) => {
  c.templateLI(d);
});
let stb = (a) => {
  a.scrollTop = a.scrollHeight;
};
// TIMEOUT FOR LAST MESSAGE
setTimeout(()=>{
  stb(ul);
},500);

//SEND MESSAGE
send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let msg_input = document.querySelector("#message");
  let new_msg = document.querySelector("#message").value;
  chat
    .addChat(new_msg)
    .then(() => {
      console.log("Poruka uspesno dodata.");
      stb(ul);
      msg_input.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
});

// SELECT USER
btn_select_user.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("test");
  let user_input = document.querySelector(".select_user");
  let new_user = document.querySelector("#first_user").value;
  let sent = document.querySelectorAll("li");
  sent.forEach((s) => {
    s.classList.remove("sent");
    if (new_user === s.firstChild.innerHTML) {
      s.classList.add("sent");
    }
  });
  chat.update_user(new_user);
  if (chat.validate_user(new_user)) {
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
  document.querySelector(".select_user").style.display = "none";
  document.querySelector(".backdrop").style = "z-index: -10000";
});

// UPDATE USER
upd_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let user_input = document.querySelector("#update_input");
  let new_user = document.querySelector("#update_input").value;
  let sent = document.querySelectorAll("li");
  sent.forEach((s) => {
    s.classList.remove("sent");
    if (new_user === s.firstChild.innerHTML) {
      s.classList.add("sent");
    }
  });
  chat.update_user(new_user);
  if (chat.validate_user(new_user)) {
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
nav.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    sobe.forEach((r) => {
      r.classList.remove("active");
    });
    c.delete(); //brise poruke sa erkana
    chat.update_room(e.target.id); //poziva promenu sobe
    localStorage.setItem("room", e.target.id);
    chat.getChats((d) => {
      //prikazuje cetove
      c.templateLI(d);
    });
    chatrooms.classList.toggle("active");
    chevron_down.classList.toggle("hide");
    chevron_up.classList.toggle("show");
    setTimeout(()=>{
      stb(ul);
    },500);
    sobe.forEach((r) => {
      console.log(r.id);
      if (localStorage.room == r.id) {
        r.classList.toggle("active");
      }
    });
  }
  ul.lastElementChild.scrollIntoView();
});

//DELETE MESSAGE
ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "I") {
    if (localStorage.username === e.target.parentNode.firstChild.innerHTML) {
      if (confirm("Are you sure?")) {
        chat.delete_msg(e.target.parentElement.id);
        e.target.parentElement.remove();
      } else {
        console.log("Nije obrisana");
      }
    } else {
      e.target.parentElement.remove();
    }
  }
});

//CHANGE COLOR
color_btn.addEventListener("change", (e) => {
  e.preventDefault();
  let new_color = color_btn.value;
  if (new_color != "") {
    localStorage.setItem("last_color", new_color);
    setTimeout(() => {
      green.style.color = new_color;
      sobe.forEach(s=>{
        s.style.color = new_color;
      });
      chat_box.style = `box-shadow: 5px 5px 40px ${new_color}`;
    }, 500);
  } else {
    localStorage.setItem("last_color", "#FFFFFF");
    setTimeout(() => {
      green.style.color = "#FFFFFF";
      sobe.forEach(s=>{
        s.style.color = `#FFFFFF`;
      });
      chat_box.style = `box-shadow: 5px 5px 40px #FFFFFF`;
    }, 500);
  }
});


sobe.forEach(s=>{
  s.style.color = localStorage.last_color;
});
chat_box.style = `box-shadow: 5px 5px 40px ${localStorage.last_color}`;
green.style.color = localStorage.last_color;


let green_li = ul.getElementsByTagName("li");
// let green_li = document.querySelectorAll('li');

console.log(green_li);
let niz = Array.from(green_li);
console.log(niz);


for(let i =0; i< green_li.length; i++){
  green_li[i].style.backgroundColor = localStorage.last_color;
  console.log(green_li[i]);
}

niz.forEach(n=>{
  console.log(n);
})

window.onload = function(){
  console.log(document.querySelectorAll('li'));
}


console.log(document.querySelectorAll('.sent'));



//DATE
// btn_date.addEventListener("click", (e) => {
//   e.preventDefault();
//   c.delete();
//   let date = new Date(Date.parse(document.querySelector("#start_date").value));
//   let date2 = new Date(Date.parse(document.querySelector("#end_date").value));
//   chat.filterChats(
//     (d) => {
//       c.templateLI(d);
//     },
//     date,
//     date2
//   );
// });

// btn_show_date.addEventListener("click", (e) => {
//   e.preventDefault();
//   date_filter.classList.toggle("show");
// });