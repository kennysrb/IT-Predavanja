import {Pacijent} from "./pacijent.js";

let p1 = new Pacijent("Jelena", 173, 66);
let p2 = new Pacijent("Ana", 180, 72);
let p3 = new Pacijent("Pera", 190, 140);
let p4 = new Pacijent("Mika", 167, 57);
let p5 = new Pacijent("Mila", 150, 70);
console.log(p1);

//1.

console.log(p1.bmi());

console.log(p1.kritican());


let pacijenti = [p1,p2,p3,p4,p5];

//NAJMANJA TEZINA

let btnMinTez = document.querySelector('#minTez');
let spanMinTezRez = document.querySelector('#minTezRez');
btnMinTez.addEventListener('click', (e) =>{
    e.preventDefault();
    let min = pacijenti[0];
    pacijenti.forEach(p=>{
    if(min.tezina > p.tezina){
        min = p;
    }
});
spanMinTezRez.innerHTML = min.stampajListu();
});

//NAJVECI BMI

let btnMaxBmi = document.querySelector('#maxBmi');
let maxBmiRez = document.querySelector('#maxBmiRez');
btnMaxBmi.addEventListener('click',()=>{
    let max = pacijenti[0];
    pacijenti.forEach(p=>{
        if(max.bmi()< p.bmi()){
            max = p;
        }
    });
    maxBmiRez.innerHTML = max.stampajListu();
});

//Ispisati sve pacijente čije ime sadrži slovo A.
for(let i =0; i<pacijenti.length; i++){
    if(pacijenti[i].ime.includes("a") == true  ||pacijenti[i].ime.includes("A") == true ){
        console.log(pacijenti[i]);
    }
}

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

function srednjaVisina(arr){
    let sum =0;
    let br = 0;
    arr.forEach(p => {
        sum += p.visina;
        br++;
    });
    console.log(`Srednja visina pacijenata je ${sum/br};`);
    
}

srednjaVisina(pacijenti);