import Auto from "./auto.js";

let a1 = new Auto("Ferrari", "Red", false,2);

// nakon ovooga, a1 je objekat koji ima sledeca polja
    //  a1._marka (vrednost ovog polja je "Ferrari")
    //  a2._boja (vrednost ovog polja je "Red")
    //  a3._imaKrov (vrednost ovog polja je false)
console.log(a1);
console.log(a1._marka);
console.log(a1._boja);
console.log(a1._imaKrov);

let a2 = new Auto("Yugo", "Black", true, 5);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Land Rover", "White", true,5);
console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3.brojVrata = 5;
console.log(a3);

let a4 = new Auto("      ", undefined, true,5);
a4._imakrov = false;
console.log(a4);


a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(365);
a2.vozi(120);
a3.vozi(200);
a4.vozi(140);

// U klasi pisemo polja i metode
// SVa polja klase se definisu u constructor
// Mozemo dodavati proizvoljne metode
// SVi objekti klase imace polja i metode navedene u klasi

a2._brojVrata = 4; // poljima se pristupa bez zagrada
a2.sviraj(); // Metode imaju zagrade, a izmedju zagrada se dodaju parametri

// a2._marka = "    Audi A4";
// a2.postaviMarku("    Audi A4");

// console.log(a2.dohvatiMarku());


// POZIVANJE SETTERA

a2.marka = "    Audi A4";



a2.boja = "Bye";
a2.brojVrata = 3;
a2.imaKrov = false;
console.log(a2);


a2.stampaj();


               

