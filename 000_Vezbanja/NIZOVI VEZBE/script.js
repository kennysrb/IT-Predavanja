// ///Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
 
// let student1 = {
//     ime: "Nikola",
//     prezime: "Glavonjic",
//     godina: 4,
//     ocene: [9,9,8,9,9,7,9],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };

// console.log(student1.prosek());



// let student2 = {
//     ime: "Ivan",
//     prezime: "Glavonjic",
//     godina: 4,
//     ocene: [9,10,10,9,10,10,10,9,10],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };

// console.log(student2.prosek());

// let student3 = {
//     ime: "Sandra",
//     prezime: "Glavonjic",
//     godina: 3,
//     ocene: [10,10,10,10,10,10,10,10,10],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };

// console.log(student3.prosek());

// let student4 = {
//     ime: "Nemanja",
//     prezime: "Vajagic",
//     godina: 2,
//     ocene: [6,7,6,6,6,7],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };

// let student5 = {
//     ime: "Crni",
//     prezime: "Gruja",
//     godina: 2,
//     ocene: [6,7,6,8,6,6,7],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };
// let student6 = {
//     ime: "Milos",
//     prezime: "Obilic",
//     godina: 2,
//     ocene: [6,7,6,8,6,6,7],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };
// let student7 = {
//     ime: "Marko",
//     prezime: "Kraljevic",
//     godina: 5,
//     ocene: [8,7,8,9,6],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };
// let student8 = {
//     ime: "Sinbad",
//     prezime: "Moreplovac",
//     godina: 2,
//     ocene: [6,7,6,8,6,6,7],
//     prosek: function(){
//         let s = 0;
//         let br = 0;
//         this.ocene.forEach(el=>{
//             s+=el;
//             br++;
//         });
//         return s/br;
//     },
// };





// let fakultet = [student1,student2,student3,student4,student5,student6,student7,student8];

// //1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

// let studentNaSlovo = (arr, a) => {
//     let slovo = a;
//     let slovo2 = slovo.toUpperCase();
//     console.log(`Imena studenata na slovo ${slovo2}:`);
//     arr.forEach(el=>{
//         if(el.prezime.indexOf(slovo2) == 0){
//             console.log(`${el.prezime} ${el.ime}`);
//         };
//     });
// };
// studentNaSlovo(fakultet, "G");

// //2. Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

// let imeStudenta = (arr, ime, prezime) => {
//     arr.forEach(el=>{
//         if(el.ime == ime && el.prezime == prezime){
//             console.log(`${el.prezime} ${el.ime}`); 
//         };
//     });
// };

// imeStudenta(fakultet, "Nikola", "Glavonjic");

// //3. Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

// let godina = (arr, god) => {
//     console.log(`Studenti ${god}. godine su:`);
//     let br = 0;
//     arr.forEach(el=>{
//         if(el.godina == god){
//             br++;
//             console.log(`${el.ime} ${el.prezime}`); 
//         };
//     });
//     console.log(`Broj studenata na ${god}. godini je: ${br}`);
    
// };
// godina(fakultet, 5);

// //4. Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

// let najbolji = arr => { 
//     let best = arr[0].prosek();
//     for(let i = 1; i< arr.length; i++){
//         if(best < arr[i].prosek()){
//             best = arr[i].prosek();
//             console.log(`Najbolji student je ${arr[i].ime} ${arr[i].prezime}`);
//         }
//     };
// };

// najbolji(fakultet);

// // 5. Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

// let prosecan = arr => {
//     console.log(`Prosecni studenti su:`);
//     arr.forEach(s=>{
//         if (s.ocene.indexOf(10) == -1 && s.ocene.indexOf(6) == -1) {
//             console.log(`${s.ime} ${s.prezime}`)
//         }
//     }) 
// };

// prosecan(fakultet);

// // 6. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

// let ekstra = arr => {
//     arr.forEach(s=>{
//         let br9 = 0;
//         let br10 = 0;
//         if(s.ocene.indexOf(6) == -1 && s.ocene.indexOf(7) == -1 && s.ocene.indexOf(8) == -1){
//             console.log(`Extra stundet:`);
//             s.ocene.forEach(o=>{
//                 if(o == 9){
//                     br9++;
//                 }
//                 if(o == 10){
//                     br10++;
//                 }
//             })
//             if(br10/br9 >= 2){
//                 console.log(`${s.ime} ${s.prezime}`);    
//             }
//         }
//     });
// };

