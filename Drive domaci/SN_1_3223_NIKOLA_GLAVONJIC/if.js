// 1. ZADATAK
// let a = -113;
// let b = 119;
// let c = 1117;

// let maks = a;

// if (a > b && a > c) {
//   console.log("A je najveci");
// } else if (b > a && b > c) {
//   console.log("B je najveci");
// } else {
//   console.log("C je najveci");
// }

// 2. ZADATAK Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

// let temp = 41;

// if (temp < -15 || temp > 40) {
//   document.body.innerHTML += `<p>Temperatura od ${temp} stepeni je <span style ="color: red; font-weight: bold;">EKSTREMNA</span></p>`;
// }

// 3. ZADATAK Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.

// let godina = 2017;

// if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
//   console.log(`${godina} je prestupna`);
// } else {
//   console.log(`${godina} nije prestupna`);
// }

// 4. ZADATAK Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

// let pocetakRadni = 9;
// let krajRadni = 20;
// let pocetakVikend = 10;
// let krajVikend = 18;
let date = new Date();
// let dan = date.getDay();
// let sat = date.getHours();

// if (dan >= 1 && dan <= 5) {
//   if (sat >= pocetakRadni && sat < krajRadni) {
//     console.log("Radni dan - radimo");
//   } else {
//     console.log("Radni dan - ne radimo");
//   }
// } else {
//   if (sat >= pocetakVikend && sat < krajVikend) {
//     console.log("Vikend - radimo");
//   } else {
//     console.log("Vikend - ne radimo");
//   }
// }

// 5. ZADATAK Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli.

// let datum = date.getDate();
// console.log(datum);

// let danaUMesecu = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// console.log(danaUMesecu);

// console.log(`Presotalo je jos: ${danaUMesecu - datum} dana u mesecu.`);

// 6 . ZADATAK Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2 površine lokala. Za 2 posmatrani kafić su dati podaci da ima v m i da je u njemu trenutno n gostiju.

// Brojeve v i n određujete sami.
// Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema
// unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne
// pridržava propisane mere.
// Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal
// da bi mera bila zadovoljena.

// let v = 150;
// let n = 5;
// let dist = 3;
// let max = v / dist; // maksimum osoba po merama
// console.log(max);

// if (max >= n) {
//   document.body.innerHTML += `<h1 style="background-color: green; text-align: center; color: white;">DA</h1>`;
// } else {
//   document.body.innerHTML += `<h1 style="background-color: red; text-align: center; color: white;">Lokal mora da napusti: ${
//     n - max
//   } osoba.</h1>`;
// }

// 7. ZADATAK LEKARI

// pocSatLek1 = 8;
// pocMinLek1 = 0;
// krajSatLek1 = 16;
// krajMinLek1 = 0;

// pocSatLek2 = 12;
// pocMinLek2 = 0;
// krajSatLek2 = 22;
// krajMinLek2 = 0;

// let pocetak1 = pocSatLek1 * 60 + pocMinLek1;
// let kraj1 = krajSatLek1 * 60 + krajMinLek1;

// let pocetak2 = pocSatLek2 * 60 + pocMinLek2;
// let kraj2 = krajSatLek2 * 60 + krajMinLek2;

// // ● Početak i kraj radnog vremena prvog lekara (izraženo u satima i minutima)
// document.body.innerHTML += `<h2 style="background-color: orange; margin: 0; width: 50%; text-align: center; padding: 20px">Radno vreme lekara br 1 je: od ${pocSatLek1}h ${pocMinLek1}min do ${krajSatLek1}h ${krajMinLek1}min.</h2>`;

// // ● Početak i kraj radnog vremena drugog lekara (izraženo u satima i minutima)
// document.body.innerHTML += `<h2 style="background-color: skyblue; margin: 0; width: 50%; text-align: center; padding: 20px ">Radno vreme lekara br 2 je: od ${pocSatLek2}h ${pocMinLek2}min. do ${krajSatLek2}h ${krajMinLek2}min.</h2>`;

// // ● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.

// function time_convert(num) {
//   let hours = Math.floor(num / 60);
//   let minutes = num % 60;
//   return hours + "h:" + minutes + "min";
// }

// if (kraj1 < pocetak2) {
//   //p2 < k1
//   document.body.innerHTML += "<h2>Ne preklapaju se a</h2>";
// } else if (kraj2 < pocetak1) {
//   //p2 >k1
//   document.body.innerHTML += "<h2>Ne preklapaju se b</h2>";
// } else {
//   if (kraj1 > pocetak2 && pocetak1 >= pocetak2 && kraj1 <= kraj2) {
//     document.body.innerHTML += `<h2>3. Vreme koje su dva lekara provela zajedno na poslu je: ${time_convert(
//       kraj1 - pocetak1
//     )}</h2>`;
//   } else if (kraj2 > pocetak1 && pocetak2 >= pocetak1 && kraj2 <= kraj1) {
//     document.body.innerHTML += `<h2>4. Vreme koje su dva lekara provela zajedno na poslu je: ${time_convert(
//       kraj2 - pocetak2
//     )}</h2>`;
//   } else if (
//     kraj1 > pocetak2 &&
//     pocetak1 > pocetak2 &&
//     kraj2 > pocetak1 &&
//     kraj2 <= kraj1
//   ) {
//     document.body.innerHTML += `<h2>5. Vreme koje su dva lekara provela zajedno na poslu je: ${time_convert(
//       kraj2 - pocetak1
//     )}</h2>`;
//   } else if (
//     kraj2 > pocetak1 &&
//     pocetak2 > pocetak1 &&
//     kraj1 > pocetak2 &&
//     kraj1 <= kraj2
//   ) {
//     document.body.innerHTML += `<h2>6. Vreme koje su dva lekara provela zajedno na poslu je: ${time_convert(
//       kraj1 - pocetak2
//     )}</h2>`;
//   } else {
//     document.body.innerHTML += `<h2>Lekarima se smene ne preklapaju.</h2>`;
//   }
// }

//Ovako bih ispisivao vreme provedeno na poslu bez koriscenja funkcije time_convert i menjao bih kraj1 - pocetak2 u zavisnosti od slucaja

// let vreme = kraj1 - pocetak2;
// let sati = Math.floor(vreme / 60);
// let minuti = vreme % 60;
// console.log(`${sati}h : ${minuti}min`);

// 8. ZADATAK Za uneta dva broja i karakter napraviti kalkulator koji vrši:
// ● Množenje ta dva broja ukoliko je uneto slovo ’m’
// ● Deljenje ukoliko je uneto slovo ’d’
// ● Sabiranje ukoliko je uneto slovo ’s’
// ● Oduzimanje ukoliko je uneto slovo ’o’

// a = 1289;
// b = 10;
// let op = "S";

// if (op == "m" || op == "M") {
//   console.log(`Proizvod brojeva${a} i ${b} je: ${a * b}`);
// } else if (op == "d" || op == "D") {
//   console.log(`Kolicnik brojeva ${a} i ${b} je: ${a / b}`);
// } else if (op == "s" || op == "S") {
//   console.log(`Zbir brojeva ${a} i ${b} je: ${a + b}`);
// } else if (op == "o" || op == "O") {
//   console.log(`Razlika brojeva ${a} i ${b} je: ${a - b}`);
// } else {
//   console.log("Unos nije ispravan");
// }
