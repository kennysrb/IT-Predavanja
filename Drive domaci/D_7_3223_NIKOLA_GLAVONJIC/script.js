// 10. ZADATAK Napisati funkciju množi koja određuje proizvod brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
  let proizvod = 1;
  for (i = n; i <= m; i++) {
    proizvod *= i;
  }
  return proizvod;
}

let multi = mnozi(3, 6);
console.log(multi);

// 11. ZADATAKNapraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sredina(n, m) {
  let zbir = 0;
  let brojac = 0;
  for (i = n; i <= m; i++) {
    zbir += i;
    brojac++;
  }
  let rez = zbir / brojac;
  return rez;
}

let rez = sredina(3, 8);
console.log(`Aritmeticka sredina je ${rez}`);

// 12. ZADATAK Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSredina(n, m) {
  let brojac = 0;
  let suma = 0;

  for (i = n; i <= m; i++) {
    if (i % 10 == 3) {
      suma += i;
      brojac++;
    }
  }
  let rez = suma / brojac;
  return rez;
}

let arRez = arSredina(1, 34);
console.log(arRez);

// 13. ZADATAK Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function fontSize(n, boja, sirina) {
  document.body.innerHTML += `<p style="font-size:${n}px; color:${boja}; text-align: center; width:${sirina}%; margin: auto;">Igru igraju 2 ekipe sa po 5 igraca i jednim golmanom. Cilj igre je dati gol protivnickoj ekipi i sacuvati svoj gol. Utakmica traje 3 puta po 20 minuta.</p>`;
}

fontSize(22, "blue", 50);
