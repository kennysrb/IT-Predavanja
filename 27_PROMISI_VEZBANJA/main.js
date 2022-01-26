let divOrder = document.querySelector(".order");
let formOrder = document.querySelector('.order form');
let inputOrder = document.querySelector('#capacity');

function getItem(resource, resolve, reject){
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText);
            resolve(data);
        }else if(this.readyState ===4){
            reject('Could not fetch data');
        }
    });
    request.open('GET', resource);
    request.send();
};

function submitForm1(e){
    e.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItem("json/stock.json", (data)=>{
        data.forEach(d=>{
            if(d.stock <= 0){
                ids.push(d.id);
            }
        });
        // console.log(ids);
        
        getItem("json/weights.json", (data)=>{
            let totalWeight = 0;
            data.forEach(d=>{
                if(ids.includes(d.id)){
                    totalWeight += d.weight;
                }
            })
            console.log(`Ukupna tezina svih narucenih proizoda je: ${totalWeight}kg.`);
            if(totalWeight > capacity){
                let par = document.createElement('p');
                par.innerHTML = `Ukupna tezina svih narucenih proizvoda je veca od kapaciteta kamiona!`;
                par.style = 'color:red; font-size:24px; font-weight: "bold";';
                divOrder.appendChild(par);
            }else{
                getItem("json/prices.json", (data)=>{
                    let totalPrice = 0;
                    data.forEach(d=>{
                        if(ids.includes(d.id)){
                            totalPrice += d.price;
                        }
                    })
                    console.log(`Ukupna cena svih narucenih proizvoda je: ${totalPrice}din.`);
                    let par = document.createElement('p');
                    par.innerHTML = `Ukupna cena svih narucenih proizvoda je: ${totalPrice}din.`;
                    par.style = 'color:green; font-size:24px; font-weight: "bold";';
                    divOrder.appendChild(par);
                },(msg)=>{console.log(msg)});
            }
        },(msg)=>{console.log(msg)});
    },(msg)=>{console.log(msg);});
   
};
// formOrder.addEventListener('submit', submitForm1);



/*
1. ideja: getItems() da pozove jedan za drugim
    getItems('.json/stock.json');
    getItems('.json/weights.json');
    getItems('.json/prices.json');

    NETACNA IDEJA jer je svaki getItem asinhron poziv,
    sto znaci da ne mora weights.json da se dohvati pre stock.json
    (isto i za prices.json)



2. ideja: Redosled asinhronih poziva se odvija preko callback funkcija
TACNA IDEJA, ali neprakticna (callback hell)


3. ideja: Redosled asinhronih poziva se odvija preko Promise-a
*/


function getItemReturnPromise(resource){
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState === 4){
            reject('Could not fetch data');
        }
    });
    request.open('GET', resource);
    request.send();
    }); 
};



function submitForm2(e){
    e.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItemReturnPromise('json/stock.json')
    //1.
    .then((data)=>{
        data.forEach(item=>{
            if(item.stock <=0){
                ids.push(item.id);                
            }
        });
        return getItemReturnPromise("json/weights.json");
    })
    //2.
    .then((data)=>{
        let totalWeight = 0;
        data.forEach(item=>{
            if(ids.includes(item.id)){
                totalWeight += item.weight;
            }
        });
        if(totalWeight > capacity){
            let par = document.createElement('p');
            par.innerHTML = `Ukupna tezina svih narucenih proizvoda je veca od kapaciteta kamiona!`;
            par.style = 'color:red; font-size:24px; font-weight: bold;';
            divOrder.appendChild(par);
        }else{
            return getItemReturnPromise('json/prices.json');
        }
    })
    //3.
    .then((data)=>{
        // SVAKAKO ODLAZI U THEN I MORA PROVERA DA LI POSTOJE NEKI PODACI IF(DATA !== UNDEFINED)
        if(data !== undefined){
            let totalPrice = 0;
            let table = document.createElement('table');
            let tr = document.createElement('tr');
            table.appendChild(tr);
            let th = document.createElement('th');
            th.innerHTML = "Naziv artikla";
            let th2 = document.createElement('th');
            th2.innerHTML = "Cena";
            tr.appendChild(th);
            tr.appendChild(th2);
            data.forEach(item=>{
                if(ids.includes(item.id)){
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    td.innerHTML = item.item;
                    let td2 = document.createElement('td');
                    td2.innerHTML = item.price;
                    table.appendChild(tr);
                    tr.appendChild(td);
                    tr.appendChild(td2);
                    totalPrice += item.price;
                }
            });
            let tr2 = document.createElement('tr');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td3.innerHTML = "UKUPNA CENA";
            td2.innerHTML = totalPrice;
            tr2.appendChild(td3);
            tr2.appendChild(td2);
            table.appendChild(tr2);
            divOrder.appendChild(table);
        }
    })
    .catch((msg)=>{
        console.log(msg);
    });
}




