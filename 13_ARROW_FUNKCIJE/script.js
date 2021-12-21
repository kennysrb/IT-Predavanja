
function suma(a,b){   // definicija funkcije
    return a + b;
}

console.log(`Suma je ${suma(4,5)}`); // poziv funkcije


// Anonimne funkcije 

let suma2 = function (a,b){
    return a+b;
}

console.log(`Suma2 je ${suma2(4,4)}`);


// ARROW FUNKCIJA skraceni zapis anonimnih funkcija

let suma3 = (a,b) => {
    return a+b;
}

console.log(`Suma3 je ${suma3(5,5)}`);


// primer 1

let hello = () =>{
    console.log('Hello world!');
}

hello();

hello = 5;
console.log(hello);

//primer 2

let pozdrav = (a,b) =>{
    console.log(`Hello ${a} ${b}`);
}


pozdrav("Nikola","Glavonjic");
pozdrav("Ivan", "Glavonjic");


// Arrow f-ja kojoj se prosledjuje ime i godine korisnika
// A ona ispisuje ime i da li j ekorisnik punoletan ili ne


let korisnik = (ime, prezime, godine) => {
    if(godine >= 18){
        let poruka = `Korsinik ${ime} ${prezime} je punoletna osoba.`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`
    }else{
        let poruka = `Korisnik ${ime} ${prezime} je maloletna osoba.`;
        document.body.innerHTML += `<p style="color:red">${poruka}</p>`
    }
}



korisnik("Nikola","Glavonjic", 29);
korisnik("Petar","Petrovic",17);



//3. ZADATAK


let neparan = (n) => {
    if(n%2 != 0){
        
    }else{
        return false;
    }
   
}


//4. ZADATAK 

//maks2

let maks2 = (a,b) =>{
    if(a>b){
        return a;
    }else{
        return b;
    }
}

// uslov _____ ? opcija 1_____ : opcija2_____
let max2 = (a,b) => (a>b) ? a : b;
         //return if(a>b) then a else b; 



console.log(max2(2,4));





//maks4



let max4 = (a,b,c,d) => max2(max2(a,b),max2(c,d));
console.log(`Max4 je ${max4(6,19,-9,5)}`);

let max4DN = (a,b,c,d) => max2(max2(max2(a,b),c),d);
console.log(`Max4DN je ${max4DN(33,2,73,4)}`);


// let maks4 = (a,b,c,d) =>{
//     let max1 = maks2(a,b);
//     let max2 = maks2(c,d);
//     if (max1 > max2){
//         return max1;
//     }else if(max2 > max1){
//         return max2;
//     }else{
//         console.log('Brojevi su jednaki');
        
//     }
// }

console.log(`Najveci broj je ${max4(222,222,33,4)}`);

//5. ZADATAK


//1 NACIN.

let slika = (ip) =>{
    return `<img src="${ip}" alt="${ip}nije ucitana" height="250">`;
}

document.body.innerHTML += slika("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Capitals-Maple_Leafs_%2834075134291%29.jpg/1200px-Capitals-Maple_Leafs_%2834075134291%29.jpg"
)

//2. NACIN BEZ RETURN

let slika2 = (ip) => `<img src="${ip}" alt="${ip}nije ucitana" height="350">`;

document.body.innerHTML += slika2("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Capitals-Maple_Leafs_%2834075134291%29.jpg/1200px-Capitals-Maple_Leafs_%2834075134291%29.jpg"
)

//3. NACIN BEZ RETURN I BEZ PARAMETRA U ZAGRADI (SAMO JEDAN PARAMETAR MOZE)

let slika3 = ip => `<img src="${ip}" alt="${ip}nije ucitana" height="450">`;
document.body.innerHTML += slika3("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Capitals-Maple_Leafs_%2834075134291%29.jpg/1200px-Capitals-Maple_Leafs_%2834075134291%29.jpg"
)

//6. ZADATAK

let color = (boja, font) => {
    document.body.innerHTML += `<p style="color:${boja}; font-size: ${font*5}px">This is the paragraph about ice hockey</p>`
}

color("blue",4);



// da li je broj paran ili ne

let paran = n => (n%2 == 0); // ? true : false nema potrebe za ovim jer svakako vraca true ili false;

console.log(paran(9));




// 7. ZADATAK apisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?



// let sedmiDan = n => {
//     n = n % 7;
//     switch(n){
//     case 0:
//       console.log("Danas je nedelja");
//       break;
//     case 1:
//       console.log("Danas je ponedeljak");
//       break;
//     case 2:
//       console.log("Danas je utorak");
//       break;
//     case 3:
//       console.log("Danas je sreda");
//       break;
//     case 4:
//       console.log("Danas je cetvrtak");
//       break;
//     case 5:
//       console.log("Danas je petak");
//       break;
//     case 6:
//       console.log("Danas je subota");
//       break;
//     default:
//       console.log("Pogresan unos"); 
//     }
// }

// sedmiDan(7);



let sedmiDan2 = n => {
    return (n % 7 == 0) ? "Ned" : (n % 7 == 1) ? "Pon" : (n % 7 == 2) ? "Uto" : (n % 7 == 3) ? "Sre" : (n % 7 == 4) ? "Cet" : (n % 7 == 5) ? "Pet" : "Sub" 
}

console.log(sedmiDan2(5));



for(i = 0; i<7; i++){
    console.log(sedmiDan2(i));
}


// 8. ZADATAK Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m


let deljivSaTri = (n,m) =>{
    let br = 0;
    for(i=n; i<=m; i++){
        if(i%3==0){
            console.log(i);
            br++;
        }
    }
    return br;
}


console.log(deljivSaTri(5,34));

// 9. ZADATAK Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n,m) => {
    let suma = 0;
    for(i=n; i<=m; i++){
        suma+= i;
    }
    return suma;
}

sumiraj(5,15);

console.log(sumiraj(5,15));


// 10.Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.


let mnozi = (n,m) => {
    let proizvod = 1;
    for(i=n; i <=m; i++){
        proizvod *= i;
    }
    return proizvod;
}


console.log(mnozi(3,5));
