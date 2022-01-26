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




getTodos('../JSON/todos.json', (data,err)=>{
    console.log("Callback okinuta");
    if(err){
      console.log(err); // ispisuje gresku u todos.json fajlu
    }
    else{
        console.log(data); // ispisuje podatke iz todos.json fajla

        // NAKON STO SU SE ISPISALI PODACI IZ TODOS.JSON FALJA POZIVAMO SLEDECI FAJL FRUITS.JSON
        getTodos('../JSON/fruits.json', (data,err)=>{
          if(err){ // ispisuje gresku u fruits.json fajlu
            console.log(err);
          }else{ // ispisuje podatke iz fruits.json fajla

            console.log(data);
            getTodos('../JSON/vegetables.json', (data,err)=>{
              // NAKON STO SU SE ISPISALI PODACI IZ FRUITS.JSON FALJA POZIVAMO SLEDECI FAJL VEGETABLES.JSON
              if(err){ // ispisuje gresku iz vegetables.json
                console.log(err);
              }else{  // ispisuje podatke iz vegetables.json
                console.log(data);
                
              }
            })
          }
        })
    }
});   