// function submitForm2(e){
//     e.preventDefault();
//     let capacity = inputOrder.value;
//     let ids = [];
//     getItemReturnPromise('json/stock.json')
//     //1.
//     .then((data)=>{
//         data.forEach(item=>{
//             if(item.stock <=0){
//                 ids.push(item.id);                
//             }
//         });
//         return getItemReturnPromise("json/weights.json");
//     })
//     //2.
//     .then((data)=>{
//         let totalWeight = 0;
//         data.forEach(item=>{
//             if(ids.includes(item.id)){
//                 totalWeight += item.weight;
//             }
//         });
//         if(totalWeight > capacity){
//             let par = document.createElement('p');
//             par.innerHTML = `Ukupna tezina svih narucenih proizvoda je veca od kapaciteta kamiona!`;
//             par.style = 'color:red; font-size:24px; font-weight: bold;';
//             divOrder.appendChild(par);
//         }else{
//             return getItemReturnPromise('json/prices.json');
//         }
//     })
//     //3.
//     .then((data)=>{
//         // SVAKAKO ODLAZI U THEN I MORA PROVERA DA LI POSTOJE NEKI PODACI IF(DATA !== UNDEFINED)
//         if(data !== undefined){
//             let totalPrice = 0;
//             data.forEach(item=>{
//                 if(ids.includes(item.id)){
//                     totalPrice += item.price;
//                 }
//             });
//             let par = document.createElement('p');
//                     par.innerHTML = `Ukupna cena svih narucenih proizvoda je: ${totalPrice}din.`;
//                     par.style = 'color:green; font-size:24px; font-weight: bold;';
//                     divOrder.appendChild(par);
//         }
//     })
//     .catch((msg)=>{
//         console.log(msg);
//     });
// }
formOrder.addEventListener('submit', submitForm2);


// let divOrder = document.querySelector(".order");
// let formOrder = document.querySelector('.order form');
// let inputOrder = document.querySelector('#capacity');




/// ZADATAK




// let submit = document.querySelector('.submit');
// let naziv = document.querySelector('#naziv');
// let min_price = document.querySelector('#cene1');
// let max_price = document.querySelector('#cene2');
// let filter = document.querySelector('.filter');

// function button_click (e){
//     e.preventDefault();
//     let min = min_price.value;
//     let max = max_price.value;
//     let ids = [];
//     let niz = [];
//     getItemReturnPromise('json/stock.json')
//     .then((data)=>{
//         data.forEach(item =>{
//             if(item.stock > 0){
//                 ids.push(item.id);
//             }
//         });
//         return getItemReturnPromise('json/weights.json')
//     })
//     .then((data)=>{
//         data.forEach(item=>{
//             if(item.item.includes(naziv.value) && ids.includes(item.id)){
//                 niz.push(item.id);
//             }else{
//                 console.log('Nema rezultata');
//             }
//         })
//         console.log(niz);
//         return getItemReturnPromise('json/prices.json')
//     })
//     .then((data)=>{
//         if(data != undefined){
//             let ul = document.createElement('ul');
//             data.forEach(item=>{
//                 if(item.price >= min && item.price <= max && niz.includes(item.id) === true){
//                     let li = document.createElement('li');
//                     li.innerHTML = item.item;
//                     ul.appendChild(li);
//                     console.log(item.item);
//                 }
//             });
//             filter.appendChild(ul);
//         }
//     })
//     .catch();
// }





// submit.addEventListener('click',button_click);


let divFilter = document.querySelector("#filter");
let formFilter = document.querySelector("#filter form");
let inputNaziv = document.querySelector("#naziv");
let inputCenaMin = document.querySelector("#cenaMin");
let inputCenaMax = document.querySelector("#cenaMax");


//ASYNC PRAVI FUNKCIJU ASINHRONOM

async function clickGetItems(){
    let naziv = inputNaziv.value;
    let cenaMin = inputCenaMin.value;
    let cenaMax = inputCenaMax.value;
    //NEMA THEN I CATCH         
    // CEKAJ I AKO JE SVE U REDU, REZULTAT SMESI U DATA1 PROMENLJIVU
    let data1 = await getItemReturnPromise('json/stock.json');
    let artikliNaStanju = [];
    data1.forEach(item =>{
        if(item.stock > 0){
            artikliNaStanju.push(item.id);
        }
    })

    let data2 = await getItemReturnPromise('json/prices.json');
    let tabela = document.createElement('table');
    data2.forEach(item=>{
        if(item.price >= cenaMin && item.price <= cenaMax && artikliNaStanju.includes(item.id) && item.item.includes(naziv)){
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML = item.item;
            td2.innerHTML = item.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    })
    return tabela;
};

function akcija(e){
    e.preventDefault();
    clickGetItems()
    .then(data=>{
        divFilter.appendChild(data);
        
    })
    .catch(error=>{
        console.log(error);
        
    });
}

formFilter.addEventListener('submit', akcija);
