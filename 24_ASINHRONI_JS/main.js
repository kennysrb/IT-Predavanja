// request.addEventListener('readystatechange',()=>{
    //     if(request.readyState ==1){
        //         console.log('Uspostavljena konekcija');
        //     }else if(request.readyState ==2){
            //         console.log('Poslat je zahtev serveru');
            //     }else if(request.readyState ==3){
                //         console.log('Prihvata se odgovor - u statusu preuzimanja');
                //     }else if(request.readyState ==4){
                    //         console.log('Odgovor je preuzet: ', request.responseText);
                    //     }
                    // })
                    
                    


// OSIGURANJE DA JE DOBAR ODGOVOR SA SERVERA

// let req1 = new XMLHttpRequest();
// let req2 = new XMLHttpRequest();
// let req3 = new XMLHttpRequest();
// let req4 = new XMLHttpRequest();
// let req5 = new XMLHttpRequest();
// req1.addEventListener('readystatechange',function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         //IME SADRZI
//         data.forEach(d=>{
//             if(d.name.includes('Clementin')){
//                 console.log(d.name);
//             }    
//         })    
//     }else if(this.readyState === 4){
//         console.log("Could not fetch data");
//         console.log(this.responseText); 
//     }    
// });    
// req1.open('GET', 'https://jsonplaceholder.typicode.com/users');
// req1.send();


// req2.addEventListener('readystatechange',function(){
//     if(this.readyState === 4 && this.status === 200){
//         // WEBSITE .COM
//         let data = JSON.parse(this.responseText);
//         data.forEach(d=>{
//             if(d.website.includes('.com')){
//                 console.log(d.name);
//             }    
//         })    
//     }else if(this.readyState === 4){
//         console.log("Could not fetch data");
//         console.log(this.responseText); 
//     }    
// });    
// req2.open('GET', 'https://jsonplaceholder.typicode.com/users');
// req2.send();


// req3.addEventListener('readystatechange',function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         //IME FIRME SADRZI
//         data.forEach(d=>{
//             if(d.company.name.includes("Group") || d.company.name.includes("LLC")){
//                 console.log(d.company.name); 
//             }    
//         })    
//     }else if(this.readyState === 4){
//         console.log("Could not fetch data");
//         console.log(this.responseText); 
//     }    
// });    
// req3.open('GET', 'https://jsonplaceholder.typicode.com/users');
// req3.send();


// req4.addEventListener('readystatechange',function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         //GRADOVI
//         let gradovi = [];
//         for(let i = 0; i < data.length; i++){
//             if(!gradovi.includes(data[i].address.city)){
//                 gradovi.push(data[i].address.city)
//             };    
//         }    
//         console.log(gradovi);
//     }else if(this.readyState === 4){
//         console.log("Could not fetch data");
//         console.log(this.responseText); 
//     }    
// });    

// req4.open('GET', 'https://jsonplaceholder.typicode.com/users');
// req4.send();

// req5.addEventListener('readystatechange',function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         let br = 0;
//         //GEO SIRINE DUZINE
//         data.forEach(d=>{
//             if(parseFloat(d.address.geo.lat) < 0 && parseFloat(d.address.geo.lng) < 0){
//                 br++
//                 console.log(br, d.name);
//             }   
//     })
//     console.log(br); 
//     }else if(this.readyState === 4){
//         console.log("Could not fetch data");
//         console.log(this.responseText); 
//     }    
// });    

// req5.open('GET', 'https://jsonplaceholder.typicode.com/users');
// req5.send();














// KOSTUR KOJI VAZI ZA SVE ZADATKE


// let getUsers = (resolve, reject) =>{
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function(){
//         if(this.readyState === 4 && this.status === 200){
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }else if(this.readyState === 4){
//             reject('Doslo je do greske.')
//         }
//     });
//     request.open('GET','https://jsonplaceholder.typicode.com/users');
//     request.send();
// };

// let zad2 = (niz) =>{
//     niz.forEach(kor =>{
//         if(kor.website.includes(".com")){
//             console.log(kor.name);
//         }
//     });
// };

// let zad3 = (niz) =>{
//     niz.forEach(kor=>{
//         if(kor.name.includes("Clementin")){
//             console.log(kor.name);
//         }
//     })
// };

// let zad4 = (niz) =>{
//     let gradovi = [];
//     niz.forEach(kor=>{
//         if(!gradovi.includes(kor.address.city)){
//             gradovi.push(kor.address.city)
//         }
//     });
//     console.log(gradovi); 
// };

let ispisPorukeStranica = (poruka) =>{
    document.body.innerHTML += `<p class='error'>${poruka}</p>`;
};

let ispisPorukeKonzola = (poruka) =>{
    console.log(poruka);
}

// getUsers(zad2, ispisPorukeStranica);
// getUsers(zad3, ispisPorukeStranica);
// getUsers(zad4, ispisPorukeKonzola);


// getUsers((niz)=>{
//         niz.forEach(kor=>{
//             if(kor.company.name.includes('LLC') || kor.company.name.includes('Group')){
//                 console.log(kor.name);
//             }
//         });
//     },
//     (poruka)=>{
//         document.body.innerHTML += `<p class="error">${poruka}</p>`;
//     }
// );







let sportisti = (resolve, reject) =>{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText);
            resolve(data);
        }else if(this.readyState === 4){
            reject('Doslo je do greske.')
        }
    });
    request.open('GET','./sportisti.json');
    request.send();
};


//PROSECNA VISINA
let zadatak1 = (niz) =>{
    let sum = 0;
    niz.forEach(kor=>{
        sum += kor.visina;
    });
    console.log(`Prosecna visina je ${Math.round(sum/niz.length)}`);    
};

//NAJMANJE TRANSFERA
let zadatak2 = (niz) =>{
    let min = niz[0];
    niz.forEach(kor=>{
           if(kor.timovi.length < min.timovi.length){
               min = kor;
           }
           
        });
        console.log(min);
};

//SVI KOJI SU IGRLALI ZA PARTIZAN
let zadatak3 = (niz) =>{
    niz.forEach(kor=>{
        if(kor.timovi.includes("Partizan")){
            console.log(kor);
            
        }
    });
};

sportisti(zadatak1, ispisPorukeStranica);
sportisti(zadatak2, ispisPorukeStranica);
sportisti(zadatak3, ispisPorukeStranica);
