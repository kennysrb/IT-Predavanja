function zdravo() {
  console.log("Hello world");
}

zdravo();

function stampaj(a) {
  console.log(a);
}

stampaj("Nikola");
stampaj("Ivan");
let ime = "Damir Dubravka";
stampaj(ime);

function korisnik(ime, prezime, godine) {
  console.log(
    `Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina.`
  );
}

let name1 = "Nikola";
let name2 = `Glavonjic`;

korisnik(name1, name2, 29);
korisnik("Ivan", "Glavonjic", 26);

/////////////////////////////////////////////////////////////////////////////////////

let x = 1;
let y = 7;

function zbirDvaBroja(broj1, broj2) {
  let zbir = broj1 + broj2;
  console.log(zbir);
}

zbirDvaBroja(x, y);

/////////////////////////////////////////////////////////////////////////////////////

function vratiZbirDvaBroja(a, b) {
  let zbir = a + b;
  console.log(`Vrati zbir od ${a} + ${b} = ${zbir}`);
  return zbir;
}

let rez1 = vratiZbirDvaBroja(5, 6);
let rez2 = vratiZbirDvaBroja(16, 15);
let rez3 = vratiZbirDvaBroja(rez1, rez2);
let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));

/////////////////////////////////////////////////////////////////////////////////////

function voda(temperatura) {
  console.log(`Uneli ste temperaturu od ${temperatura} stepeni celzijusa.`);

  if (temperatura <= 0) {
    console.log("Voda je u cvrstom agregatnom stanju.");
  } else if (temperatura >= 100) {
    console.log("Voda je u gasovitom agregatnom stanju");
  } else {
    console.log("Voda je u tecnom agregatnom stanju");
  }
}

voda(2);
voda(100);

// 2.Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racunaj(br1, br2, operacija) {
  if (operacija == "+") {
    let rezultat = br1 + br2;
    console.log(rezultat);
  } else if (operacija == "-") {
    let rezultat = br1 - br2;
    console.log(rezultat);
  } else if (operacija == "*") {
    let rezultat = br1 * br2;
    console.log(rezultat);
  } else if (operacija == "/") {
    if (br2 == 0) {
      console.log("Deljenje nulom nije moguce.");
    } else {
      let rezultat = br1 / br2;
      console.log(rezultat);
    }
  } else {
    console.log("Pogresan unos");
  }
}

racunaj(5, 10, "-");

/////////////////////////////////////////////////////////////////////////////////////
//DRUGI NACIN

// function zbir(a,b){
//     console.log(`Zbir brojeva ${a} i ${b} je ${a+b}`);
// }

// let rez11 = zbir(3,4);

// function razlika(a,b){
//     let razlika = a-b;
//     if(razlika >= 0){
//         console.log(`Razlika izmedju brojeva ${a} i ${b} je ${razlika}`);
//     }else{
//         console.log(`Razlika izmedju brojeva ${a} i ${b} je ${-razlika}`);
//     }

// }

// let rez22 = razlika(8,15);

// function proizvod (a,b){
//     console.log(`Proizvod brojeva ${a} i ${b} je ${a*b}`);
// }

// let rez33 = proizvod(6,8);

// function kolicnik(a,b){
//     if(a>b){
//         console.log(`Kolicnik brojeva ${a} i ${b} je ${a/b}`);
//     }else{
//         console.log(`Kolicnik brojeva ${b} i ${a} je ${b/a}`);
//     }
// }

// let rez44 = kolicnik(15, 150);

/////////////////////////////////////////////////////////////////////////////////////

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

let n = neparan(13);
console.log(n);

/////////////////////////////////////////////////////////////////////////////////////
// 2. NACIN

function neparan1(n) {
  let rez = true;
  if (n % 2 == 0) {
    rez = false;
  }
  return rez;
}

n = neparan1(13);
console.log(n);

/////////////////////////////////////////////////////////////////////////////////////
// 3. NACIN
function neparan3(n) {
  return n % 2 != 0;
}
let nep3 = neparan3(162);
console.log(nep3);

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
  if (br1 > br2) {
    return br1;
  } else if (br2 > br1) {
    return br2;
  } else if (br1 == br2) {
    console.log("Brojevi su jednaki");
  } else {
    console.log("Pogresan unos");
  }
}

let max2 = maks2(15, "sa");
console.log(max2);


///////////////////////////////////////////////////////////////////
// maks4 napravljeno od maks2

function maks4_nikola(a,b,c,d){
    let max1 = maks2(a,b); //vrati mi veci od a i b
    let max2 = maks2(c,d);// vrati mi veci od c i d
    let max3 = maks2(max1,max2);
    return max3;
}

