// Napisati skript koji:

let movies = db.collection("movies");
console.log(movies);

// Dodaje nekoliko filmova u bazu,

let mov1 = {
  name: "Green Mile",
  director: {
    name: "Frank",
    last_name: "Darabont",
  },
  release_year: 1999,
  genres: ["Scifi", "Drama"],
  rating: 8.6,
};

let mov2 = {
  name: "When I grow up I'll become a kangaroo",
  director: {
    name: "Radivoje",
    last_name: "Andric",
  },
  release_year: 2004,
  genres: ["Comedy"],
  rating: 8.4,
};

let mov3 = {
  name: "Green street hooligans",
  director: {
    name: "Lexi",
    last_name: "Alexander",
  },
  release_year: 2005,
  genres: ["Drama", "Crime", "Sports"],
  rating: 7.4,
};

function addMovie(obj, id) {
  db.collection("movies")
    .doc(id)
    .set(obj)
    .then(() => {
      console.log("Film uspesno dodat na listu");
    })
    .catch((err) => {
      console.log(`Film nije dodat na listu :/ ${err}`);
    });
}

addMovie(mov1, "movie-2");
addMovie(mov2, "movie-3");
addMovie(mov3, "movie-4");
// Menja podatke o nekim filmovima u bazi,

function updateMovie(upd, id) {
  db.collection("movies")
    .doc(id)
    .update({ rating: upd })
    .then(() => {
      console.log("Uspesno izmenjeni podaci u filmu.");
    })
    .catch((err) => {
      console.log(`Greska prilikom menjanja podataka ${err}`);
    });
}

updateMovie("9.0", "movie-4");
// updateMovie("release_year: 1990", "movie-2");

// Dodaje žanr nekom filmu,

function addGenre(gen, id) {
  db.collection("movies")
    .doc(id)
    .update({
      genres: firebase.firestore.FieldValue.arrayUnion(gen),
    })
    .then(() => {
      console.log("Uspesno dodat zanr filmu");
    })
    .catch((err) => {
      console.log(`Doslo je do greske prilikom dodavanja zanra filma ${err}`);
    });
}

addGenre("horror", "movie-1");

// Briše žanr nekom filmu,

function deleteGenre(gen, id) {
  db.collection("movies")
    .doc(id)
    .update({
      genres: firebase.firestore.FieldValue.arrayRemove(gen),
    })
    .then(() => {
      console.log(`Uspesno obrisan ${gen} sa liste zanrova`);
    })
    .catch((err) => {
      console.log(`Doslo je do greske prilikom uklanjanja zanra. ${err}`);
    });
}

deleteGenre("sports", "movie-4");
deleteGenre("Sports", "movie-4");

// Menja ime ili prezime nekom režiseru.

function changeName(ime, id) {
  db.collection("movies")
    .doc(id)
    .update({ "director.name": ime })
    .then(() => {
      console.log("Uspesno je promenjeno ime rezisera");
    })
    .catch((err) => {
      console.log(`Doslo je do greske prilikom menjanja imena rezisera ${err}`);
    });
}

changeName("Nikola", "movie-4");
