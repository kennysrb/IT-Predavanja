// let a = 1;

// while (a <= 5) {
//   console.log(`Na redu je broj ${a}`);
//   a++;
// }

// for (let i = 1, k = 5; i <= k; i++) {
//   console.log(i);
// }

// 1. nacin

// for (i = 1; i <= 5; i++) {
//   console.log(`For petlja iteracija ${i} `);
// }

// 2. nacin

// i = 1;
// for (i; i <= 5; i++) {
//   console.log(`For petlja iteracija ${i} `);
// }

// 2. ZADATAK

// for (i = 20; i >= 1; i--) {
//   console.log(i);
// }

// 3. ZADATAK

// console.log("Ispisati parne brojeve od 1 do 20 ");

// 1 nacin
// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 5. ZADATAK
// console.log("5. ZADATAK Odrediti sumu brojeva od 1 do n");

// let n = 100;
// let suma = 0;
// for (i = 1; i <= n; i++) {
//   suma = suma + i;
// }

// console.log(suma);

// // 6. ZADATAK
// console.log("");

// // 7. ZADATAK
// console.log("7. ZADATAK Odrediti proizvod brojeva od n do m");

// n = 2;
// let m = 6;
// let proizvod = 1;

// for (i = n; i <= m; i++) {
//   proizvod = proizvod * i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// 9. ZADATAK Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

//<img src="slike/1.jpg">
//<img src="slike/2.jpg">
//<img src="slike/3.jpg">

// for (let i = 1; i <= 3; i++) {
//   document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }

//////////////////////////////////////
// 11. ZADATAK Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

// let brojac = 0;

// for (i = 5; i <= 150; i++) {
//   if (i % 13 == 0) {
//     brojac++;
//   }
// }

// console.log(brojac);

// 12. ZADATAK Ispisati aritmetičku sredinu brojeva od n do m.

let n = 5;
let m = 10;
let suma = 0;
let brojac = 0;

for (i = n; i <= m; i++) {
  suma = suma + i;
  brojac++;
}

let sredina = suma / brojac;
console.log(brojac);
console.log(suma);
console.log(`Aritmeticka sredina zbira brojeva od ${n} do ${m} je ${sredina}`);

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 5;
m = 50;
suma = 0;
brojac = 0;

for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    suma += i;
    brojac++;
  }
}

console.log(suma, brojac);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 15;
a = 2;
suma = 0;

for (i = n; i <= m; i++) {
  if (i % a != 0) {
    suma = suma + i;
    console.log(i);
  }
}

console.log(suma);

// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a

n = 1;
m = 6;
a = 2;
proizvod = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    proizvod *= i;
  }
}

console.log(proizvod);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k

//preko for petlje

k = 6;
brojac = 0;

for (i = 1; i <= k; i++) {
  if (k % i == 0) {
    brojac++;
  }
}
console.log(brojac);

// preko while petlje
i = 1;
brojac = 0;
while (i <= k) {
  if (k % i == 0) {
    brojac++;
  }
  i++;
}
console.log(`Broj je ${brojac} preko while petlje`);

//20. Zadatak tabela

let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
  if (red % 2 == 0) {
    tabela += `<tr class="roze">
                  <td>Tekst</td>
                  <td>Tekst</td>
                </tr>`;
  } else {
    tabela += `<tr>
                  <td>Tekst</td>
                  <td>Tekst</td>
                </tr>`;
  }
}
tabela += `</table>`;

document.body.innerHTML += tabela;
