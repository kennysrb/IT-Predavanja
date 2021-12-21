//9. ZADATAK

console.log("9. Zadatak Ispisati dvostruku vrednost brojeva od 5 do 15.");

let broj = 5;
while (broj <= 15) {
  console.log(broj * 2);
  broj++;
}

//10. ZADATAK

console.log("10. Zadatak Odrediti sumu brojeva od n do m.");

let n = 19;
let m = 22;
let suma = 0;
let i = n;

while (i <= m) {
  suma += i;
  i++;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

//11. ZADATAK

console.log("11. Zadatak Odrediti sumu kvadrata brojeva od n do m.");

n = 2;
m = 10;
i = n;
suma = 0;

while (i <= m) {
  suma = i ** 2 + suma;
  i++;
}

console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}`);

//12. ZADATAK

console.log(
  "12. Zadatak Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100."
);

n = 20;
i = n;
m = 100;
let proizvod = 1;

while (i <= m) {
  if (i % 11 == 0) {
    proizvod *= i;
  }
  i++;
}

console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// //13. ZADATAK

console.log(
  "13.Zadatak Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno."
);

n = -15;
m = 36;
let brojacNegativan = 0;
let brojacPozitivan = 0;

for (i = n; i <= m; i++) {
  if (i < 0) {
    brojacNegativan++;
  } else {
    brojacPozitivan++;
  }
}

console.log(
  `Od ${n} do ${m} ima ${brojacNegativan} negativnih brojeva, a ${
    brojacPozitivan - 1
  } negativnih brojeva, ne racunajuci nulu.`
);

// //14. ZADATAK

console.log(
  "14.Zadatak Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5."
);

n = 5;
m = 50;
let brojac = 0;

for (i = n; i <= m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    brojac++;
  }
}

console.log(
  `Od ${n} do ${m} ima ${brojac} broj/a(brojeva) koji su deljivi sa 3 ili sa 5.`
);

// //15. ZADATAK

console.log(
  "15.Zadatak Odrediti proizvod brojeva od n do m koji su deljivi brojem a."
);

n = 4;
m = 12;
let a = 2;
proizvod = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    proizvod *= i;
  }
}

console.log(
  `${proizvod} je prozivod brojeva od ${n} do ${m} koji su deljivi sa ${a}.`
);

// //16. ZADATAK

console.log(
  "16. Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su."
);

n = 15;
suma = 0;

for (i = n; i > 0; i--) {
  if (i % 3 == 0 && i % 2 == 1 && n % i == 0) {
    suma++;
  }
}

console.log(`${n} ima ${suma} neparnih delioca koji su deljivi brojem 3.`);

// //17. ZADATAK

console.log(
  "17.Zadatak Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu."
);

n = 27;
i = n;
zbir = 0;

while (i) {
  zbir = zbir + (i % 10);
  i = Math.floor(i / 10);
}
console.log(`Zbir cifara broja ${n} je ${zbir}`);

// // 18. ZADATAK LISTA

let lista = "<ul>"; // + </ul> na kraju

for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    lista += `<ul><li class="red">Element ${i}</li></ul>`;
  } else {
    lista += `<li>Element ${i}</li>`;
  }
}
lista += "</ul>";
document.body.innerHTML += lista;

// // 19. ZADATAK

let tabla = `<div class ="tabla">`;
let p = 1;

for (i = 1; i <= 8; i++) {
  if (i % 2 == 1) {
    tabla += `<div class="belo"><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span></div>`;
  } else if (i % 2 == 0) {
    tabla += `<div class="crno"><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span></div>`;
  }
}

tabla += `</div>`;
document.body.innerHTML += tabla;
