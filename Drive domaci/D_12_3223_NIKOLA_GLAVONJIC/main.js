import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga("Blago cara Radovana","Jovan Ducic",2005,723,9500);
let k2 = new Knjiga("HP","JK Rowling",2011,11,2450);
let k3 = new Knjiga("Gospodar Prstenova","Tolkin",1999,411,14170);

let knjige = [k1,k2,k3];
// Ispisati sve autore kojima je ime dugačko.
knjige.forEach(k=>{
    if(k.dugacko_ime() == true){
        console.log(k.autor);
    }
});

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
knjige.forEach(k=>{
    if(k.skupa()==true && k.obimna() ==true){
        console.log(k);
    }
});

// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga
let ukupna_cena = arr =>{
    let sum = 0;
    arr.forEach(k=>{
        sum += k.cena;
    });
    return sum;
};
console.log(ukupna_cena(knjige));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige
let prosecna_cena = arr =>{
    return (ukupna_cena(arr)/arr.length).toFixed(2);
};
console.log(prosecna_cena(knjige));

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige 
function prosecna_stranica (arr){
    let stranice=0;
    let cene =0;
    arr.forEach(k=>{
        stranice+=k.broj_strana;
        cene += k.cena;
    });
    return cene/stranice;
};
console.log(prosecna_stranica(knjige));



