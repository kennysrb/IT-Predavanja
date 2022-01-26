let getSomething = ()=>{
    //return new Promise((resolve, reject) isto bi bilo TAKO SE PISE!!!!
    return new Promise((resolve, reject)=>{
        resolve("Nesto resolve") // sve kul
        reject("Nesto reject"); // nesto nije ok
    });
};

// Ako je promise vratio RESOLVE realizuje se .then() grana
// Ako je promise vratio REJECT realizuje se  .catch() grana
getSomething().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});