let maximum4 = maks4_nikola(11,2,24,4);
console.log(maximum4);


//maks4 na treci nacin

function maks5_nikola(a,b,c,d){
    let max3 = maks2(maks2(a,b),maks2(c,d));
    return max3;
}

let maximum5 = maks5_nikola(21,55,2,67);
console.log(maximum5);






function maks4(br1, br2, br3, br4) {
  if (br1 > br2 && br1 > br3 && br1 > br4) {
    return br1;
  } else if (br4 > br2 && br4 > br3 && br4 > br1) {
    return br4;
  } else if (br3 > br2 && br3 > br4 && br3 > br1) {
    return br3;
  } else if (br2 > br4 && br2 > br3 && br2 > br1) {
    return br2;
  } else if (
    br1 == br2 ||
    br1 == br3 ||
    br1 == br4 ||
    br2 == br3 ||
    br2 == br4 ||
    br3 == br4
  ) {
    console.log("Neki brojevi su jednaki");
  } else {
    console.log("Pogresan unos");
  }
}

let max4 = maks4(111, 111, 13, 4);
console.log(max4);

// 5. ZADATAK Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(putanja) {
  document.body.innerHTML += `<img style="margin-left:167px" src="${putanja}" alt="${putanja}nije ucitana" height="250">`;
}



slika(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Capitals-Maple_Leafs_%2834075134291%29.jpg/1200px-Capitals-Maple_Leafs_%2834075134291%29.jpg"
);

// 6. ZADATAK Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boja(boja) {
  document.body.innerHTML += `<p style="color:${boja};text-align:center; font-weight: bold; font-size: 1.5em;">Hokej je najbrzi kolektivni sport na svetu</p>`;
}

boja("red");

// 7. ZADATAK Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let date = new Date();                           
let vreme = date.getDay();

function sedmiDan(n) {
    n = n % 7;
  switch (n) {
    case 0:
      console.log("Danas je nedelja");
      break;
    case 1:
      console.log("Danas je ponedeljak");
      break;
    case 2:
      console.log("Danas je utorak");
      break;
    case 3:
      console.log("Danas je sreda");
      break;
    case 4:
      console.log("Danas je cetvrtak");
      break;
    case 5:
      console.log("Danas je petak");
      break;
    case 6:
      console.log("Danas je subota");
      break;
    default:
      console.log("Pogresan unos");
  }
}

sedmiDan(vreme);

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m

function deljivSaTri(n, m) {
  let brojac = 0;
  for (i = n; i <= m; i++) {
    if (i % 3 == 0) {
      brojac++;
    }
  }
  console.log(`Od ${n} do ${m} ima ${brojac} brojeva deljivih sa 3.`);
}

deljivSaTri(10, 30);

// 9. ZADATAK Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
  let suma = 0;
  for (i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
}

let sumaBrojeva = sumiraj(2, 5);
console.log(sumaBrojeva);

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
  for(i=n; i<=m; i++){
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

fontSize("22", "blue", 50);

// 14. ZADATAK Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

function ispis(n) {
  for (i = 1; i <= 5; i++) {
    document.body.innerHTML += `<p style="font-size:${i*10}px">Neki tekst ispisan ${n++} puta. </p>`;
  }
}

let font = ispis(1);

// 15. ZADATAK Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.. 

function raise(n,a,d){
    let zbir = 0;
    for(i=1; i<=n; i++){
        zbir = zbir + a;
        a = a + d*i-1;
    }
    return zbir;
}

console.log(`Nakon 3 meseca ukupna zarada ce biti ${raise(3,100,30)}`);


// 15. zadatak

function praksa (n, a, d){
    let suma = a;

    for(let i =1; i<=n; i++){
        if(i>=2){
            suma += a+d;
        }
        
        
    }
    return suma;
}

let p = praksa(1,50000,5000);

console.log(p);

// JELENA

n = 3;
let a = 5000;
let d = 200;

let uupno = a*n + d*(n-1); //plate+povisice
let ukupno1 = n*(a+d) -d; // plate sa povisicama - 1. mesec kada nema povisice
let ukupno2 = a+ (n-1)*(a+d); //plata za 1. mesec + plata za preostalih n-1 meseci


//1. mesec 5000
//2. mesec 5000 + 200
//3. mesec 5000 + 200


// 16. ZADATAK

// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s


function vreme(t, p, n) {
  let čekaj = n + p - t;
  if (p > t || t >= p + n) {
      console.log(`Burke samo piči`);
  }
  else {
      console.log(`Burke treba da krene kroz ${čekaj} sec da ne bi čekao most`);
  }
}
vreme(11, 10, 160);