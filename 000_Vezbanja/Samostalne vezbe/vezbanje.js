// 1. ZADATAK Napisati program koji proverava da li je ceo broj x paran ili neparan i ippisuje odgovarajudu poruku.

let x = 4;

if (x % 1 == 0) {
  if (x % 2 == 0) {
    console.log("Broj je paran");
  } else {
    console.log("Broj je neparan");
  }
} else {
  console.log("Broj nije ceo");
}

// 2. ZADATAK Napisati program koji, ako je broj a vedi od 0, štampa poruku ‘Broj je pozitivan’.

let n = 5;

if (n > 0) {
  document.body.innerHTML += `<p>Broj je pozitivan</p>`;
} else {
  document.body.innerHTML += `<p>Broj je negativan</p>`;
}

// 3. Napisati program koji proverava da li je zbir dva broja deljiv sa tri ili nije. Ispisati poruku: 'Jeste' ili 'Nije'.

n = 5;
let m = 11;
let zbir = n + m;

if (zbir % 3 == 0) {
  console.log("Jeste");
} else {
  console.log("Nije");
}

// 4. Napisati program koji treba izračunati koren broja x ako je taj broj pozitivan, a inače ispisati poruku: 'Nema realnog rešenja'.

x = 101;
let koren = Math.sqrt(x);

if (koren > 0) {
  console.log(`Koren broja ${x} je  pozitivan broj ${koren}`);
} else {
  console.log("Nema realnog resenja");
}

for (i = x; i > 0; i--) {
  if (x / i == i) {
    console.log(`Koren broja ${x} = ${i}`);
  }
}

// 5. Napisati program kojim se unose dva pozitivna, cela broja a i b. Napisati program koji izračunava i
// štampa površinu jednakostraničnog trougla ako su brojevi jednaki (stranica je jednaka datim
// brojevima), odnosno površinu pravougaonika ako su brojevi različiti (stranice pravougaonika su
// jednake datim brojevima).

let a = 7;
let b = 7;

let pTrougla = (Math.sqrt(3) / 4) * a ** 2;

let pPravougaonika = a * b;

if (a == b) {
  console.log(
    `Povrsina jednakostranicnog trougla sa stranicom duzine ${a} je ${pTrougla}`
  );
} else {
  console.log(
    `Povrsina pravougaonika sa stranicama a = ${a} i b = ${b} je ${pPravougaonika}`
  );
}

// 6. Koju ce vrednost imati promenljiva b posle izvršavanja naredbe

a = 10;
a = 0;

if (a < 0) {
  b = a + 4;
} else {
  b = a - 5;
}

console.log(b);

// 7. Data su dva realna broja x i y. Napisati program koji izračunava i štampa količnik x y ako je broj y različit od nule, a inače ispisuje poruku: 'Deljenje je nemogude'.

x = 15;
let y = 10;

if (y != 0) {
  console.log(`Kolicnik brojeva ${x} i ${y} je ${x / y}`);
} else {
  console.log("Deljenje nije moguce");
}

// 8.

x = 3 / 2;

if (x != -3 / 2) {
  y = 1 / (2 * x + 3);
  console.log(y);
} else if (x == -3 / 2) {
  y = 0;
  console.log(y);
}

// 9. Data su tri ugla α, β, γ. Napisati program koji ispituje da li dati uglovi mogu biti uglovi trougla i ako mogu ispisati poruku: 'Mogu', a inače ispisati poruku: 'Ne mogu'.

a = 0.1;
b = 119.9;
let c = 60;

if (180 - (a + b + c) == 0 && a > 0 && b > 0 && c > 0) {
  console.log("Mogu");
} else {
  console.log("Ne mogu");
}

// 10. Napisati program kojim se za dva uneta broja a i b proverava da li je prvi deljiv drugim. Ispisati poruku: 'Jeste deljiv' ili 'Nije deljiv'.

a = 15;
b = 5;

if (a % b == 0) {
  console.log("deljiv je");
} else {
  console.log("Nije deljiv");
}

// 11. Napisati program kojim se unosi ceo broj X, a zatim ako je broj različit od 0 ispisuje njegova recipročna vrednost, a inače ispisuje poruka: 'Nemogude je deliti nulom'.

x = 2;

if (x != 0) {
  console.log(x ** -1);
} else {
  console.log("deljenje 0 nije moguce");
}

// 12.

x = 57;
y = 57;
let z;
if (x > y) {
  z = x + y;
} else if (x <= y) {
  z = x - y;
} else {
  ("Unos nije dobar");
}
console.log(z);

// 13.

x = 14;
if (x > 10 && x < 50) {
  console.log("Pripada");
} else {
  console.log("Ne pripada");
}

// 14.

a = -2;

if (a < 2 && a >= -2) {
  b = Math.sqrt(a + 8);
  console.log(b);
} else {
  b = a ** 2;
  console.log(b);
}

// 15. Napisati program kojim se promenljivoj min dodeljuje vrednost manjeg između brojeva a i b.

let min;

if (a > b) {
  min = b;
} else {
  min = a;
}

console.log(min);

// ako je unet ugao u stepenima (od 0 do 360) , ispisati kom kvadrantu ugao pripada.

let kvadrant1 = 90;
let kvadrant2 = 180;
let kvadrant3 = 270;
let kvadrant4 = 360;

let ugao = 320;

