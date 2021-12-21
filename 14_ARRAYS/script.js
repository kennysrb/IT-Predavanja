let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);

cars[0] = "Peugeot";
console.log(cars);

let numbers = [6, -7, 2, 0, 5.5, -3.14];
console.log(numbers);


let random = [10, "Nikola", -8.8, true, [1,2,3]];


console.log(random);
console.log(random[4][1]);
console.log(typeof random[0]);

for(let i =0; i < cars.length; i++){
    console.log(cars[i]);
}



// for(let i =0; i < random.length; i++){
//     if(typeof i == )
//     console.log(cars[i]);
// }




// 2. ZADATAK

let niz = [1,8,11,5,2];
let niz2 = [6, -9, 0, 0,3];
let niz3 = [1,4];

let sumaElemenata = niz =>{
    let suma = 0;
    for(i=0; i<niz.length; i++){
    suma += niz[i];
}
    return suma;
}


console.log(`Suma elemenata prvog niza je ${sumaElemenata(niz)}`);
console.log(`suma elemenata prvog niza je ${sumaElemenata(niz2)}`);
console.log(`suma elemenata prvog niza je ${sumaElemenata(niz3)}`);

// 3. ZADATAK
let proizvod = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++){
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvod(niz));


// 4. ZADATAK

// 1. NACIN

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


/////// 4.2. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            suma += niz[i];
            broj++;
        }
    }
    return (broj == 0) ? 0 : suma / broj;
}

console.log(`Aritmeticka sredina parnih brojeva niza je ${arSrParnih(niz)}`);




// 5. ZADATAK Odrediti maksimalnu vrednost u celobrojnom nizu.


niz = [333, -6, -2, 56, 32, 95, 89, 32];
let largest = niz[0];

for (let i = 0; i < niz.length; i++) {
    if (largest < niz[i] ) {
        largest = niz[i];
    }
}
console.log(largest);


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




// 6. ZADATAK Odrediti minimalnuu vrednost u celobrojnom nizu.

let smallest = niz[0];
for(let i = 0; i < niz.length; i++){
    if(smallest > niz[i]){
        smallest = niz[i]
    }
}

console.log(smallest);


// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
niz = [-333, -6, -2, -9995, 889, 32];


let najveciIndex = niz =>{
    let maxIndex = 0;
    let max = niz[0];
    for(let i= 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}


console.log(najveciIndex(niz));

 // Odrediti BROJ MAX elementa celobrojnog niza.

 niz = [1,2,5,4,5];

 let najvecibr = niz =>{
    let br = 0;
    let max = niz[0];
    for(let i= 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            br++;
        }
    }
    console.log(`Postoji ${br} max elemenata`);
}

najvecibr(niz);
 


// 7. Odrediti indeks minimalnog elementa celobrojnog niza.

niz = [-333, -6, -2, 56, 32, 95, -889, 32];
smallest = niz[0];

for(let i = 0; i< niz.length; i++){
    let index;
    if(smallest > niz[i]){
        smallest = niz[i]
    }
    index = niz.indexOf(smallest);
    console.log(index);
}


// BEZ INDEXOF

niz = [-333, -6, -2, 56, 32, 95, -889, 32];

