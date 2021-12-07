// PRVI ZADATAK

let a = 3;
let b = 8;

if (a > b) {
  console.log("A je vece od B");
} else {
  console.log("B je vece od A");
}

// DRUGI ZADATAK

let temp = 10;

if (temp >= 0) {
  document.body.innerHTML = `<p style="color: red;">Temperatura od ${temp} je u plusu</p> `;
} else {
  document.body.innerHTML = `<p style="color: blue;">Temperatura od ${temp} je u minusu</p> `;
}

//TRECI ZADATAK
//u odnosu na pol muski zenski koji je korisnik uneo prikazati odgovarajuci avatar

let pol = "m";
if (pol == "m") {
  // prikazi avatar muskarca
  document.body.innerHTML += `<img src="./img/m.jpg">`;
} else {
  //prikazi avatar zene
  document.body.innerHTML += `<img src="./img/z.jpg">`;
}

// CETVRTI ZADATAK

let datum = new Date();

let sat = datum.getHours();
if (sat > 12) {
  console.log("Sada je popodne");
} else {
  console.log("Sada je prepodne");
}

// PETI ZADATAK
let godina = datum.getFullYear(); //godina = 2021
let godinaRodjenja = 1992;

if (godina - godinaRodjenja >= 18) {
  console.log("Osoba je punoletna");
} else {
  console.log("Osoba je maloletna");
}

// SESTI ZADATAK

let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //PRETPOSTAVKA DA JE maks = b1;

if (maks < b2) {
  // da li je maks manje od b2
  maks = b2;
}

if (maks < b3) {
  // da li je maks manje od b2
  maks = b3;
}

document.body.innerHTML += `<p> ${maks}</p>`;

//SEDMI ZADATAK

let poena = 73;

if (poena < 50) {
  document.body.innerHTML += `<p>Sa ${poena} poena, ucenik je pao ispit.</p>`;
} else if (poena > 50 && poena < 60) {
  document.body.innerHTML += `<p style="color: white; background-color:blue; font-size: 3em; text-align:center; padding: 20px; height:100px;">Sa ${poena} poena, ucenik je polozio ispit ocenom 6.</p>`;
} else if (poena > 60 && poena < 70) {
  document.body.innerHTML += `<p style="color: white; background-color:blue; font-size: 3em; text-align:center; padding: 20px; height:100px;">Sa ${poena} poena, ucenik je polozio ispit ocenom 7.</p>`;
} else if (poena > 70 && poena < 80) {
  document.body.innerHTML += `<p style="color: white; background-color:blue; font-size: 3em; text-align:center; padding: 20px; height:100px;">Sa ${poena} poena, ucenik je polozio ispit ocenom 8.</p>`;
} else if (poena > 80 && poena < 90) {
  document.body.innerHTML += `<p style="color: white; background-color:green; font-size: 3em; text-align:center; padding: 20px; height:100px;">Sa ${poena} poena, ucenik je polozio ispit ocenom 9.</p>`;
} else if (poena > 90) {
  document.body.innerHTML += `<p style="color: white; background-color:blue; font-size: 3em; text-align:center; padding: 20px; height:100px;">Sa ${poena} poena, ucenik je polozio ispit ocenom 10.</p>`;
}

//OSMI ZADATAK

let date = new Date();
let dayOTW = date.getDay();

if (dayOTW == 1) {
  document.body.innerHTML += `<p>Danas je ponedeljak</p>`;
} else if (dayOTW == 2) {
  document.body.innerHTML += `<p>Danas je utorak</p>`;
} else if (dayOTW == 3) {
  document.body.innerHTML += `<p>Danas je sreda</p>`;
} else if (dayOTW == 4) {
  document.body.innerHTML += `<p>Danas je cetvrtak</p>`;
} else if (dayOTW == 5) {
  document.body.innerHTML += `<p>Danas je petak</p>`;
} else if (dayOTW == 6) {
  document.body.innerHTML += `<p>Danas je subota</p>`;
} else if (dayOTW == 0) {
  document.body.innerHTML += `<p>Danas je nedelja</p>`;
} else {
  document.body.innerHTML += `<p>Invalid input</p>`;
}
console.log(dayOTW);

