// console.log('EVENTS');


// //1. Selektujem HTML element sa stranice gde zelim event listener
// let pKlikni = document.getElementById('klikni');



// //2. Postavljamo event listener
// pKlikni.addEventListener('click', ()=>{
//     console.log('Jednom kliknuto na paragraf');
// });


// /////////////////////

// //1. 
// let pKlikniDva = document.getElementById("dvaKlika");
// // 2.
// pKlikniDva.addEventListener("dblclick", ()=>{
//     console.log('Dva puta kliknuto na paragraf');
// });


// // 3.

// let btnPlus = document.getElementById('plus');
// // 2.
// let res =0;
// let spanRes = document.getElementById('res');
// btnPlus.addEventListener('click',()=>{
//     res++;
//     spanRes.innerHTML = res;
//     if(res > 0){
//         spanRes.style.backgroundColor ="red";
//     }else{
//         spanRes.style.backgroundColor ="blue";

//     }

// });

// /// MINUS DUGME

// let btnMinus = document.getElementById('minus');
// btnMinus.addEventListener("click",()=>{
//     res--;
//     spanRes.innerHTML = res;
//     if(res > 0){
//         spanRes.style.backgroundColor ="red";
//     }else{
//         spanRes.style.backgroundColor ="blue";

//     }
// });


// /// RESET DUGME

// let btnReset = document.getElementById('reset');
// btnReset.addEventListener('click',()=>{
//     res = 0;
//     document.getElementById('res').innerHTML = res;
// });



// ////////////////////////////////////////////

// let btnHello = document.getElementById('hello');
// console.log(btnHello);

// let inputIme = document.getElementById('ime');
// console.log(inputIme);

// let pHelloIspis = document.getElementById('helloIspis');
// console.log(pHelloIspis);



// btnHello.addEventListener("click", ()=>{
//     let inputImeValue = inputIme.value;
//     pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
// });


/////////////////////////// DOM ZA FORMU

let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPosalji = document.getElementById('posalji');
let pIspis = document.getElementById('ispis');


btnPosalji.addEventListener('click', (e)=>{
    e.preventDefault();
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    
    // uzimam vrednost iz inputa
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;

    // menja tip elementa iz stringa u broj
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);

    // // uvek prevodi u string
    // console.log(typeof inputGodinaRodjenjaValue);


    // izracunam br godina
    let god = tekucaGodina - inputGodinaRodjenjaValue;

    if(inputGodinaRodjenjaValue>= tekucaGodina){
        alert(`Godina mora biti manja od ${tekucaGodina}`)
    }else{
        pIspis.innerHTML = `Korisnik ima ${god} godina`;

        
        //selektujem pol imena pol :checked koji cekiran
        let checkedPol = document.querySelector(`input[name="pol"]:checked`); // vraca input tag onog input polja na koje je kliknuto
    let checkedPolValue = checkedPol.value;                  
    if(checkedPolValue == "z"){
        pIspis.innerHTML += " i zenskog je pola."
    }else if(checkedPolValue == "m"){
        pIspis.innerHTML += " i muskog je pola."
    }else{
        pIspis.innerHTML += " i nije se opredelio za pol."
    };
    };
    
    

    
    
});