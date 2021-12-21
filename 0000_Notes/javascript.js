////////////// FUNKCIJA ZA SUMU //////////////////

let suma = niz =>{
    let suma = 0;
    for(let i=0; i<niz.length; i++){
    suma += niz[i];
}
    return suma;
}



// FUNKCIJA ZA PROIZVOD

let prozivod = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++){
        proizvod *= niz[i];
    }
    return proizvod;
}


// FUNKCIJA ZA ARITMETICKU SREDINU NIZA

let arSr = niz => {
    let suma = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
        br++;
    }
    return (br !=0) ? suma / br : 0;
}
console.log(arSr(niz));

// 2. NACIN

let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj :0;
}
console.log(arSr2(niz));


// 3. NACIN
let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(niz));



// STEFANOV NACIN FUNKCIJA ZA MAKS VREDNOST

let maxVrednost = niz => {
    let max = niz[0];
    for(let i = 1; i <niz.length; i++){
        if(max < niz[i]){
            max = niz[i];
        }
    }
    return max;
}

console.log(maxVrednost(niz));