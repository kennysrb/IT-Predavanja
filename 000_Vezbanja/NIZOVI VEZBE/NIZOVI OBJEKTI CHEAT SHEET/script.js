let objekat = {
    ime: "Nikola",
    prezime: "Glavonjic",
    niz: [polaznik1,polaznik2,polaznik3,polaznik4],



    brojNiza(){
        let broj = this.IMENIZA.length; /// IMENIZA 
        return broj;
    },
    prosek(){
        let sum =0;
        this.polaznici.forEach(p=>{
            sum+= p.ocena;
        })
        return sum / this.IMENIZA();   /// IMENIZA
    },
    suma(){
        let sum = 0;
        this.niz.forEach(el=>{
            sum+= el;
        })
        return sum;
    },
};


let minimum = arr =>{      //NEKIPARAMETAR
    let min = arr[0].NEKIPARAMETAR.length;
    arr.forEach(i=>{
        if(i.NEKIPARAMETAR.length < min){
            min = i.NEKIPARAMETAR.length;
        }
    });
    for(let i =0; i < arr.length; i++){
        if(arr[i].NEKIPARAMETAR.length == min){
            return arr[i].imePrezime;
        }
    }
};

let maximum = arr =>{      //NEKIPARAMETAR
    let max = arr[0].NEKIPARAMETAR.length;
    arr.forEach(i=>{
        if(i.NEKIPARAMETAR.length > max){
            max = i.NEKIPARAMETAR.length;
        }
    });
    for(let i =0; i < arr.length; i++){
        if(arr[i].NEKIPARAMETAR.length == max){
            return arr[i].imePrezime;
        }
    }
};

console.log(najmanjeTransfera(sportisti));



// DA LI SADRZI ODREDJEN NAZIV

let imeSadrzi = (arr,ime) =>{
    let br = 0;
    arr.forEach(i=>{
        if(i.NEKIPARAMETAR.includes(ime)){
            br++;
        }
    }  
    )
    return br;
};

console.log(imeSadrzi(NEKINIZ, "Petrovic"));



// DA LI SADRZI ODREDJEN NAZIV BEZ INCLUDES

let imeSadrzi2 = (arr, prezime)=>{
    arr.forEach(kurs=>{
        kurs.polaznici.forEach(p=>{
            if(p.prezime.includes(prezime)){
                console.log(`${p.ime} ${p.prezime} grad: ${kurs.grad} kursurs: ${kurs.ime}`);
            }
        })
    });
};

imePolaznika(kursevi,"Maus");

// .push(sad)  doda zadnji
// .pop(sad)   skine zadnji
// .unshift(asd) doda prvi
//.shift(sad)  skine prvi  
// Math.ceil(niz.length /2)
