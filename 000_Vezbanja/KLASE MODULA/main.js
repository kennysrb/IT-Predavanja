//Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godina.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.



console.log('1.Zadatak');
/*

import Datum from "./moduli/datum.js";

let datum1 = new Datum(11,10,1991);
// console.log(datum1);

let datum2 = new Datum(11,1,1995);
// console.log(datum2);

let ranijiDatum = (d1,d2) =>{
    if(d1.godina > d2.godina){
        console.log(d2);        
    }else if(d2.godina > d1.godina){
        console.log(d1);
    }else if(d1.mesec > d2.mesec){
        console.log(d2);
    }else if(d2.mesec > d1.mesec){
        console.log(d1);
    }else if(d1.dan > d2.dan){
        console.log(d2);
    }else if(d2.dan >d1.dan){
        console.log(d1);
    }else{
        console.log('Datumi su jebeno jednaki');
        
    }
};

ranijiDatum(datum1,datum2);

*/

// Kreirati klasu Radnik koja sadrži dva atributa - ime i plata ranika.
// Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
console.log('2.Zadatak');

import Radnik from "./moduli/radnik.js";

let radnik1 = new Radnik("Dragan", 100);
let radnik2 = new Radnik("Stojan", 180);
let radnik3 = new Radnik("Sale", 4400);
let radnik4 = new Radnik("Mirko", 175);

//4400

let radnici = [radnik1,radnik2,radnik3,radnik4];

function maksPlata (arr){
    let maks = arr[0].plata;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].plata > maks){
            maks = arr[i].plata;
        }
    };
    for(let i= 0; i < arr.length; i++){
        if(arr[i].plata == maks){
            console.log(`Najvecu tupla ima ${arr[i].ime} (${arr[i].plata} eura.)`);
        }
    };
};

maksPlata(radnici);