// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10). Kreirati niz od barem 4 studenta. Napisati sledeće arrow funkcije:


let student1 = {
    ime: "Nikola",
    prezime: "Glavonjic",
    godina: 4,
    ocene: [7,8,9,9,8],
    prosek(){
        let sum=0;
        this.ocene.forEach(o=>{
            sum+=o;
        });
        return sum/this.ocene.length;
    }
};

console.log(student1.prosek());


let student2 = {
    ime: "Ivan",
    prezime: "Glavonjic",
    godina: 2,
    ocene: [10,9,9,10,10,10,10],
    prosek(){
        let sum=0;
        this.ocene.forEach(o=>{
            sum+=o;
        });
        return sum/this.ocene.length;
    }
};

let student3 = {
    ime: "Sandra",
    prezime: "Glavonjic",
    godina: 5,
    ocene: [7,7,10,9,8],
    prosek(){
        let sum=0;
        this.ocene.forEach(o=>{
            sum+=o;
        });
        return sum/this.ocene.length;
    }
};

let student4 = {
    ime: "Petar",
    prezime: "Petrovic",
    godina: 1,
    ocene: [6,7,8,9,10],
    prosek(){
        let sum=0;
        this.ocene.forEach(o=>{
            sum+=o;
        });
        return sum/this.ocene.length;
    }
};

let student5 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    godina: 4,
    ocene: [6,7,6,6,6],
    prosek(){
        let sum=0;
        this.ocene.forEach(o=>{
            sum+=o;
        });
        return sum/this.ocene.length;
    }
};

let fax = [student1,student2,student3,student4,student5];


//1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let studentNaSlovo = (arr, s) =>{
    arr.forEach(sl=>{
        if(sl.prezime.indexOf(s) == 0){
           console.log(`${sl.ime} ${sl.prezime}`);
           
        }
    });
};

studentNaSlovo(fax, "J");



// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let imePrezime = (arr,ime,prezime) =>{
    arr.forEach(s=>{
        if(s.ime == ime && s.prezime == prezime){
            console.log(`${s.ime} ${s.prezime}`);
        }
        else{
            console.log('Takav student ne postoji');
        }
    });
};

imePrezime(fax,"Ivan", "I")


// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.


let godinaStudija = (arr, god) =>{
    let br = 0;
    arr.forEach(s=>{
        if(s.godina == god){
            br++;
        }
    });
    return br;
};

console.log(godinaStudija(fax,5));


// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let maxPros = arr =>{
    let max = arr[0].prosek();
    arr.forEach(s=>{
        if(s.prosek() > max){
            max=s.prosek();
        }
    });
    arr.forEach(s2=>{
        if(s2.prosek() == max){
            console.log(`${s2.ime} ${s2.prezime} ${s2.prosek()}`);
        }
    });
};
maxPros(fax);
// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosecan = arr =>{
    
    arr.forEach(s=>{
        let br = 0;
        s.ocene.forEach(o=>{
            if(o== 6 || o==10){
                br++;
            }
            
        })
        if(br ==0){
            console.log(s.ime);
        }
    });

}

prosecan(fax)

// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. 

let extra = arr =>{
    arr.forEach(s=>{
        let br9 =0;
        let br10 =0;
        if(s.ocene.indexOf(6) == -1 && s.ocene.indexOf(7) == -1 && s.ocene.indexOf(8) == -1){
            s.ocene.forEach(o=>{
                if(o == 9){
                    br9 ++;
                }
                if(o ==10){
                    br10++;
                }
            })
            if(br10/br9 >=2){
                console.log(s.ime);
        }}

})};

extra(fax);

// Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.


// Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.



// Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.



// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.



// Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.