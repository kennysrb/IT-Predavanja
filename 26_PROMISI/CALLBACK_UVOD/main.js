// PRIMERI CALLBACK

let myFunc = callback =>{
    callback();
};


// REALIZACIJA CALLBACK FUNKCIJE VRSI SE PRILIKOM POZIVA RODITELJSKE FUNKCIJE
myFunc(()=>{
    console.log("Callback okinuta");
});

///////////////////////////

let sum = callback =>{
    callback(5,7);
    let br1 = 6;
    let br2 = 4;
    callback(br1,br2);
};
//1. REALIZACIJA FUNKCIJE SE PROSLEDJUJE KAO PARAMETAR
sum((x,y)=>{
    console.log(x+y);
});


//2. KREIRAMO POSEBNU FUNKCIJU ZA REALIZACIJU I ONDA JE PROSLEDIMO KAO PARAMETAR
function printSum(a,b){
    console.log(a+b);
}
// POZIV FUNKCIJE KOJA RREALIZUJE IDE BEZ ZAGRADE
sum(printSum);


///////////////////////

let proizvod = callback =>{
    callback(5,5);
};

function pp (a,b){
    console.log(a*b);
};

proizvod(pp);

///////////////////////

let razlika = callback =>{
    callback(100,74);
};

function rp(a,b){
    console.log(a-b);
};

razlika(rp);


///////////////////////

let my = f =>{
    f("Nikola")
};

my((a)=>{
    console.log(`Hello ${a}`);
});



///////////////////////
let niz = [1,2,3,4]
let avg = (f,niz) =>{
    console.log(`Zbir brojeva ${niz} je: ${f(niz)}`);
};

avg((a)=>{
    let sum = 0;
    a.forEach(a=>{
        sum+=a; 
    })
    return sum;
}, niz);


/////////////////////////

let racunaj = (str,cb) =>{
    console.log(str);
    cb(7,3)
}

racunaj("Oduzimanje",(x,y)=>{
    console.log(x-y);
});


racunaj("Mnozenje", (x,y)=>{
    console.log(x*y);
})


/////////////////////////

let racunaj2 = (str,cb) =>{
    let a = 11;
    let b = 15;
    console.log(`Rezultat ${str} brojeva ${a} i ${b} je: ${cb(a,b)}`);
};

racunaj2("deljenja", (x,y)=>{
    return x / y;
});

