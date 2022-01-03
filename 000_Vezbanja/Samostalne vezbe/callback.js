// 3 NIZA SA BROJEVIMA 3 FJE ZA SABIRANJE ZA MNOZENJE I ODUZIMANJE 


let niz1= [1,2,3,4,5];
let niz2= [-1,-2,-3,-4,-5];
let niz3= [7,2,44,-10,0];


let zbir = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma+= el;
    });
    return suma;
};


let proizvod = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod*=el;
    });
    return proizvod; 
};

let razlika = niz => {
    let razlika = 0;
    niz.forEach(el => {
        razlika -= el;
    });
    return razlika;
};

let digitron = (zin, fja) => fja(zin);

console.log(digitron(niz1, zbir));






// function digitron(zin, funkcija){  
//     let zin = "";
//     funkcija(zin);
//     };

// console.log(digitron(niz1,razlika));








let arr1 = [1,2,3,4,50];

let sab = niz => {
    let suma = 0;
    niz.forEach(el =>{
        suma+= el;
    });
    return suma;
};


function type (content){
    document.body.innerHTML += `${content}`;
};

let calc = (content, type) => type(content);  

console.log(calc(arr1,sab));
