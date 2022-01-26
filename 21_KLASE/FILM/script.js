import Film from "./film.js";

let f1 = new Film("Takanik", "Miki Maus", 1892, [8,2,9.3,7.9,10]);
let f2 = new Film("KPBK", "Sumpor", 2000, [8,9,7,6]);
let f3 = new Film("Munje", "Deda", 2001, [7,6,7,7,8,7,10,10]);

f1.stampaj();
f2.stampaj();
f3.stampaj();

let filmovi = [f1,f2,f3]
//TEST ZA SETER
f1.ime = "Ko to tamo peva?";
f1.stampaj();

//TEST ZA GETER
// console.log(f1.reziser);

//PRIKAZ SVIH FILMOVA U TABELI

let tabelica = `
<table border = 1>
    <tr>
        <th>Naziv filma:</th>
        <th>Reziser:</th>
        <th>Godina izdanja:</th>
        <th>Ocene:</th>
        <th>Prosecna</th>
    </tr>`;


filmovi.forEach(f=>{
    tabelica += `
    <tr>
        <td>${f.ime}</td>
        <td>${f.reziser}</td>
        <td>${f.godina}</td>
        <td>${f.ocene}</td>
        <td>${f.prosek()}</td>
    </tr>`
});

tabelica += `</table>`;
document.body.innerHTML = tabelica;

// Napraviti metod prosek koji vraća prosečnu ocenu 

// console.log(f1.prosek());
// console.log(f2.prosek());
// console.log(f3.prosek());


f1.stampaj();
// f1.dodajOcenu(10);
f1.stampaj();


// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

function vekFilmova(arr, v){
    arr.forEach(f=>{
        if(v == 21 && f.godina > 2000){
            console.log(f); 
        }else if(v == 20 && f.godina <= 2000 && f.godina >1900){
            console.log(f);
        }else if(v == 19 && f.godina < 2001 && f.godina >=1800){
            console.log(f); 
        }
    })
}
vekFilmova(filmovi,19);



// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

function prosecnaOcena (arr){
    let zbir =0;
    let br =0;
    let prosek = 0;
    arr.forEach(f=>{
        f.ocene.forEach(o=>{
            zbir+=o;
            br++;
        })
    })
    prosek = zbir/br;
    return prosek;
};
// console.log(prosecnaOcena(filmovi));



// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = arr =>{
    let best = arr[0];
    arr.forEach(f=>{
        if(arr[0].prosek() < f.prosek()){
            best = f;
        }
    })
    return best;
};
// console.log(najboljeOcenjeni(filmovi));
// console.log(najboljeOcenjeni(filmovi).prosek());

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.


let osrednjiFilm = arr =>{
    let globalniProsek = prosecnaOcena(arr);
    let najbliziProseku = arr[0];
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - najbliziProseku.prosek());
    arr.forEach(f=>{
        let prosecnaOcenaFilma = f.prosek();
        if(Math.abs(globalniProsek - prosecnaOcenaFilma) < najmanjaRazlikaOdProseka){
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosecnaOcenaFilma);
            najbliziProseku = f;
        }
    });
    return najbliziProseku;
};

// osrednjiFilm(filmovi).stampaj();





// let osrednjiFilm = arr =>{
//     let razlika = prosecnaOcena(arr) - arr[0].prosek();
//     let najblizi = arr[0];



//     arr.forEach(f=>{
//         // console.log(prosecnaOcena(arr) - f.prosek());
        
//         if(razlika < prosecnaOcena(arr) - f.prosek() && prosecnaOcena(arr) - f.prosek() >=0){
//             najblizi = f;
//         }
//     });
//     return najblizi;
// };
// // osrednjiFilm(filmovi);
// console.log(osrednjiFilm(filmovi));




// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

function najmanjaOcenaNajboljeg(arr){
    let best = najboljeOcenjeni(arr);
    let min = best.ocene[0];
    best.ocene.forEach(o=>{
        if(min > o){
            min = o;
        }
    });
    console.log(min);
};
najmanjaOcenaNajboljeg(filmovi);


let najFilm = arr =>{
    let najbolji = arr[0].prosek();
    let naj = arr[0];
    for(let i =0; i <arr.length; i++){
        if(najbolji < arr[i].prosek()){
            najbolji = arr[i].prosek();
            naj = arr[i];
        }
    }
    return naj;
}

//JELENIN NACIN

let najmanjaOcenaNajboljeg1 = arr =>{
    let najboljiFilm = najFilm(arr);
    let ocenaNajboljegFilma = najboljiFilm.ocene;
    let najslabijaOcena = ocenaNajboljegFilma[0];
    ocenaNajboljegFilma.forEach(o=>{
        if(o<najslabijaOcena){
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
};
console.log('test');
najmanjaOcenaNajboljeg1(filmovi);



// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

function najmanjaOcena (arr){
    let min =arr[0].ocene[0];
    arr.forEach(f=>{
        f.ocene.forEach(o=>{
            if(min>o){
                min=o;
            }
        })
    });
    return min;
};
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

function najcescaOcena1 (arr){
    let o1br = 0;
    let o2br = 0;
    let o3br = 0;
    let o4br = 0;
    let o5br = 0;
    arr.forEach(f=>{
        f.ocene.forEach(o=>{
            if(o == 1){
                o1br++;
            }else if(o ==2){
                o2br++;
            }else if(o ==3){
                o3br++;
            }else if(o ==4){
                o4br++;
            }else if(o ==5){
                o5br++;
            }
        });
    });
    let oc= [o1br,o2br,o3br,o4br,o5br];
    let naj = oc[0];
    console.log(oc);
    let br = 0;
    for(let i=0; i<oc.length; i++){
        if(naj < oc[i]){
            naj = oc[i];
            br = i;
        }
    }
    return br+1;
};
console.log(najcescaOcena1(filmovi));


//JELENIN NACIN


let f1o = [8,2,9.3,7.9,19];
let f2o = [8,9,7,6];
let f3o = [7,6,7,7,8,7];

let f = [];
f= f.concat(f1o,f2o,f3o);
console.log(f);

let sveOcene = arr =>{
    let arrSveOcene = [];
    arr.forEach(f=>{
        arrSveOcene = arrSveOcene.concat(f.ocene);
    })
    return arrSveOcene;
}

// Niz koji prosledjujemo je niz svih ocena
let najcescaOcena = arr =>{
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1;
    for(let i = 0; i<arr.length;i++){
        let tekuci = arr[i];
        let tekuciBr = 0;
        for(let j=0; j<arr.length;j++){
            if(tekuci == arr[j]){
                tekuciBr ++;
            }
        }
        if(pretpostavkaElemPojavljivanja < tekuciBr){
            pretpostavkaElemPojavljivanja = tekuciBr;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
};
let sve = sveOcene(filmovi);
console.log(najcescaOcena(sve));




// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

let iznadOcene = (o,arr) =>{
    let nizFilmova=[];
    arr.forEach(f=>{
        if(f.prosek() > o){
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
};

console.log(iznadOcene(7, filmovi));

let niz = iznadOcene(7,filmovi);
niz.forEach(f=>{
    f.stampaj();
})




// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocen


let iznadOceneNoviji = (o,arr)=>{
    let nizf =iznadOcene(o,arr);
    let noviji = nizf[0];
    nizf.forEach(e=>{
        if(noviji.godina < e.godina){
            noviji = e;
        };
    })
    console.log(noviji);
};

iznadOceneNoviji(7, filmovi)