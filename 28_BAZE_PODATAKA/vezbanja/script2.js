// 1. pristup konkretnom dokumentu u kolekciji
// 2. Pristup svim ili odredjenim dokumentima iz kolekcije

//1.
db.collection("customers")
  .doc("nglavonjic")
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log(`Postoji dokument ${doc.id}`);
      let obj = doc.data();
      console.log(obj);
    } else {
      console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
    }

    // Polja: doc.id -- neki string, doc.exist -- boolean
    // Metoda: doc.data()  -- konvertuje dokument u JS objekat
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokument ${err}`);
  });

//2.

// db.collection("customers")
//   .get()
//   .then((snapshot) => {
//     //slika trenutnog stanja u kolekciji
//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       console.log(allDocs);
//       allDocs.forEach((d) => {
//         console.log(d.id, d.data());
//       });
//     } else {
//       console.log(`Nema dokumenata u kolekciji.`);
//     }
//   })
//   .catch((err) => {
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
//   });

//1. Dohvatanje dokumenata u odredjenom redosledu
//2. DOhvatanje odredjenog broja dokumenata
//3. DOhvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)

//1. sortiranje po imenu

db.collection("customers")
  .orderBy("Age", "desc") //drugi parametar "desc" je za red od najveceg ka najmanjem
  .orderBy("Name")
  .get()
  .then((snapshot) => {
    //slika trenutnog stanja u kolekciji
    console.log(snapshot);

    if (!snapshot.empty) {
      let allDocs = snapshot.docs;
      allDocs.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema dokumenata u kolekciji.`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//2. DOhvatanje odredjenog broja dokumenata

// db.collection("customers")
//     .orderBy("Name")
//     .orderBy("Age", "desc")
//     .orderBy("Salary", "desc")
//     .limit(1)
//   .get()
//   .then((snapshot) => {
//     //slika trenutnog stanja u kolekciji
//     console.log(snapshot);

//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       allDocs.forEach((d) => {
//         let obj = d.data();
//         console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
//       });
//     } else {
//       console.log(`Nema dokumenata u kolekciji.`);
//     }
//   })
//   .catch((err) => {
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
//   });

//3. DOhvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)
db.collection("customers")
  .where("Age", "<=", 27) // polje za poredjenje sa kriterijumom
  .where("Salary", "==", 1270)
  .orderBy("Age", "desc")
  .orderBy("Name")
  //   .orderBy("Salary", "desc")
  .limit(1)
  .get()
  .then((snapshot) => {
    //slika trenutnog stanja u kolekciji
    if (!snapshot.empty) {
      let allDocs = snapshot.docs;
      allDocs.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema dokumenata u kolekciji.`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

////////////////

// Imaju adresu u Nišu,
db.collection("customers")
  .where("Addresses", "array-contains", "Nis") // polje za poredjenje sa kriterijumom
  //   .where("Salary", "==", 1270)
  //   .orderBy("Age", "desc")
  //   .orderBy("Name")
  //   .orderBy("Salary", "desc")
  .limit(1)
  .get()
  .then((snapshot) => {
    //slika trenutnog stanja u kolekciji
    if (!snapshot.empty) {
      let allDocs = snapshot.docs;
      allDocs.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema dokumenata u kolekciji.`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju platu veću ili jednaku od 500,

db.collection("customers")
  .where("Salary", ">=", 1370)
  .get()
  .then((snapshot) => {
    console.log(snapshot);
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju platu između 300 i 1300,
db.collection("customers")
  .where("Salary", ">=", 300)
  .where("Salary", "<=", 1300)
  .get()
  .then((snapshot) => {
    console.log(snapshot);
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju platu manju od 900, i imaju 30 godina,
db.collection("customers")
  .where("Salary", "<", 1350)
  .where("Age", "==", 27)
  .get()
  .then((snapshot) => {
    console.log(snapshot);
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju adresu u Nišu ili Beogradu,
db.collection("customers")
  .where("Addresses", "array-contains-any", ["Beograd", "Nis", "Novi Sad"])
  .get()
  .then((snapshot) => {
    console.log(snapshot);
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju 22, 25 ili 28 godina.
db.collection("customers")
  .where("Age", "in", [22, 25, 28])
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); //1. januar tekuce godine
let date2 = new Date(year + 1, 0, 1); // 1. januar naredne godine

let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);
let date3Timestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection("tasks")
  // Su prioritetni,
  //   .where("Priority", "==", true)

  // Treba da se izvrše u tekućoj godini,
  //   .where("Due Date", ">=", date1Timestamp)
  //   .where("Due Date", "<", date2Timestamp)

  // Su završeni,
  //   .where("Due Date", "<=", date3Timestamp)

  // Tek treba da počnu.
  .where("Start Date", ">", date3Timestamp)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.Title}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });
