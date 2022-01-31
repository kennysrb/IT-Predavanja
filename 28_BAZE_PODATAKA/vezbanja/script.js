// Napisati skript koji:

let movies = db.collection("movies");
console.log(movies);

// // Dodaje nekoliko filmova u bazu,

// let mov1 = {
//   name: "Green Mile",
//   director: {
//     name: "Frank",
//     last_name: "Darabont",
//   },
//   release_year: 1999,
//   genres: ["Scifi", "Drama"],
//   rating: 8.6,
// };

// let mov2 = {
//   name: "When I grow up I'll become a kangaroo",
//   director: {
//     name: "Radivoje",
//     last_name: "Andric",
//   },
//   release_year: 2004,
//   genres: ["Comedy"],
//   rating: 8.4,
// };

// let mov3 = {
//   name: "Green street hooligans",
//   director: {
//     name: "Lexi",
//     last_name: "Alexander",
//   },
//   release_year: 2005,
//   genres: ["Drama", "Crime", "Sports"],
//   rating: 7.4,
// };

// function addMovie(obj, id) {
//   db.collection("movies")
//     .doc(id)
//     .set(obj)
//     .then(() => {
//       console.log("Film uspesno dodat na listu");
//     })
//     .catch((err) => {
//       console.log(`Film nije dodat na listu :/ ${err}`);
//     });
// }

// addMovie(mov1, "movie-2");
// addMovie(mov2, "movie-3");
// addMovie(mov3, "movie-4");
// // Menja podatke o nekim filmovima u bazi,

// function updateMovie(upd, id) {
//   db.collection("movies")
//     .doc(id)
//     .update({ ...upd })
//     .then(() => {
//       console.log("Uspesno izmenjeni podaci u filmu.");
//     })
//     .catch((err) => {
//       console.log(`Greska prilikom menjanja podataka ${err}`);
//     });
// }

// updateMovie({ rating: 9.0 }, "movie-4");
// // updateMovie("release_year: 1990", "movie-2");

// // Dodaje žanr nekom filmu,

// function addGenre(gen, id) {
//   db.collection("movies")
//     .doc(id)
//     .update({
//       genres: firebase.firestore.FieldValue.arrayUnion(gen),
//     })
//     .then(() => {
//       console.log("Uspesno dodat zanr filmu");
//     })
//     .catch((err) => {
//       console.log(`Doslo je do greske prilikom dodavanja zanra filma ${err}`);
//     });
// }

// addGenre("horror", "movie-1");

// // Briše žanr nekom filmu,

// function deleteGenre(gen, id) {
//   db.collection("movies")
//     .doc(id)
//     .update({
//       genres: firebase.firestore.FieldValue.arrayRemove(gen),
//     })
//     .then(() => {
//       console.log(`Uspesno obrisan ${gen} sa liste zanrova`);
//     })
//     .catch((err) => {
//       console.log(`Doslo je do greske prilikom uklanjanja zanra. ${err}`);
//     });
// }

// deleteGenre("sports", "movie-4");
// deleteGenre("Sports", "movie-4");

// // Menja ime ili prezime nekom režiseru.

// function changeName(ime, id) {
//   db.collection("movies")
//     .doc(id)
//     .update({ "director.name": ime })
//     .then(() => {
//       console.log("Uspesno je promenjeno ime rezisera");
//     })
//     .catch((err) => {
//       console.log(`Doslo je do greske prilikom menjanja imena rezisera ${err}`);
//     });
// }

// changeName("Nikola", "movie-4");

//Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao Ridley Scott,

db.collection("movies")
  .where("director.name", "==", "Ridley")
  .where("director.Surname", "==", "Scott")
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.name}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Čija je ocena između 5 i 10,

db.collection("movies")
  .where("rating", ">=", 5)
  .where("rating", "<=", 10)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.name}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Kojima je žanr komedija, tragedija ili drama,

db.collection("movies")
  .where("genres", "array-contains-any", [
    "sports",
    "historical",
    "comedy",
    "drama",
  ])
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.name}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Koji su izašli u 21. veku.
db.collection("movies")
  .where("release_year", ">=", 2000)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        let obj = d.data();
        console.log(`${obj.name}`);
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Prikazati sve informacije o najbolje rangiranom filmu.
db.collection("movies")
  .orderBy("rating", "desc")
  .limit(1)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;

      doc.forEach((d) => {
        console.log(d.data());
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Prikazati sve informacije o najslabije rangiranoj drami
db.collection("movies")
  .where("genres", "array-contains", "drama")
  .orderBy("rating")
  .limit(1)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let doc = snapshot.docs;
      doc.forEach((d) => {
        console.log(d.data());
      });
    } else {
      console.log(`Nema podataka u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });
