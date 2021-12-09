// 1. ZADATAK
console.log(
  "Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak)."
);

let dan = 7;

switch (dan) {
  case 1:
    console.log("Danas je ponedeljak");
    break;
  case 2:
    console.log("Danas je utorak");
    break;

  case 3:
    console.log("Danas je sreda");
    break;

  case 4:
    console.log("Danas je cetvrtak");
    break;

  case 5:
    console.log("Danas je petak");
    break;

  case 6:
    console.log("Danas je subota");
    break;

  case 7:
    console.log("Danas je nedelja");
    break;

  default:
    console.log("Unos nije ispravan");
}

// ZADATAK 2:

console.log(
  "Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan)."
);

let ocena = "4";

switch (ocena) {
  case (1, "1"):
    console.log("Ucenik je nedovoljan");
    break;
  case (2, "2"):
    console.log("Ucenik je dovoljan");
    break;
  case (3, "3"):
    console.log("Ucenik je dobar");
    break;
  case (4, "4"):
    console.log("Ucenik je vrlo dobar");
    break;
  case (5, "5"):
    console.log("Ucenik je odlican");
    break;
  case "":
    console.log("Ucenik je neocenjen");
    break;
  default:
    console.log("pogresan unos");
}

// ZADATAK 3:

console.log(
  "Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan."
);

let n = 1;
if (n % 2 == 0 && n < 10) {
  switch (n) {
    case 0:
      console.log("Broj je 0");
      break;
    case 2:
      console.log("Broj je 2");
      break;
    case 4:
      console.log("Broj je 4");
      break;
    case 6:
      console.log("Broj je 6");
      break;
    case 8:
      console.log("Broj je 8");
      break;
    default:
      console.log("pogresan unos");
  }
} else {
  console.log(
    "Pogresan unos ili je broj je neparan, manji od 0 ili veci od 10"
  );
}

// ZADATAK 4:
console.log(
  "Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’."
);

let a = 20;
let b = 5;
let op = "M";

switch (op) {
  case ("m", "M"):
    console.log(`Prozvod brojeva ${a} i ${b} je ${a * b}`);
    break;
  case ("s", "S"):
    console.log(`Suma brojeva ${a} i ${b} je${a + b}`);
    break;
  case ("o", "O"):
    console.log(`Razlika brojeva ${a} i ${b} je${a - b}`);
    break;
  case ("d", "D"):
    console.log(`Kolicnik brojeva ${a} i ${b} je${a / b}`);
    break;
  default:
    console.log("Pogresan unos");
}

// ZADATAK 5:

console.log(
  "Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda."
);

let date = new Date();
let datum = date.getDay();
let vikend = 5; // Broj 5 kao petak zato sto ako od subote oduzimamo imacemo 1 ekstra dan do vikenda npr subota(6) - petak (5) daje 1 dan do vikenda, dok je vikend zapravo sutradan
let danaDoVikenda = vikend - datum;
console.log(datum);

switch (datum) {
  case 0:
    console.log(`Danas je nedelja`);
    break;
  case 1:
    console.log(
      `Ostalo je jos ${danaDoVikenda} dana do vikenda ne racunajuci danasnji dan.`
    );
    break;
  case 2:
    console.log(
      `Ostalo je jos ${danaDoVikenda} dana do vikenda ne racunajuci danasnji dan.`
    );
    break;
  case 3:
    console.log(
      `Ostalo je jos ${danaDoVikenda} dana do vikenda ne racunajuci danasnji dan.`
    );
    break;
  case 4:
    console.log(
      `Ostalo je jos ${danaDoVikenda} dana do vikenda ne racunajuci danasnji dan.`
    );
    break;
  case 5:
    console.log(`Sutra je vikend`);
    break;
  case 6:
    console.log(`Danas je subota vikend.`);
    break;
  default:
    console.log("Pogresan unos");
}

// console.log(`Ostalo je jos ${danaDoVikenda} dana do vikenda`);

// ZADATAK 6:

console.log(
  "Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini."
);

let mesec = date.getMonth() + 1;
switch (mesec) {
  case 1:
    console.log("Sad je Januar");
    break;
  case 2:
    console.log("Sada je Februar");
    break;
  case 3:
    console.log("Sad je Mart");
    break;
  case 4:
    console.log("Sada je April");
    break;
  case 5:
    console.log("Sad je Maj");
    break;
  case 6:
    console.log("Sada je Jun");
    break;
  case 7:
    console.log("Sad je Jul");
    break;
  case 8:
    console.log("Sada je Avgust");
    break;
  case 9:
    console.log("Sad je Septembar");
    break;
  case 10:
    console.log("Sada je Oktobar");
    break;
  case 11:
    console.log("Sada je Novembar");
    break;
  case 12:
    console.log("Sada je Decembar");
    break;
  default:
    console.log("Pogresan unos");
}

// ZADATAK 7:

//Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

mesec = date.getMonth() + 1;
let godina = date.getFullYear();
let brDana;

// mesec = 2;    //TEST ZA FEBRUAR
// godina = 2021; //TEST ZA PRESTUPNU GODINU
switch (mesec) {
  case (1, 3, 5, 7, 8, 10, 12):
    brDana = 31;
    break;
  case 2:
    if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
      brDana = 29;
    } else {
      brDana = 28;
    }
    break;
  case (4, 6, 9, 11):
    brDana = 30;
    break;
  default:
    console.log("pogresan unos");
}
console.log(`Ovaj mesec ima ${brDana} dan.`);

// ZADATAK 8

console.log(
  "Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto."
);

let boja = "RED";

switch (boja) {
  case ("red", "RED"):
    document.getElementById("boja").style.color = "red";
    break;
  case ("blue", "BLUE"):
    document.getElementById("boja").style.color = "blue";
    break;
  case ("green", "GREEN"):
    document.getElementById("boja").style.color = "green";
    break;
  default:
    document.getElementById("boja").style.color = "yellow";
}
