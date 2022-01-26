let getTodos = (resource) => {
  //KREIRANJE HMX OBJEKTA
  let request = new XMLHttpRequest();

  // 2.OTVARANJE KREIRANOG OBJEKTA
  request.open("GET", resource);
  // 3. SALJEMO ZAHTEV
  request.send();
  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        // callback(request.responseText, undefined);
        resolve(request.responseText);
      } else if (this.readyState === 4) {
        // callback(undefined,"Ne mogu da dohvatim podatke.");
        reject("Ne mogu da dohvatim podatke.");
      }
    });
  });
};

// ZELIM PRVO DA SE UCITA:
//1. TODOS.JSON
//2. FRUITS.JSON
//3. VEGETABLES.JSON
getTodos("../JSON/todos.json")
  .then((data) => {
    console.log("Promise todos resolved", data);
    return getTodos("../JSON/fruits.json"); //vraca promise na koji se odnosi naredni then
  })
  .then((data) => {
    console.log("Promise fruits resolved", data);
    return getTodos("../JSON/vegetables.json");
  })
  .then((data) => {
    console.log("Promise vegetables resolved", data);
  })
  .catch((err) => {
    console.log("Promise rejected", err);
  });

console.log("KRAJ");
