// 1. ZADATAK
let a = -13;
let b = -9;
let c = -17;

let maks = a;

if (a > b && a > c) {
  console.log("A je najveci");
} else if (b > a && b > c) {
  console.log("B je najveci");
} else {
  console.log("C je najveci");
}

// 2. ZADATAK Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = -16;

if (temp < -15 || temp > 40) {
  document.body.innerHTML += `<p>Temperatura od ${temp} stepeni je <span style ="color: red">EKSTREMNA</span></p>`;
}

// 3. ZADATAK Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.

let godina = 2151;

if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
  console.log(`${godina} je prestupna`);
} else {
  console.log(`${godina} nije prestupna`);
}

// 4. ZADATAK Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let pocetakRadni = 9;
let krajRadni = 20;
let pocetakVikend = 10;
let krajVikend = 18;
let date = new Date();
let dan = date.getDay();
let sat = date.getHours();

if (dan >= 1 && dan <= 5) {
  if (sat >= pocetakRadni && sat < krajRadni) {
    console.log("Radni dan - radimo");
  } else {
    console.log("Radni dan - ne radimo");
  }
} else {
  if (sat >= pocetakVikend && sat < krajVikend) {
    console.log("Vikend - radimo");
  } else {
    console.log("Vikend - ne radimo");
  }
}

// 5. ZADATAK Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli.



let datum = date.getDate();
console.log(datum);

let danaUMesecu = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log(danaUMesecu);

console.log(`Presotalo je jos: ${danaUMesecu - datum} dana u mesecu.`);






// 6 . ZADATAK Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2 površine lokala. Za 2 posmatrani kafić su dati podaci da ima v m i da je u njemu trenutno n gostiju.

// Brojeve v i n određujete sami.
// Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema
// unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne
// pridržava propisane mere.
// Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal
// da bi mera bila zadovoljena.


let v = 150;
let n = 111;
let dist = 3;
let max = v / dist;
console.log(max);

if(max >= n){
    document.body.innerHTML += `<h1 style="background-color: green; text-align: center; color: white;">DA</h1>`;
}else{
    document.body.innerHTML += `<h1 style="background-color: red; text-align: center; color: white;">Lokal mora da napusti: ${n - max} osoba.</h1>`
}

// 7. ZADATAK

pocSatLek1 = 10;
pocMinLek1 = 0;
krajSatLek1 = 22;
krajMinLek1 = 0;


pocSatLek2 = 4;
pocMinLek2 = 15;
krajSatLek2 = 12;
krajMinLek2 = 0;

let pocetniSat1 = pocSatLek1 * 60;
let krajnjiSat1 = krajSatLek1 * 60;


let pocetniSat2 = pocSatLek2 * 60;
let krajnjiSat2 = krajSatLek2 * 60;


let pocetak1 = pocetniSat1 + pocMinLek1;
let kraj1 = krajnjiSat1 + krajMinLek1;

let pocetak2 = pocetniSat2 + pocMinLek2;
let kraj2 = krajnjiSat2 + krajMinLek2;

console.log(pocetak1);
console.log(pocetak2);
console.log(kraj1);
console.log(kraj2);



// Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
// ● Početak radnog vremena prvog lekara (izraženo u satima i minutima)

document.body.innerHTML += `<h2 style="background-color: orange; padding: 0; margin: 0;">Radno vreme lekara br 1 je: od ${pocSatLek1}h ${pocMinLek1}min.</h2>`;
// ● Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
document.body.innerHTML += `<h2 style="background-color: orange; padding: 0; margin: 0; margin-bottom: 10px;"><span style="color:orange">Radno vreme slekara br 2 je </span> do ${krajSatLek1}h ${krajMinLek1}min.</h2>`;

// ● Početak radnog vremena drugog lekara (izraženo u satima i minutima)
document.body.innerHTML += `<h2 style="background-color: skyblue; padding: 0; margin: 0;">Radno vreme lekara br 2 je: od ${pocSatLek2}h ${pocMinLek2}min.</h2>`;
// ● Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
document.body.innerHTML += `<h2 style="background-color: skyblue; padding: 0; margin: 0;"><span style="color:skyblue">Radno vreme slekara br 2 je </span> do ${krajSatLek2}h ${krajMinLek2}min.</h2>`;
// ● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.

if(kraj1 < pocetak2){ //p2 < k1
    document.body.innerHTML += "<h2>Ne preklapaju se a</h2>";
}else if(kraj2 < pocetak1){ //p2 >k1
    document.body.innerHTML += "<h2>Ne preklapaju se b</h2>";
}else{
        document.body.innerHTML += "<h2>Preklapaju se </h2>";
}

let hours = Math.floor(kraj1 - pocetak2)/60;

console.log(`Vreme provedeno na poslu zajedno je ${hours} `);


function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(kraj1 - pocetak2));









 

