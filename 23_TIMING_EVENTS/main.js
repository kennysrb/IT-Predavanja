console.log("1");
console.log("2");

/*
for(let i = 0; i<= 100; i++){
    console.log(i);
};
*/ //BLOKIRAJUCI KOD

// arrow funkcija 
setTimeout(() => {
  console.log("3"); // this = uvek vraca window kao objekat
}, 1000*4);


// setTimeout(function(){
//     console.log(this); // this = objekat koji poziva metodu
// },1000*2);

//imenovana funkcija
// function ispis(){
//     console.log('4');
// };
// setTimeout(ispis,1000*2);


let div = document.getElementById('result');
let btn1 = document.querySelector('#btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let timer = null;

btn1.addEventListener('click',function(){
    let datum = new Date();
    let sati = datum.getHours();
    let min = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null){
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${min}:${sekunde}`;
            timer = null;
          }, 2000);
    }
    
});


btn2.addEventListener('click',function(){
    clearTimeout(timer);
    timer = null;
});

let i =0;
let clock = null;
let start = document.querySelector('#start');
// start.addEventListener('click',function(){
//     if(clock === null){
//         clock = setInterval(() => {
//             let sat = document.querySelector('#sat');
//             let tajmer = document.querySelector('#tajmer');
//             let datum = new Date();
//                 let sati = datum.getHours();
//                 let min = datum.getMinutes();
//                 let sekunde = datum.getSeconds();
//                 sat.innerHTML = `${sati}:${min}:${sekunde}`;
//                 tajmer.value = i++;
//               }, 10);
//     }
// });

let kraj = document.querySelector("#stop");
kraj.addEventListener('click',function(){
    clearInterval(clock);
    let tajmer = document.querySelector('#tajmer');
    tajmer.value = 0;
    i = 0;    
    sat.innerHTML = `${0}:${0}:${0}`
    clock = null;
});


let h = 0;
let m = 0;
let s = 0;
let j = 0;
let br = 0;
function play (){
    if(clock === null){
        clock = setInterval(() => {
            let sat = document.querySelector('#sat');
            let tajmer = document.querySelector('#tajmer');
            let datum = new Date();
            let sati = datum.getHours();
            h = sati;
            let min = datum.getMinutes();
            m = min;
            let sekunde = datum.getSeconds();
            s = sekunde;
            sat.innerHTML = `${sati}:${min}:${sekunde}`;
                tajmer.value = i++;
                j = i;
                br++;
              }, 1000);
    }
}

function pl2(){
    if(clock === null){
        clock = setInterval(() => {
                br++;
              }, 1000);
    }
}

function pause(){
    // tajmer.value = s + j;
    sat.innerHTML = `${h}:${m}:${s}`;
    console.log(`${h}:${m}:${s}`);
    
}

start.addEventListener("click", ()=>{
    play();
    tajmer.value = br;
})

let g = 0;
start.addEventListener('dblclick', ()=>{
    tajmer.value = br;
    clearInterval(clock);
    clock = null;
    pause();
    pl2();
})



function pause (){

}




