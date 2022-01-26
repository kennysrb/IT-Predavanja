let getTodos = (resource, callback) => {
  //KREIRANJE HMX OBJEKTA
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", function () {

    if (this.readyState === 4 && this.status === 200) {

      callback(request.responseText, undefined);
    } 
    else if (this.readyState === 4) {
        callback(undefined,"Ne mogu da dohvatim podatke.");
    }
  });

  // 2.OTVARANJE KREIRANOG OBJEKTA
  request.open("GET", resource);
  // 3. SALJEMO ZAHTEV
  request.send();
};


function realizuj(){
    
}

getTodos('../JSON/todos.json', (data,err)=>{
    console.log("Callback okinuta");
    if(err){
        console.log(data); // ispisuje podatke sa kojima moze dalje da raspolaze
    }
    else{
        console.log(err); // ispisuje gresku
    }
});

