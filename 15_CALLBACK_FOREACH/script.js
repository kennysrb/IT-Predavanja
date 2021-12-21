// function ispisKonzola (niz){
//     let rez = "";
//     for(let i =0; i<niz.length; i++){
//         rez += niz[i] + " ";
//     }
//     console.log(rez);
// }


// function ispisHTML(niz){
//     let rez = "";
//     for(let i =0; i<niz.length; i++){
//         rez += niz[i] + " ";
//     }
//     document.body.innerHTML += `<div>${rez}</div>`;
// }


// let brojevi = [1,2,3,4,5,6];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisHTML(poruka){
    document.body.innerHTML += `<div>${poruka}</div>`
}

function ispisNiza(niz, cb){
    let rez = "";
    for(let i =0; i<niz.length; i++){
        rez += niz[i] + " ";
    }
    cb(rez);
}


function test(niz,cb){
    cb(niz, ispisHTML);
}
let brojevi = [1,2,3,4,5,6];


test(brojevi, ispisNiza);
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi,ispisHTML);



// ISTI ZADATAK SAMO UZ POZIVANJE ANONIMNIH FUKCIJA

ispisNiza(brojevi, function(poruka){
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka){
    document.body.innerHTML += `<div>${poruka}</div>`;
});


ispisNiza(brojevi, poruka =>{
    console.log(poruka);
});

ispisNiza(brojevi, poruka =>{
    document.body.innerHTML += `<div>${poruka}</div>`;
});



// a) odredi broj maksimalnih elemenata u celobrojnom nizu
// b) odredi broj minimalnih elemenata u celobrojnom nizu


let niz = [0,2,3,0,1,45,5];


function max(niz){
    let m = niz[0];
    let br = 0;
    for(let i = 0; i<niz.length; i++){
        if(niz[i] > m){
            m = niz[i];
        }
    }
    // for(let i = 1; i<niz.length; i++){
    //     if(niz[i] == m){
    //         br++;
    //     }
    // }
    // return br;
}


function min(niz){
    let m = niz[0];
    let br = 0;
    for(let i = 0; i<niz.length; i++){
        if(m >= niz[i]){
            m = niz[i];
        }
    }
    // for(let i = 0; i<niz.length; i++){
    //     if(niz[i] == m){
    //         br++;
    //     }
    // }
    // console.log(m);
    // console.log(br);
    
    
}

// console.log(min(niz));

min(niz);


// function minmax(niz){

//     for(let i = 0; i<niz.length; i++){
//         if(niz[i] == m){
//             br++;
//         }
//     }
// }



// a) odredi broj maksimalnih elemenata u celobrojnom nizu
// b) odredi broj minimalnih elemenata u celobrojnom nizu



niz = [0,2,3,0,1,45,5];

function maxEl(niz) {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}

function minEl (niz) {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

function brojSvojstvoNiz(niz, svojstvo) {
    let s = svojstvo(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(s == niz[i]){
            br++;
        }
    }
    return br;
};

let temperature = [0, 0, 1, 2, 2, 1, 2, 0, 0];
brojSvojstvoNiz(temperature, maxEl);



// function maxMinEl(niz) {
//     let max = niz[0];
//     let min = niz[0];
//     for(let i = 1; i < niz.length; i++){
//         if(niz[i] > max){
//             max = niz[i];
//         }
//         if(niz[i] < min){
//             min = niz[i];
//         }
//     }
//     return [min, max];
// }

// function minEl (niz) {
    
//     for(let i = 1; i < niz.length; i++){
        
//     }
//     return min;
// }

// function brojSvojstvoNiz(niz, svojstvo, index) {
//     let temp = svojstvo(niz);
//     let s = temp[index];
//     let br = 0;
//     for(let i = 0; i < niz.length; i++){
//         if(s == niz[i]){
//             br++;
//         }
//     }
//     return br;
// };

// const MAX_INDEX = 1;
// const MIN_INDEX = 0;


// let temperature = [0, 0, 1, 2, 2, 1, 2, 0, 0];
// brojSvojstvoNiz(temperature, maxMinEl);
// console.log(brojSvojstvoNiz(temperature, maxMinEl, MAX_INDEX));
// console.log(brojSvojstvoNiz(temperature, maxMinEl, MIN_INDEX));


