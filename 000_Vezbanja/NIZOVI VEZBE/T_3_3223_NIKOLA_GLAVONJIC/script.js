//Napraviti objekat sportista koji od polja ima:
// ○ imePrezime (string - ime i prezime sportiste)
// ○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
// ○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)

// ➢ Napraviti niz od najmanje tri objekta (najmanje tri sportiste)

let sportista1 = {
  imePrezime: "Nikola Glavonjic",
  visina: 175,
  timovi: ["Tas", "Partizan", "Crvena Zvezda", "Bulldogs", "Srbija"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportista2 = {
  imePrezime: "Ivan Glavonjic",
  visina: 177,
  timovi: ["Tas", "Beostar", "Crvena Zvezda", "Vikings", "Srbija"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportista3 = {
  imePrezime: "Nikola Lazarevic",
  visina: 185,
  timovi: ["Beostar", "Crvena Zvezda", "Okanagan Hockey Academy", "Srbija"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportista4 = {
  imePrezime: "Jovica Rus",
  visina: 180,
  timovi: ["Crvena Zvezda", "CSKA", "Srbija"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportista5 = {
  imePrezime: "Vladan Drozdik",
  visina: 187,
  timovi: ["Vojvodina"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportista6 = {
  imePrezime: "Nemanja Vucurevic",
  visina: 179,
  timovi: ["Partizan", "Vojvodina", "Linz", "Srbija", "Olimpija"],
  ukupnoTimova() {
    return this.timovi.length;
  },
};

let sportisti = [
  sportista1,
  sportista2,
  sportista3,
  sportista4,
  sportista5,
  sportista6,
];

// 1. ZADATAK

console.log(
  "1. Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli."
);

let prosecnaVisina = (arr) => {
  let sum = 0;
  arr.forEach((s) => {
    sum += s.visina;
  });
  return sum / arr.length;
};

console.log(prosecnaVisina(sportisti));
console.log("");

// 2. ZADATAK

console.log(`Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.`);

let igraliZaTim = (arr, tim) => {
  let br = 0;
  arr.forEach((s) => {
    if (s.timovi.includes(tim)) {
      br++;
    }
  });
  return br;
};

let proveraTimova = igraliZaTim(sportisti, "Vikings");
console.log(proveraTimova);
console.log("");

// 3. ZADATAK

console.log(
  "Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista."
);

let najmanjeTransfera = (arr) => {
  let min = arr[0].ukupnoTimova(); // ukupnoTimova() je metoda koja vraca arr.timovi.length da bih poredio samo brojeve valjda smo tako rekli da manje opterecuje kod
  arr.forEach((s) => {
    if (s.ukupnoTimova() < min) {
      min = s.ukupnoTimova();
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].ukupnoTimova() == min) {
      return arr[i].imePrezime;
    }
  }
};

console.log(najmanjeTransfera(sportisti));
console.log("");

// 4. ZADATAK

// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu. Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:

// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste

//Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog igrača više nego u drugi tim.

// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba tima su u proseku iste visine”. Pozvati funkciju.

let visiTimPodela = (arr) => {
  let prvaEkipa = [];
  let br1 = 0;
  let drugaEkipa = [];
  let br2 = 0;
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      prvaEkipa.push(arr[i]);
      br1++;
    }
    for (let m = arr.length / 2; m < arr.length; m++) {
      drugaEkipa.push(arr[m]);
      br2++;
    }
  } else if (arr.length % 2 != 0) {
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      prvaEkipa.push(arr[i]);
      br1++;
    }
    for (let m = Math.ceil(arr.length / 2); m < arr.length; m++) {
      drugaEkipa.push(arr[m]);
      br2++;
    }
  }
  console.log(br1); // provera da vidim da li su se ekipe dobro raspodelile
  console.log(br2); // provera da vidim da li su se ekipe dobro raspodelile

  if (prosecnaVisina(prvaEkipa) > prosecnaVisina(drugaEkipa)) {
    console.log("Visa je prva ekipa");
  } else if (prosecnaVisina(drugaEkipa) > prosecnaVisina(prvaEkipa)) {
    console.log("Visa je druga ekipa");
  } else {
    console.log("Ekipe su podjednake visine");
  }
};

visiTimPodela(sportisti);
console.log("");

//5. ZADATAK

//Napisati funkciju trenerVidi kojoj se prosleđuje niz sportista a funkcija vraća vrednost (ceo broj) koliko sportista trener vidi. Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre prvog sportiste u vrsti(pre nultog elementa u nizu). Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.

let trenerVidi = (arr) => {
  let br = 1; // pretpostavljam da svakako vidi prvog igraca na listi
  let max = arr[0].visina;
  arr.forEach((s) => {
    if (s.visina > max) {
      max = s.visina;
      br++;
    }
  });
  return br;
};

console.log(trenerVidi(sportisti));
