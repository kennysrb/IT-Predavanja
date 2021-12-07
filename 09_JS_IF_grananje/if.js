console.log('IF naredba grananja');

if(true) {
    console.log('Uslov je ispunjen');
}

if(false) {
    console.log('Nije ispunjen');
}

console.log('Neki kod...');

// OPERATORI POREDJENJA

//  ==, !=, <, >, <=, >=


let a = 7;
let b = 7;
if(a==b){
    console.log('Isto je');
}

a = 10;
b = 14;
if(a != b ){
    console.log('Nisu jednake vrednosti A i B');
}

a = 4;
b = 4;
if(a < b){
    console.log('A je strogo manje od B');
    
}

if(a <= b){
    console.log('A je manje ili jednako B');
    
}
//////////////////////////////////////////

// == proverava samo jednakost po vrednosti - nije bitan tip
a = 5;
b = "5";
if(a == b){
    console.log('A i B su jednake vrednosti');
}

// === proverava jednakost i po tipu i po vrednosti - bitan je tip

a = "5";
b = "5";
if(a === b){
    console.log('Iste su po vrednosti i po tipu');
}

// !== proverava da li su promenljive razlicite bilo po tipu bilo po vrednosti

a = 7;
b = "7";

if(a !== b){
    console.log('razliciti su i po tipu i po vrednosti');
    
}


///////////////////////////////////////////

let x = 3;
let y = 4;
let z = 5;
if(x + y == z + 2) {
    console.log("x+y je jednako sa z+2");
    
}



