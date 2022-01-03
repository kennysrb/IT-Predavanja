let cont = document.getElementsByClassName('container');

console.log(cont);
console.log(typeof cont);

for(let i=0; i< cont.length; i++){
    console.log(cont[i]);
};

let contNiz = Array.from(cont);  /// Array.from(ime promenljive)PRAVI NIZ OD OBJEKATA

contNiz.forEach(el=>{
    console.log(el);
});