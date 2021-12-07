console.log('test');

    //HIJERARHIJA OPERACIJA
// 1. NEGACIJA
// 2. AND
// 3. OR
// if(!true && true || false) --> (false && true ||) --> (false || false) -> 


// if((!true && true) || false)

let pol = "z";
let god = 27;

if(pol == "m" && god >= 18){
    console.log('Osoba je muskog pola i punoletna');
}else if( pol == "m" && god < 18 && god >= 0){
    console.log('Osoba je muskog pola i maloletna');
}else if(pol == "z" && god >= 18){
    console.log('Osoba je zenskog pola i punoletna');
}else if(pol == "z" && god < 18 && god >= 0){
    console.log('Osoba je zenskog pola i maloletna');
}else{
    console.log('Unos nije validan');
}

///////////////////////////////////

pol = "m";

if(pol == "Z" || pol == "z" || pol == "ž" || pol == "Ž"){
    document.body.innerHTML += `<img src="img/z.jpg">`
}else if(pol == "M" || pol == "m"){
    document.body.innerHTML += `<img src="img/m.jpg">`
}else{
    document.body.innerHTML += `<p>Pogresan unos</p>`
}

///////////////////////////////////

pol = "g";
god = 12;

if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž")&& god >= 18){
    document.body.innerHTML += `<img src="img/z.jpg"><h1>Punoletna zena</h1>`
}else if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž")&& god < 18 && god > 0){
    document.body.innerHTML += `<img src="img/z.jpg"><h1>Maloletna zena</h1>`
}else if((pol == "m" || pol == "M")&& god >= 18){
    document.body.innerHTML += `<img src="img/m.jpg"><h1>Punoletan muskarac</h1>`
}else if((pol == "m" || pol == "M")&& god < 18 && god > 0){
    document.body.innerHTML += `<img src="img/m.jpg"><h1>Maloletan muskarac</h1>`
}else{
    alert `Pogresan unos`
}

