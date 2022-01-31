let ul = document.querySelector("ul");
let form = document.querySelector("form");

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
  title: "Fudbal",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: false,
  description: "Fudbal sa drugarima iz ITBootcamp-a",
};

let obj3 = {
  title: "Setnja",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: true,
  description: "Setnja sa psom",
};

let obj4 = {
  title: "Basket",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: false,
  description: "Basket sa ortacima iz kraja",
};

let obj5 = {
  title: "Hokej",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: true,
  description: "Hokej  sa trenerima",
};

let obj6 = {
  title: "Gym",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: true,
  description: "Gym trening grudi biceps",
};

db.collection("tasks")
  .doc("task-02")
  .set(obj2)
  .then(() => {
    console.log(`Uspesno dodat task!`);
  })
  .catch((msg) => {
    console.log(`Neuspesno dodat task: ${msg}`);
  });

db.collection("tasks")
  .doc("task-03")
  .set(obj3)
  .then(() => {
    console.log(`Uspesno dodat task!`);
  })
  .catch((msg) => {
    console.log(`Neuspesno dodat task: ${msg}`);
  });

db.collection("tasks")
  .doc("task-04")
  .set(obj4)
  .then(() => {
    console.log(`Uspesno dodat task!`);
  })
  .catch((msg) => {
    console.log(`Neuspesno dodat task: ${msg}`);
  });

db.collection("tasks")
  .doc("task-05")
  .set(obj5)
  .then(() => {
    console.log(`Uspesno dodat task!`);
  })
  .catch((msg) => {
    console.log(`Neuspesno dodat task: ${msg}`);
  });

db.collection("tasks")
  .doc("task-06")
  .set(obj6)
  .then(() => {
    console.log(`Uspesno dodat task!`);
  })
  .catch((msg) => {
    console.log(`Neuspesno dodat task: ${msg}`);
  });

// db.collection("tasks")
//   .orderBy("start_date", "desc")
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       snapshot.docs.forEach((doc) => {
//         let obj = doc.data();
//         let li = document.createElement("li");
//         li.innerHTML = `[${obj.title}] ${obj.start_date.toDate()} (${
//           obj.description
//         }) `;
//         if (obj.priority === true) {
//           li.style.color = "red";
//         }
//         ul.appendChild(li);
//       });
//     } else {
//       console.log("");
//     }
//   })
//   .catch((err) => {
//     console.log(`Doslo je do greske ${err}`);
//   });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = this.title.value;
  let start_date = this.start_date.value;
  let due_date = this.due_date.value;
  let priority = this.priority.checked;
  let description = this.description.value;
  //   console.log(title, start_date, due_date, priority, description);

  let start_date_obj = new Date(start_date);
  let due_date_obj = new Date(due_date);
  let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
  let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

  let obj = {
    title: title,
    start_date: start_date_ts,
    due_date: due_date_ts,
    priority: priority,
    description: description,
  };
  db.collection("tasks")
    .add(obj)
    .then(() => {
      console.log(`Uspesno dodat novi zadatak`);
    })
    .catch((err) => {
      console.log(`Task nije dodat ${err}`);
    });
});

db.collection("tasks").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    let type = change.type;
    let doc = change.doc;
    let id = doc.id;
    if (type == "added") {
      let obj = doc.data();
      let li = document.createElement("li");
      li.id = id;
      li.innerHTML = `[${obj.title}] ${obj.start_date.toDate()} (${
        obj.description
      }) `;
      ul.appendChild(li);
      if (obj.priority === true) {
        li.style.color = "red";
      }
      let btn = document.createElement("button");
      btn.innerHTML = "X";
      li.appendChild(btn);
    } else if (type == "removed") {
      let li = document.getElementById(id);
      li.remove();
    }
  });
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let ok = confirm(`Da li zelite da obrisete task?`);
    if (ok == true) {
      let li = e.target.parentElement;
      let id = li.id;
      db.collection("tasks")
        .doc(id)
        .delete()
        .then(() => {
          alert(`Uspesno izbrisan task.`);
        })
        .catch((err) => {
          console.log(`Doslo je do greske prilikom ${err}`);
        });
    }
  }
});
