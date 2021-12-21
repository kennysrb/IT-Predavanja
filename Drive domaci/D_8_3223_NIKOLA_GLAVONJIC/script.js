// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.

let niz = [1, 2, 2, 4, 5, 6, 6, 8, 2];

let sumaParni = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma += niz[i];
    }
  }
  return suma;
};

console.log(sumaParni(niz));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

niz = [13, 1, 1, 1, 31];
console.log(niz);

let neparni = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0 && niz[i] % 2 != 0) {
      niz[i] = -niz[i];
    }
  }
  console.log(niz);
};

neparni(niz);

// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.

niz[(1, 2, 3, 4, 5)];

let broj = (niz) => {
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 != 0) {
      br++;
    }
  }
  return br;
};

console.log(broj(niz));

// Pozvati sve funkcije.
// Rezultati svih funkcija treba da budu prikazani u konzoli.
