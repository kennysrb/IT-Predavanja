console.log(db);

//pristupanje kolekciji
let customers = db.collection("customers");
console.log(customers);

//pristupanje dokumentu
let doc1 = customers.doc("jblecic");
console.log(doc1);

let doc2 = db.collection("tasks").doc("trening");
console.log(doc2);

/* 
Za pristup dokumentu:
let doc = db.collection('...').doc('...')
Kod dokumenata imamo sledece operacije:
    C   reate
    R   ead
    U   pdate
    D   elete

    Create: doc.set(...)
    Read  : doc.get(...)
    Update: doc.update(...)
    Delete: doc.delete(...)
Sve ove 4 operacije kao rezultat vracaju Promise
Sto znaci da nakon njih lancamo .then() i .catch() na kraju
 */

let obj = {
  Name: "Vladan",
  Age: 26,
  Addresses: ["Nis", "Leskovac"],
  Salary: 470.0,
};

db.collection("customers")
  .doc("vstojic")
  .set(obj)
  .then(() => {
    console.log('Dodat novi dokument u kolekciju "customers"');
    return db
      .collection("customers")
      .doc("vstojic")
      .set({ height: 180 }, { merge: true });
  })
  .then(() => {
    console.log('Spojen dokument vstojic u kolekciju "customers"');
  })
  .catch((error) => {
    console.log("Greska prilikom dodavanja novog dokumenta:" + error);
  });

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
  title: "Fudbal",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: false,
  description: "Fudbal sa drugarima iz ITBootcamp-a",
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

//update
db.collection("tasks")
  .doc("task-02")
  .update({ priority: true })
  .then(() => {
    console.log("Uspesno promenjeno polje u dokumentu");
  })
  .catch((err) => {
    console.log(`Greska prilikom menjanja dokumenta ${err}`);
  });

//DELETE
db.collection("customers")
  .doc("mpantovic")
  .delete()
  .then(() => {
    console.log(`Uspesno obrisan korisnik mpantovic`);
  })
  .catch((err) => {
    console.log(`Greska prilikom brisanja dokumenta ${err}`);
  });
console.log("Test poruka");
