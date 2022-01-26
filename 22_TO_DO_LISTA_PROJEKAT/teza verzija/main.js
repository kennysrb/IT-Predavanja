let li = document.querySelectorAll('.stavke');
let btn = document.querySelector('.dugme');
let ul = document.querySelector('.to_do');
let forma = document.querySelector('#addForm');
let kraj = document.querySelector("#kraj");
let pocetak = document.querySelector("#pocetak");


ul.addEventListener('click', e =>{
    // console.log('Kliknuto na UL');
    // console.log(e.target); //vraca ceo tag i njegovu decu
    // console.log(e.target.tagName); //vraca samo ime taga na koji je kliknuto
    if(e.target.tagName == "LI"){
        // console.log('Kliknuto na LI');
        if(confirm('Are you sure?')){
            e.target.remove();
        }
    }
});


// btn.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     let li = document.createElement('li');
    //     li.innerHTML = item.value;
    //     li.className = 'stavke';
    //     if(item.value != ""){
        //         if(pocetak.checked == true){
            //             console.log("pocetak");
            //             ul.prepend(li); 
            //         }else{
//             ul.appendChild(li);
//         }
//     }else{
    //         alert('Molimo unesite stavku.')
//     }

//     //Praznjenje input polja

//     // item.value ="";
//     forma.reset();
// });


let item = document.querySelector("#item");

// UNOS INFO PREKO ENTERA BEZ DUGMETA
item.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // code for enter
        e.preventDefault();
        let li = document.createElement('li');
    li.innerHTML = item.value.trim();
    li.className = 'stavke';
    if(item.value.trim() != "" && item.value.trim() != null){
        if(pocetak.checked == true){
            console.log("pocetak");
            ul.prepend(li); 
        }else{
            ul.appendChild(li);
        }
    }else{
        alert('Molimo unesite stavku.')
    }
    //Praznjenje input polja
    // item.value ="";
    forma.reset();
    }
});

//trim
let tekst = "   Hello     NIkola    ";
console.log(tekst);
console.log(tekst.trim());

tekst = "       ";
console.log(tekst);
console.log(tekst.trim());

