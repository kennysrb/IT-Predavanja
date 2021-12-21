console.log("test");

// ZADATAK 1

let pocetak = 9 * 60;
let kraj = 17 * 60;

let date = new Date();
let sat = date.getHours();
let minut = date.getMinutes();

let vreme = sat * 60 + minut;

let ostatak = kraj - vreme;
let sati = Math.floor(ostatak / 60);
let minuti = ostatak % 60;

console.log(pocetak);
console.log(vreme);
console.log(kraj);

if (vreme >= pocetak && vreme < kraj) {
  console.log(
    `Radnici je ostalo jos ${sati}h : ${minuti}min do kraja radnog vremena`
  );
} else if (vreme < pocetak) {
  console.log(`Radno vreme jos nije pocelo.`);
} else if (vreme >= kraj) {
  console.log(`Radno vreme je vec zavrseno.`);
}

// ZADATAK 2

let posiljka = 1500; //grama
let postarina = 5 * posiljka; // po gramu posiljke
let popust;

if (posiljka >= 1000 && posiljka <= 2000) {
  popust = (postarina * 5) / 100;
  console.log(`Cena bez popusta je ${postarina}`);
  console.log(`Cena sa popustom je ${postarina - popust} dinara.`);
} else if (posiljka > 2000) {
  popust = (postarina * 10) / 100;
  console.log(`Cena bez popusta je ${postarina}`);
  console.log(`Cena sa popustom je ${postarina - popust}`);
} else {
  console.log("Posiljka je manja od 1000g.");
}

// ZADATAK 3

let broj = 125;
let kupci = 25;
let nabavka = 0;
let i = broj;

while (i % kupci != 0) {
  nabavka++;
  i++;
}

console.log(`Potrebno je kupiti najmanje ${nabavka} ruza`);

// ZADATAK 4

let n = 4;
let m = 160;

let suma = 0;
let brojac = 0;

for (i = n; i <= m; i++) {
  if (i % 7 == 0 && i % 2 == 1) {
    suma += i;
    brojac++;
  }
}
let proizvod = suma * brojac;

console.log(suma);
console.log(brojac);
console.log(proizvod);

// ZADATAK 5

n = 5;
m = 25;

let zbir = 0;
let brojevi = 0;

for (i = n; i <= m; i++) {
  if (i % 2 == 0 && i % 3 == 0) {
    zbir += i;
  }if (i % 10 == 3) {
    brojevi++;
  }
}

console.log(zbir);
console.log(brojevi);

console.log(zbir - brojevi);
