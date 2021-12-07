// ZADATAK 1

let p = 1500;
let m = 2000;
let k = 550;

let razlika = p + m - k;

console.log(
  `Peri je potrebno vratiti ${p - razlika / 2} dinara, a Miki ${
    m - razlika / 2
  } dinara.`
);

// ZADATAK 2

let n = 18;
let a = 2;
a = a + a + 2; //nova vrednost: 10

console.log(`Citaocu je preostalo da procita jos: ${n - a} poglavlja.`);

if (a > n / 2) {
  console.log(`Ostalo je da se procita još manje od polovine knjige`);
} else {
  console.log("Ostalo je da se procita vise od polovine knjige");
}

//ZADATAK 3

let u = 13221; //kj
let konv = 4.1868;
let kcal = u / konv;

if (kcal < 2000) {
  console.log(`Potrebno je povecati unos kalorija`);
} else {
  console.log("Nije potrebno povecati unos kalorija");
}
