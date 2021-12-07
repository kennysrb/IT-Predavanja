// PRVA VEZBA

let a = 12; //SAT
let b = 58; //MINUT

c = a * 60 + b; // VREME U MINUTIMA

console.log("Od ponoci je proslo " + c + " minuta."); 

// DRUGA VEZBA

let d = (c - b)/60 //SATI PROTEKLI OD PONOCI

console.log(d);

let e = c - a * 60;
console.log(e);



console.log("Vreme proteklo od ponoci je bilo: " + d + ":" + e);


// TRECA VEZBA

let r = 1751; //RACUN
let n = 2000; //NOVCANICA

let k = n % r; //KUSUR
console.log("Racun je: " + r + " Uplata je: " + n + " Kusur je: " + k);


// CETVRTA VEZBA

a = 15;
b = 3;
c = a * 60 + b;
 console.log(c);

 d = (c - b)/60;
 e = c - a * 60;
 console.log(d + ":" + e);


//SESTA VEZBA DINARI U EURE

 let eur = 1782;
 let kursEur = 117.5782;
 let dinara = eur * kursEur;
 console.log(`Nakon promene imamo :${dinara} dinara`);

 let eura = dinara / 117.5;
 console.log(`Nakon promene dinara u eure imamo: ${eura} eura.`);
 

// SEDMA VEZBA EUR to RSD to USD ,   USD to RSD to EUR

let kursDol = 104.1;

let dolara = dinara / kursDol;
console.log(`Nakon promene ${eur} EUR u RSD, pa RSD u USD imamo :${dolara}USD`);

let eurDol = 0.98;

let dolDin = dolara * kursDol;
console.log(dolDin);

let dinEur = dolDin / kursEur;
console.log(`Nakon promene ${dolara}USD u RSD, pa RSD u EUR imamo :${dinEur}`);


// KURS EUR DOL

let kursDolEur = 1.12;  // 1 EUR = 1.12 USD
let dolEur = dolara / kursDolEur;
console.log(`Nakon razmene direktne razmene ${dolara}USD u EUR po kursu od 1.12 USD za EUR, imamo: ${dolEur}`);



 
// STEFANOV NACIN




// Zadatk 1

let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");

// let doPonoci = 24 * 60 - odPonoci;
let doPonoci = 24 * 60 - (s * 60 + m);
console.log("Do ponoci je ostalo: " + odPonoci + " minuta");

// Zadatak 2

//Prvi nacin

let minOdPonoci = 921;
// minOdPonoci =  * 60 + minSada
//minOdPonoci - minSada = _* 60
// (minOdPonoci - minSada)/60 = _

let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

// Drugi nacin
// console.log(minOdPonoci / 60); // deljeneje vraca relan br
// console.log(Math.floor(minOdPonoci / 60)); // ceo broj manji ili veci od rezultata
// console.log(Math.ceil(minOdPonoci / 60)); // ceo broj manji ili veci od rezultata
// console.log(Math.round(minOdPonoci / 60)); // coe broj rezultata zaokruzuje

let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);




// ZADATAK 6

let novacEvri = 200;
let kursEvri = 117.5782;

    let evriUDinare = novacEvri * kursEvri;
    console.log(`Imamo ${evriUDinare} dinara nakon razmene`);
    
let novacDinari = 10000;
letDinariUEvre = novacDinari / kursEvri;
console.log(`Imamo ${letDinariUEvre} evra nakon razmene.`);


// ZADATK 8

let kursDolari = 104.7281;
let k1 = novacEvri * kursEvri;
let k2 = k1 / kursDolari;

console.log(`Imamo ${k2} dolara nakon razmene`);


// Trenutno vreme i datum
let datum = new Date(); //datum postaje objekat koji sadrzi inf o trenutnom datumu i vremenu


let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUMesecu = datum.getDate(); //datum u mesecu
let danUNedelji = datum.getDay(); //dan u nedelji

console.log(`Danas je ${datumUMesecu}.${mesec}.${godina}`);
console.log(danUNedelji);


let sekunde = datum.getSeconds();
document.write(sekunde);





