let i = 1;
// console.log(i); // 1
// i++;
// console.log(i); // 2
// i++;
// console.log(i); // 3
// i++;
// console.log(i); // 4
// i++;
// console.log(i); // 5

i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 1. ZADATAK A

i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

// 1. ZADATAK B

i = 1;
let rez = "";
while (i <= 20) {
  rez = rez + i + " ";
  i++;
}

console.log(rez);

// 2. ZADATAK

i = 20;
let niz = "";

while (i >= 1) {
  niz = niz + i + " ";
  i--;
}
console.log(niz);

// 3. ZADATAK

i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// 4. ZADATAK
// document.body.innerHTML += `<p style="color: red">1 paragraf</p>`;
// document.body.innerHTML += `<p style="color: blue">2 paragraf</p>`;
// document.body.innerHTML += `<p style="color: green">3 paragraf</p>`;
// document.body.innerHTML += `<p style="color: red">4 paragraf</p>`;
// document.body.innerHTML += `<p style="color: blue">5 paragraf</p>`;
// document.body.innerHTML += `<p style="color: green">6 paragraf</p>`;

let o = 16;
i = 0;

while (i <= o) {
  //Dodamo paragraf
  if (i % 3 == 1) {
    document.body.innerHTML += `<p style="color: red">${i}. paragraf</p>`;
  } else if (i % 3 == 2) {
    document.body.innerHTML += `<p style="color: blue">${i}. paragraf</p>`;
  } else {
    document.body.innerHTML += `<p style="color: green">${i} paragraf</p>`;
  }
  i++;
}

// 6. ZADATAK
let br = 1;
let zbir = 0;

while (br <= 100) {
  zbir = zbir + br;
  br++;
}

console.log(`Zbir brojeva od 1 do 100 = ${zbir}`);

// 7. ZADATAK

let n = 10020;

while (br <= n) {
  zbir = zbir + br;
  br++;
}

console.log(`Zbir brojeva od 1 do ${n} = ${zbir}`);

// 8. ZADATAK

// 9. ZADATAK

n = 3;
let m = 6;

i = n;
let proizvod = 1;

while (i <= m) {
  //Iskorisi i da se izracuna proizvod
  proizvod = proizvod * i;
  i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je: ${proizvod}`);

// 10. ZADATAK  Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 3;

let sumaParnih = 0;
let sumaNeparnih = 0;

i = n;
while (i <= m) {
  if (i % 2 == 0) {
    sumaParnih = sumaParnih + i ** 2;
  } else {
    sumaNeparnih = sumaNeparnih + i ** 3;
  }
  i++;
}

console.log(`Suma kvadrata parnih brojeva je ${sumaParnih}`);
console.log(`Suma kubova neparnih brojeva je ${sumaNeparnih}`);

// 11. ZADATAK Odrediti sa koliko brojeva je deljiv uneti broj k
// let k = 4;
// let l = k;
// i = k;

// let result = 0;

// while(i > 0){
//     k / i =
//     i--;
// }

// 12. ZADATAK Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

let k = 7;
let bro = 0;
i = 1;

while (i <= k) {
  if (k % i == 0) {
    bro++;
  }
  i++;
}

if (bro == 1) {
  console.log("Broj nije ni prost ni slozen");
} else if (bro == 2) {
  console.log("Broj je prost");
} else {
  console.log("Broj je slozen");
}