// ekstra(fakultet);

// // 7. Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

// let kidanje = arr =>{
//     arr.forEach(s=>{
//         let br9 = 0;
//         if(s.ocene.indexOf(6) == -1 && s.ocene.indexOf(7) == -1 && s.ocene.indexOf(8) == -1){
//             s.ocene.forEach(o=>{
//                 if(o==9){
//                     br9++;
//                 }
//             })
//         if(br9 < s.godina){
//             console.log(`Student ${s.ime} ${s.prezime} kida.`);
            
//         }
//         }
//     })
// };

// kidanje(fakultet);

// // 8. Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.


// let razbija = arr =>{
//     arr.forEach(s=>{
//         let br10 = 0;
//         if(s.ocene.indexOf(6) == -1 && s.ocene.indexOf(7) == -1 && s.ocene.indexOf(8) == -1 && s.ocene.indexOf(9) == -1){
//             s.ocene.forEach(o=>{
//                 br10++;
//             });
//             if(br10 >= 5*(s.godina -1) && s.godina > 1){
//                 console.log(`Student ${s.ime} ${s.prezime} razbija.`);
//             }
//         };
//     })
// }

// razbija(fakultet);

// // 9. Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

// let aljkav = arr => {
//     console.log(`Aljkavi studenti:`);
//     arr.forEach(s=>{
//         if(s.ocene.indexOf(8) == -1 && s.ocene.indexOf(9) == -1 && s.ocene.indexOf(10) == -1){
//             console.log(`${s.ime} ${s.prezime}`);
            
//         } 
//     });
// };

// aljkav(fakultet);

// // 10. Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

// let bruka = arr =>{
//     console.log(`Studenti koji se brukaju:`);
//     arr.forEach(s=>{
//         if(s.godina > 1 && s.ocene.length < 3*(s.godina - 1) && s.ocene.indexOf(8) == -1 && s.ocene.indexOf(9) == -1 && s.ocene.indexOf(10) == -1){
//             console.log(s.ime + " " + s.prezime);
//         }
//     });
// };

// bruka(fakultet);



////////////////////////////////// 2. ZADATAK //////////////////////////////////////

let polaznik1 = {
    ime: "Uspavana",
    prezime: "Lepotica",
    ocena: 90
};

let polaznik2 = {
    ime: "Sinbad",
    prezime: "Moreplovac",
    ocena: 100
};

let polaznik3 = {
    ime: "Mala",
    prezime: "Sirena",
    ocena: 80
};

let polaznik4 = {
    ime: "Petar",
    prezime: "Pan",
    ocena: 70
};


let polaznik5 = {
    ime: "Skubi",
    prezime: "Du",
    ocena: 70
};


let polaznik6 = {
    ime: "Tasmanijski",
    prezime: "Djavo",
    ocena: 70
};


let polaznik7 = {
    ime: "Paja",
    prezime: "Patak",
    ocena: 70
};


let polaznik8 = {
    ime: "Dusko",
    prezime: "Dugousko",
    ocena: 70
};

let polaznik9 = {
    ime: "Patak",
    prezime: "Daca",
    ocena: 70
};

let polaznik10 = {
    ime: "Pera",
    prezime: "Detlic",
    ocena: 70
};

let polaznik11 = {
    ime: "Mini",
    prezime: "Maus",
    ocena: 70
};

let polaznik12 = {
    ime: "Miki",
    prezime: "Maus",
    ocena: 50
};

let kurs1 = {
    ime: "Razvoj veb stranica: JS",
    grad: "Beograd",
    polaznici: [polaznik1,polaznik2,polaznik3,polaznik4],
    brojPolaznika(){
        let broj = this.polaznici.length;
        return broj;
    },
    prosek(){
        let sum =0;
        this.polaznici.forEach(p=>{
            sum+= p.ocena;
        })
        return sum / this.brojPolaznika();
    },
    uspesanKurs(){
        for(let i=0;i<this.polaznici.length;i++){
            if(this.polaznici[i].ocena < 66){
                return false;
            }
        }
        return true;
    }
};


