let a = [1,9,-6,5,0];

/*
function ispis(elem){
    console.log(`Element niza je ${elem}.`);
}

a.forEach(ispis); 
*/


a.forEach(elem => {
    console.log(`Element: ${elem}`);
});


// Odrediti zbir celogrojnog niza
let b = [2,2,2,2,2]
let zbir = niz =>{
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
};



// Odrediti zbir parnih brojeva niza


let zbirParnih = niz =>{
    let suma = 0;
    niz.forEach(el => {
        if(el %2 ==0){
            suma += el;
        }
        
    });
    return suma;
};


// Parni index

a = [1,9,-6,5,0];

let zbirParniIndex = niz =>{
    let suma = 0;
    niz.forEach((el, index) => { 
        if(index %2 ==0){
            suma += el;
        }
        
    });
    return suma;
};



console.log(zbir(a));
console.log(zbir(b));
console.log(zbirParnih(a));
console.log(zbirParniIndex(a));



// 3. ZADATAK Odrediti proizvod elemenata celobrojnog niza.

a = [1,9,-6,5,1];

let proizvod = niz=>{
    let proizvod = 1;
    niz.forEach((el) => {
        proizvod *= el;
    })
    return proizvod;
};

console.log(`Proizvod brojeva u nizu ${a} je ${proizvod(a)};`);


// 4. ZADATAK Odrediti srednju vrednost elemenata celobrojnog niza.

let niz = [1,2,3,4,5];

let arr = niz =>{
    let suma = 0;
    let br = 0;
    niz.forEach(el =>{
        suma+= el;
    })
    return niz.length != 0 ? suma / niz.length : 0;
};

console.log(`Aritmeticka srdina brojeva ${niz} je ${arr(niz)}`);

// 5. ZADATAK Odrediti maksimalnu vrednost u celobrojnom nizu.

niz = [1,2,33,4,5];

let max = niz => {
    let max = niz[0];
    niz.forEach((el) => { 
       if(el > max){
           max = el;
       }
        
    });
    return max;
}

console.log(`Najveci element niza ${niz} je ${max(niz)}`);

// 6. ZADATAK Odrediti minimalnu vrednost u celobrojnom nizu.

let min = niz => {
    let min = niz[0];
    niz.forEach((el) => { 
       if(el < min){
           min = el;
       }
        
    });
    return min;
}

console.log(`Najmanji element niza ${niz} je ${min(niz)}`);

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

niz = [1,2,33,4,5];

let indexMax = niz => {
        let max = niz[0];
        let iMax = 0;

        niz.forEach((el,i) => { 
           if(el > max){
               max = el;
               iMax =i;
           }
        });
        return iMax;
};




// CALLBACK

let indexMaxMin = (niz, minmax) => {
    let m = minmax(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == m) {
            index = i;
        }
    });
    return index;
};

console.log(indexMaxMin(niz, min));




////// STEFANOV NACIN


let indexMaxCallback = (niz) => {
    let max = max(niz);
    let imax;

    niz.forEach((el, i) => {
        if(el == max){
            imax = i;
        }
    });
    return imax;
}









let 


// 8. Odrediti indeks minimalnog elementa celobrojnog niza.


// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.


// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.


// 11. Odrediti broj parnih elemenata u celobrojnom nizu.