switch (true) {
  case ugao > 0 && ugao <= kvadrant1:
    console.log("prvi kvad");
    break;
  case ugao > kvadrant1 && ugao <= kvadrant2:
    console.log("drugi kvad");
    break;
  case ugao > kvadrant2 && ugao <= kvadrant3:
    console.log("treci kvad");
  case ugao > kvadrant3 && ugao <= kvadrant4:
    console.log("cetvrti kvad");

  default:
    console.log("pogresan unos");
}

// ZADATAK Za uˇcitani dvocifreni broj izdvojiti njegove cifre.

a = 122234;
i = a;
let broj1 = [];

while (i) {
  broj1.unshift(i % 10);
  i = Math.floor(i / 10);
}

console.log(`${broj1}`);

// SAMOSTALNE NEDELJE RADA

// IF

//1.

a = 10;
b = "sad";
c = -17;

if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
  if (a > b && a > c) {
    console.log("A je najveci");
  } else if (b > a && b > c) {
    console.log("B je najveci");
  } else if (c > a && c > b) {
    console.log("C je najveci");
  } else {
    console.log("Postoje 2 ili vise jednakih brojeva.");
  }
} else {
  console.log("POgresan unos");
}

//2.

let temp = 15;

if (temp < -15 || temp > 40) {
  console.log("Temperatura je ekstremna");
} else if (temp >= -15 || temp <= 40) {
  console.log("Temperatura je normalna");
} else {
  console.log("Unesi broj");
}

//3.

let year = 1928;

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  console.log("Godina je prestupna");
} else {
  console.log("Nije prestupna");
}

//4.

let storeOpen = 9;
let sotreClose = 20;

let storeOpenW = 10;
let storeCloseW = 18;

let date = new Date();
let dan = date.getDay();
let sat = date.getHours();

if (dan == 6 || dan == 0) {
  if (sat >= storeOpenW && sat < storeCloseW) {
    console.log("Vikend je i radimo");
  } else {
    console.log("Vikend je i ne radimo");
  }
} else {
  if (sat >= storeOpen && sat < storeClose) {
    console.log("Radni dan i radimo");
  } else {
    console.log("Radni dan i ne radimo");
  }
}

// 5.

let daysLeft = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
dan = date.getDate();
console.log(`U ovom mesecu je preostalo jos ${daysLeft - dan} dana u mesecu.`);

// 6.

n = 12;
let v = 30;
let dist = 3;
let maks = v / dist;

if (maks >= n) {
  document.body.innerHTML += `<p>Da</p>`;
} else {
  document.body.innerHTML += `<p>Mora da izadje ${n - maks} osoba</p>`;
}

// 8.
a = 5;
b = 5;
let op = "m";

if (op == "m" || op == "M") {
  console.log(`${a} * ${b} = ${a * b}`);
} else if (op == "d" || op == "D") {
  console.log(`${a} / ${b} = ${a / b}`);
} else if (op == "s" || op == "S") {
  console.log(`${a} + ${b} = ${a + b}`);
} else if (op == "o" || op == "O") {
  console.log(`${a} - ${b} = ${a - b}`);
} else {
  console.log("Pogresan unos");
}

// PETLJE

// 9.
m = 15;
let broj = 5;
let vrednost;

for (i = broj; i <= m; i++) {
  vrednost = i * 2;
  console.log(vrednost);
}

// 10.

n = 10;
m = 12;
let suma = 0;

for (i = n; i <= m; i++) {
  suma += i;
}
console.log(suma);

// 11.

n = 2;
m = 5;

let sumaKvadrata = 0;

for (i = n; i <= m; i++) {
  sumaKvadrata += i ** 2;
}
console.log(sumaKvadrata);

// 12.

n = 20;
m = 100;

let p = 1;

for (i = n; i <= m; i++) {
  if (i % 11 == 0) {
    p *= i;
  }
}
console.log(p);

// 13.

n = -10;
m = 25;
let brojacPoz = 0;
let brojacNeg = 0;

for (i = n; i <= m; i++) {
  if (i < 0) {
    brojacNeg++;
  } else {
    brojacPoz++;
  }
}

console.log(
  `Od ${n} do ${m} ima ${brojacNeg} negativnih brojeva i ${
    brojacPoz - 1
  } pozitivnih brojeva ne racunajuci 0.`
);

// 14.

n = 5;
m = 50;
let brojac = 0;

for (i = n; i <= m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    brojac++;
  }
}

console.log(brojac);

// 15.

n = 5;
m = 15;
a = 5;
p = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    p *= i;
  }
}
console.log(p);

// 16.

n = 15;
suma = 0;

for (i = n; i > 0; i--) {
  if (i % 3 == 0 && i % 2 == 1 && n % i == 0) {
    suma++;
  }
}

console.log(suma);

// 17.

n = 27;
i = n;
zbir = 0;

while (i) {
  zbir = zbir + (i % 10);
  i = Math.floor(i / 10);
}

console.log(`Zbir cifara broja ${n} je ${zbir}`);

// 18.

let ul = "<ul>";

for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    ul += `<ul><li style="color:red;">Element ${i}</li></ul>`;
  } else {
    ul += `<li>Element ${i}</li>`;
  }
}

ul += "</ul>";
document.body.innerHTML += ul;


// 19.

let sah = "<div>";
let polje = 1;
let span = `<span>${polje}</span>`;

for(i = 1; i <=8; i++){
  if(i % 2 != 0){
    sah += `<div class="belo">${span.repeat(8)}</div>`
  }else if(i % 2 == 0){
    sah += `<div class="crno">${span.repeat(8)}</div>`
  }
}



sah += "</div>";
document.body.innerHTML += sah;