// DEVETI ZADATAK

let hour = date.getHours();
if (hour < 12) {
  document.body.innerHTML += `<p>Dobro jutro</p>`;
} else if (hour < 18) {
  document.body.innerHTML += `<p>Dobar dan</p>`;
} else {
  document.body.innerHTML += `<p>Dobro vece</p>`;
}

// DESETI ZADATAK

let d1 = 31;
let m1 = 12;
let g1 = 1999;

let d2 = 31;
let m2 = 12;
let g2 = 1999;

if (g1 > g2) {
  document.body.innerHTML += `<h1>Drugi datum je raniji</h1>`;
} else if (g2 > g1) {
  document.body.innerHTML += `<h1>Prvi datum je raniji</h1>`;
} else if (m1 > m2) {
  document.body.innerHTML += `<h1>Drugi datum je raniji</h1>`;
} else if (m2 > m1) {
  document.body.innerHTML += `<h1>Prvi datum je raniji</h1>`;
} else if (d1 > d2) {
  document.body.innerHTML += `<h1>Drugi datum je raniji</h1>`;
} else if (d2 > d1) {
  document.body.innerHTML += `<h1>Prvi datum je raniji</h1>`;
} else {
  document.body.innerHTML += `<h1>Isti je datum</h1>`;
}

// JEDANAESTI ZADATAK

if (hour < 9 && hour >= 17) {
  document.body.innerHTML += `<p>Vise ne radimo.</p>`;
} else {
  document.body.innerHTML += `<p>Firma radi do 17h.</p>`;
}

let sati = 15;
if (sati < 9) {
  console.log("firma ne radi");
} else if (sati <= 17) {
  console.log("firma ne radi");
} else {
  console.log("Firma radi");
}

// DVANAESTI ZADATAK DOKTORI

let p1 = 8;
let k1 = 13;

let p2 = 13;
let k2 = 23;

if(k1 < p2) {
  console.log("Ne preklapaju se");
} else if (k2 < p1) {
  console.log("Ne preklapaju se");
} else{
  console.log("Preklapaju se");
}

//TRINAESTI ZADATAK

let k = 20;
if (k % 2 == 0) {
  console.log("paran broj");
} else {
  console.log("Neparan broj");
}

//CETRNAESTI ZADATAK
if (k % 3 != 0) {
  console.log(`Broj ${k} nije deljiv brojem 3`);
} else {
  console.log(`Broj ${k} je deljiv brojem 3`);
}

//PETANESTI ZADATAK ZA VEZBU

//SESNAESTI ZADATAK

let broj = 5;
if (broj <= 0) {
  broj = broj--; //dodeljuje prehodnika (broj -1)
  console.log(broj);
} else {
  broj = broj++; //dodeljuje sledbenika (broj +1)
  console.log(broj);
}

//SEDAMNAESTI ZADATAK

// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

let broj1 = 45;
let broj2 = 65;
let broj3 = 35;

let max = broj1;
if(max < broj2){
    max = broj2;
}

if(max < broj3){
    max = broj3;
}

console.log(`Najveci broj je ${max}.`);

//najmanji broj

let min = broj1;
if(min > broj2){
    min = broj2;
}

if(min > broj3){
    min = broj3;
}

console.log(`Najmanji broj je ${min}.`);

let srednji = broj1 + broj2 + broj3 - min - max;
console.log(`Srednji broj je ${srednji}`);


// OSAMNAESTI ZADATAK
//Za učitani broj ispitati da li je ceo.

let s = 15.3;

if(s % 1 == 0){
    console.log(`Broj ${s} je ceo broj`);
    
}else{
    console.log(`Broj ${s} nije ceo broj`);
    
}

console.log(Math.floor(s));
if(Math.floor(s) == s){
    console.log(`Broj ${s} je ceo broj`);
    
}else{
    console.log(`Broj ${s} nije ceo broj`);
    
}