let najmanjiIndex = niz =>{
    let minIndex = 0;
    let min = niz[i];
    for(let i = 0; i < niz.length; i++){
        if(min > niz[i]){
            min = niz[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(najmanjiIndex(niz));




// 8. ZADATAK Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
  

niz = [5,2,6,2,7];
arSr = niz => {
    let suma = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
        br++;
    }
    return (br !=0) ? suma / br : 0;
}
console.log(`Ar sred je ${arSr(niz)}`);

let veciOdAr = niz => {
    let brojac = 0;
    
    for(i=0; i< niz.length; i++){
        if(niz[i] > arSr(niz)){
            brojac++;
        }
       
}
return brojac;
}
    

console.log(`Postoji ${veciOdAr(niz)} elementa vecih od ar sredine.`);



// 9. ZADATAK Izračunati zbir pozitivnih elemenata celobrojnog niza.

niz = [2,4,6,-8,-10,-12];
let zbirPoz = niz =>{
    let zbir = 0;
    for(let i = 0; i <niz.length; i++){
        if(niz[i] > 0){
            zbir += niz[i];
        }
    }
    return zbir;
}

console.log(zbirPoz(niz));



// 10. ZADATAK Odrediti broj parnih elemenata u celobrojnom nizu

niz = [2,4,6,3,2,9];
let brojPar = niz =>{
    let brojac = 0;
    for(let i = 0; i <niz.length; i++){
        if(niz[i]%2 == 0){
           brojac++;
        }
    }
    return brojac;
}

console.log(brojPar(niz));



// 16. ZADATAK Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

niz = ["plazma", "mleko", "jaja", "protein", "meso"];


let lista = niz => {
    let ul = `<ul style="background-color: #333; color: #fff; width: 20%; text-transform: capitalize; padding: 20px 20px 20px 10px;">Lista za kupovinu<ul>`;
    for(let i = 0; i <niz.length; i++){
        ul += `<li style="padding-top: 10px">${niz[i]}</li>`;
    }
    ul+= `</ul></ul>`;
    document.body.innerHTML += ul;
}

lista(niz);



// 17. ZADATAK Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.


niz = ["Nikola Glavonjic", "Miljan Pantovic", "Jelena Blecic", "Bogdan Jovanovic", "Vladan Stojic", "Bojan Ristic"];

let tabela = niz => {
    let table = `<table style = " width: 30%; margin: auto; background-color: maroon; color: white; align-items: center;";><tr><th style="font-size: 2em;
    padding: 10px;">Rocket league team <i class='fas fa-hockey-puck'></i></th></tr>`;
    for(let i = 0; i<niz.length; i++){
        if(i%2 == 0){
            table += `<tr style=" background-color: rgb(58, 29, 29);"><td style="text-align: center;
            padding: 20px;
            font-weight: bold;
            font-size: 1.2em;">${niz[i]}</td></tr>`
        }else{
            table += `<tr><td style="text-align: center;
            padding: 20px;
            font-weight: bold;
            font-size: 1.2em;">${niz[i]}</td></tr>`
        }
       
    }
    table += '</table>';
    document.body.innerHTML += table;
}

tabela(niz);





// 18. ZADATAK Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.


let adrese = ["https://upload.wikimedia.org/wikipedia/commons/f/f3/Alex_Ovechkin_2018-05-21.jpg", "https://images.thestar.com/Gp0cb7ukwbIia65V6K0vNpRBetE=/1280x1024/smart/filters:cb(1638874864961)/https://www.thestar.com/content/dam/thestar/sports/hockey/opinion/2021/12/05/inside-the-nhl-alex-ovechkins-contract-might-be-a-capital-offence-and-jason-spezzas-love-of-the-game/ovechkin.jpg", "https://sportshub.cbsistatic.com/i/r/2020/02/13/15f08284-1ecb-48a4-bb64-874726fa1879/thumbnail/1200x675/98e24b912cd094134c686f7ceee2e422/gettyimages-1193579487.jpg"]

let slike = niz => {
    for(let i =0; i < niz.length; i++){
        document.body.innerHTML += `<p style =" text-align: center;"><img width="200px" src="${niz[i]}"></p>`
    }
    
}

slike(adrese);

// 19. ZADATAK Ispisati dužinu svakog elementa u nizu stringova. 

niz = ["Hokej", "Snowboard", "Surf"];

let duzina = niz => {
    for(let i = 0; i<niz.length; i++){
        console.log(`Duzina ${i}. elementa (${niz[i]}) je ${niz[i].length} karaktera.`);   
    }
}

duzina(niz);


// 20. ZADATAK Odrediti element u nizu stringova sa najvećom dužinom.

let sportovi = ["Hokeja", "Snowboard", "Surf"];

let najvecaDuzina = niz => {
    let najS = niz[0];
    let max = niz[0];
    for (let i = 0; i<niz.length; i++){
        if(niz[i].length > max.length){
            max = niz[i];
            najS = niz[i];
        }
    }
    return najS;
    
}

console.log(`Element sa najduzom duzinom stringa je ${najvecaDuzina(sportovi)}.`);


// 21. ZADATAK Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

niz = ["55555", "4444", "333", "22", "88888888", "666666", "4444", "333", "1", "22", "999999999"];


let prosek = niz => {
    let suma = 0;
    let avg = 0;
    let brojac = 0;
    for(let i = 0; i<niz.length; i++){
        suma+= niz[i].length;
        avg = suma / niz.length; 
    }
    console.log(`Prosecna duzina stringova je ${avg} karaktera.`);  
    for(let i = 0; i<niz.length; i++){
    if(niz[i].length > avg){
        brojac++;
    }    
}
    console.log(`Postoji ${brojac} stringova duzih prosecne duzine.`);
}

prosek(niz);



// 21. sa 2 FUNKCIJE

let avg = niz  =>{
    let suma = 0;
    let br = 0;
    for(let i = 0; i <niz.length; i++){
        suma+= niz[i].length;
        br++;
    }
    return br != 0 ? suma /br : 0; 
}

let veciOdProsDuz = niz => {
    let broj = 0;
    let pd = avg(niz);
    for(let i = 0; i < niz.length; i++){
        if(niz[i].length > pd){
            broj++;
        }
    }
    console.log(`Postoji ${broj} stringova duzih prosecne duzine.`);    
}

veciOdProsDuz(niz);


// 22. ZADATAK Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 


niz = ["ajde", "za malo", "bez", "ne"];

let slovoA = niz => {
    let brojac = 0;
    for(let i = 0; i <niz.length; i++){
        if(niz[i].indexOf('a') != -1){
            brojac++;
        }
    }
    return brojac;
}

console.log(slovoA(niz));


/// Odrediti br pojavljivanja slova A u nizu stringova


niz = ["ajde", "za malo", "bez", "ne"];

let brKarakteraA = niz => {
    let brojac = 0;
    for(let i = 0; i <niz.length; i++){
        //niz[i] je string
        let element = niz[i];
        
        // prolazimo kroz sve karaktere stringa element
        for(let j = 0; j < element.length; j++){
            if(element[j] == "a"){
                brojac++;
            }
        }
    }
    return brojac;
}

console.log(brKarakteraA(niz));


// 23. ZADATAK Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.


niz = ["ajde", "za malo", "bez", "ne"];

let prvOslovoA = niz => {
    let brojac = 0;
    for(let i = 0; i <niz.length; i++){
        if(niz[i].indexOf('a') == 0 || niz[i].indexOf('A') == 0){
            brojac++;
        }
    }
    return brojac;
}

console.log(prvOslovoA(niz));


// 24. ZADATAK kombinacija 2 niza alternativno cine treci niz

let niz1 = [1,2,3,4,5,6,7,8,9];
niz2 = ["a", "b","c","d","e","d","e","i"];

let noviNiz = (niz1,niz2) => {
    let n = 0;
    let niz3 = [];
    if(niz1.length >= niz2.length){
        for(let i = 0; i <niz2.length; i++){
            niz3.push(niz1[i]);
            niz3.push(niz2[i]);
            n = niz1[i];
        }
        console.log(niz3); //test pre dodavanja preostalih elemenata
        for(let i = n; i < niz1.length; i++){
            niz3.push(niz1[i]);
        }
        console.log(niz3);
    }else{
        for(let i = 0; i <niz1.length; i++){
            niz3.push(niz1[i]);
            niz3.push(niz2[i]);
            n = niz2[i];
        }
        console.log(niz3); //test pre dodavanja preostalih elemenata
        for(let i = n; i < niz2.length; i++){
            niz3.push(niz2[i]);
        }
        console.log(niz3);
    }
}
    
noviNiz(niz1,niz2);
// i stavio sam pretpostavku da mogu da budu razlicite duzine  nizovi

// 25. ZADATAK kombinacija 2 niza cine treci niz elementi se mnoze


niz1 = [1,2,3,4,5];
niz2 = [5, 4, 3, 2, 1];

let noviNiz2 = (niz1,niz2) => {
    let niz3 = [];
    for(let i=0; i<niz1.length; i++){
        niz3.push(niz1[i]*niz2[i]);
    }
    console.log(niz3);
}

noviNiz2(niz1,niz2);

//26. ZADATAK 

niz1 = [10,20,30,40,50,60,70,80,90,100];

let nizB = niz1=>{
    let nizB = [];
    let e = 0;
    for(let i =0; i<niz1.length /2;i++){
        e = (niz1[i] + niz1[niz1.length - 1 -i]) / 2;
        nizB.push(e);
    }
    console.log(nizB);
}
console.log(niz1);

nizB(niz1);