let kurs2 = {
    ime: "Testiranje softvera: QA",
    grad: "Beograd",
    polaznici: [polaznik4,polaznik5,polaznik6],
    brojPolaznika: function(){
        let broj = this.polaznici.length;
        return broj;
    },
    prosek(){
        let sum =0;
        this.polaznici.forEach(p=>{
            sum+= p.ocena;
        })
        return sum / this.brojPolaznika();
    },
    uspesanKurs(){
        for(let i=0;i<this.polaznici.length;i++){
            if(this.polaznici[i].ocena < 66){
                return false;
            }
        }
        return true;
    }
};

let kurs3 = {
    ime: "Razvoj veb stranica: PHP",
    grad: "Novi Sad",
    polaznici: [polaznik7,polaznik8,polaznik9],
    brojPolaznika: function(){
        let broj = this.polaznici.length;
        return broj;
    },
    prosek(){
        let sum =0;
        this.polaznici.forEach(p=>{
            sum+= p.ocena;
        })
        return sum / this.brojPolaznika();
    },
    uspesanKurs(){
        for(let i=0;i<this.polaznici.length;i++){
            if(this.polaznici[i].ocena < 66){
                return false;
            }
        }
        return true;
    }
};

let kurs4 = {
    ime: "Osnove programiranja: Java",
    grad: "Beograd",
    polaznici: [polaznik10,polaznik11,polaznik12],
    brojPolaznika: function(){
        let broj = this.polaznici.length;
        return broj;
    },
    prosek(){
        let sum =0;
        this.polaznici.forEach(p=>{
            sum+= p.ocena;
        })
        return sum / this.brojPolaznika();
    },
    uspesanKurs(){
        for(let i=0;i<this.polaznici.length;i++){
            if(this.polaznici[i].ocena < 66){
                return false;
            }
        }
        return true;
    }
};

let kursevi = [kurs1,kurs2,kurs3,kurs4];

// 1. Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let brojKurseva = (arr,grad) =>{
    let br=0;
    arr.forEach(el => {
        if(el.grad == grad){
            br++;
        }
    });
    return br;
};

console.log(brojKurseva(kursevi,"Nis"));

// 2. Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv

let brojKursevaPoImenu = (arr,ime) =>{
    let br=0;
    arr.forEach(el=>{
        if(el.ime.includes(ime)){
            br++;
        }
    });
    return br;
};

console.log(brojKursevaPoImenu(kursevi,"Razvoj"));

// 3. Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let maxPolaznika = arr => {
    let max =0;
    arr.forEach(k=>{
        if(k.brojPolaznika() > max){
            max = k.brojPolaznika();
        };
    })
    arr.forEach(k=>{
        if(k.brojPolaznika()== max){
            console.log(`${k.ime} grad: ${k.grad}`);
        }
    });
};


// console.log(kurs1.brojPolaznika());
maxPolaznika(kursevi);


// 4. Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let imePolaznika = (arr, prezime)=>{
    arr.forEach(kurs=>{
        kurs.polaznici.forEach(p=>{
            if(p.prezime.includes(prezime)){
                console.log(`${p.ime} ${p.prezime} grad: ${kurs.grad} kursurs: ${kurs.ime}`);
            }
        })
    });
};

imePolaznika(kursevi,"Maus");

//5. Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

let best = arr =>{
    let max = arr[0].prosek();
    arr.forEach(k=>{
        if(k.prosek()>max){
            max = k.prosek();
        }
    });
    arr.forEach(k=>{
        if(k.prosek() ==max){
            console.log(`${k.ime} grad ${k.grad}`);
            
        }
    })
};

best(kursevi);

// 6. Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let uspe = arr =>{
    let br =0;
    arr.forEach(k=>{
        if(k.uspesanKurs()){
            br++;
        }
    });
    return br;
};

console.log(uspe(kursevi));


// 7. Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

let gradKida = (arr,grad) =>{
    let br1 =0;
    let br2 = 0;
    arr.forEach(k=>{
        if(k.grad == grad){
            br1++;
        if(k.uspesanKurs()){
            br2++;    
        }
        }
    });    
    return(br1===br2);
};


console.log(gradKida(kursevi, "Beograd"));


