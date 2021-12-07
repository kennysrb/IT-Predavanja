let broj = 5;
if(broj < 10){
    document.body.innerHTML += "<p>Prva desetica</p>"
}else if(broj < 20 && broj >10 ){
    document.body.innerHTML += "<p>Druga desetica</p>"
}else{
    document.body.innerHTML += "<p>Broj je veci od 20</p>"
}



let ocena = "";
if(ocena == 5){
    document.body.innerHTML += `<p style="color: green;">Odlican ${ocena}</p>`
}else if(ocena == 4){
    document.body.innerHTML += `<p style="color: yellow;">Vrlo dobar ${ocena}</p>`
}else if(ocena == 3){
    document.body.innerHTML += `<p style="color: orange;">Dobar ${ocena}</p>`
}else if(ocena == 2){
    document.body.innerHTML += `<p style="color: red;">Dovoljan ${ocena}</p>`
}else if(ocena == 1){
    document.body.innerHTML += `<p style="background-color: red; padding: 20px; margin:0; height:100px" >Nedovoljan ${ocena}</p>`
}else{
    document.body.innerHTML += `<p style="color: white; background-color:blue; font-size: 3em; text-align:center; padding: 20px; height:100px;">UCENIK NIJE OCENJEN</p>`
}