console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);


// POZIVANJE ELEMENATA PREKO ID

let p1 = document.getElementById('p1');
console.log(p1);
console.log(typeof p1);

// POZIVANJE ELEMENATA PREKO IMENA KLASE

let cont = document.getElementsByClassName('container');

console.log(cont);
console.log(typeof cont);

for(let i=0; i< cont.length; i++){
    console.log(cont[i]);
};

let contNiz = Array.from(cont);

contNiz.forEach(el=>{
    console.log(el);
    
});

// POZIVANJE ELEMENATA PREKO VRSTE TAGA

let paragrafi = document.getElementsByTagName('p');
console.log(paragrafi);
for(let i = 0; i<paragrafi.length; i++){
    console.log(paragrafi[i]);
};

// POZIVANJE ELEMENATA PREKO IMENA

let linkovi = document.getElementsByName('link');
for(let i = 0; i<linkovi.length; i++){
    console.log(linkovi[i]);
};


// POZIVANJE JEDNOG (PRVOG) ELEMENTA PREKO CSS SELEKTORA 

p1 = document.querySelector(`#p1`);
console.log(p1);


// POZIVANJE VISE ELEMENATA PREKO CSS SELEKTORA  VRACA NODE LIST NIJE POTREBNO KREIRANJE NIZA OD TOGA DA BI USAO U FOREACH


cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container")
console.log(cont);

for(let i = 0; i< cont.length; i++){
    console.log(cont[i]);
};

cont.forEach(el=>{
    console.log(el);
});

paragrafi = document.querySelectorAll('p');
console.log(paragrafi);

linkovi = document.querySelectorAll(["[name='link']"]);
console.log(linkovi);






//1. dohvatiti prvi paragraf na slici

let prviParagraf = document.querySelector('p');
console.log(prviParagraf);

//2. Dohvatiti prvi div tag sa klasom "error"

let prviEror = document.querySelector('.error');
console.log(prviEror);

let noviEror = document.getElementsByClassName('error')
console.log(noviEror);
console.log(noviEror[0]);



//3. Dohvatiti poslednji red u tabeli

let poslednjiRed = document.querySelectorAll('tr');
console.log(poslednjiRed);
console.log(poslednjiRed[poslednjiRed.length -1]);

let poslednjiRedDrugiNacin = document.querySelector('table tr:last-child');
console.log(poslednjiRedDrugiNacin);


// 4. Dohvatiti sve linkove na stranici
let sviLinkovi = document.querySelectorAll('a');
console.log(sviLinkovi);

// 5, Dohvatiti sve slike na stranici
let sveSlike = document.querySelectorAll('img');
console.log(sveSlike);



p1.innerHTML = "Promenjen <span>tekst</span> paragrafa.";

sviLinkovi.forEach(link=>{
    link.href = "https://www.google.com";
    link.target = "_blank";


    //css stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    // ceo css u jednoj linkiji
    link.style = "color: red; background-color: yellow;"

    //preko metode     (PARAMETAR KOJI ZELIM DA MENJAM , " SVOJSTVO PARAMETRA")
    link.setAttribute('name', 'link2');
    link.setAttribute('style', "color:red;");
});

sveSlike.forEach(slike=>{
    slike.setAttribute('style','width: 300px;')
});


//1. 
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);

sviParagrafi.forEach(p=>{
    p.innerHTML += "VAZNO!!!";
});

//2. 
let sviErori = document.getElementsByClassName('error');

let noviEroriNiz = Array.from(sviErori);

noviEroriNiz.forEach(h=>{
    h.innerHTML+= '<h1 style="color:red">ERROR</h1>'
});

//3. 

let parag =  document.querySelectorAll('p');

let br = 0;
for(let i=0; i< parag.length; i++){
    parag[i].innerHTML += `<span style="font-weight: bold; color: red; background-color: #333";>${(i+1)**2}</span>`;
};

parag.forEach((el,i)=>{
    el.innerHTML += (i+1)**2;
});

//4. 

sveSlike.forEach(sl=>{
    sl.setAttribute('alt', 'Neka slika')
});

//5. 
sviParagrafi.forEach(p=>{
    p.style.color = `purple`;
});

//6.

let parniPar = document.querySelectorAll('p');
for(let i = 0; i < parniPar.length; i++){
    if(i % 2 ==0){
        parniPar[i].style.backgroundColor = "green";
    }else{
        parniPar[i].style.backgroundColor ="red";
    };
};

console.log(parniPar);

// PREKO NTH CHILD

// parniPar = document.querySelectorAll('p:nth-child(even)');
// parniPar.forEach(el=>{
// el.style.backgroundColor= "blue";
// });

// let neparniPar = document.querySelectorAll(`p:nth-child(odd)`);
// neparniPar.forEach(el=>{
//     el.style.backgroundColor = "orange";
// });



//7. Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none. Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta

sviLinkovi.forEach((l,i)=>{
    l.style.padding = `5px`;
    l.style.fontSize = `18px`;
    l.style.textDecoration = `none`;
    if(i%2 ==0){
        l.style.backgroundColor = "green";
        l.style.color = "purple";
    }else{
        l.style.backgroundColor = "blue";
        l.style.color = "white";
    };
});

//8. Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju

sveSlike.forEach(s=>{
    if(s.src.indexOf('.png') > -1 || s.src.indexOf('.PNG') > -1){
        s.style.border = "red 2px solid";
    };

    // if(s.src.includes(".png")){
    //     s.style.border = "red 2px solid"
    // };
});

//9. Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank


sviLinkovi.forEach(l=>{
    if(l.target == "_blank"){
        l.target = "_top";
    }else{
        l.target = "_blank";
    };
});


//10. Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati: Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici. U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje. U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele

let imena = ["Nikola", "Jelena", "Vlada", "Stefan"];
// let noviLink =  `< href='#'>`;
// noviLink+=`<a>`;
let noviLink = `<a id="linkic" href="https://github.com/">NOVI LINK</a>`; // NOVI LINK
document.body.innerHTML+= noviLink;

imena.forEach(i=>{
    if(i.indexOf('s')== 0|| i.indexOf('S') ==0){
        console.log('Hello'); // ULAZI I ISPUNJAVA OVAJ USLOV, ISPISUJE U KONZOLI HELLO
        console.log(noviLink);
        document.getElementById('linkic').style.color = "orange";
        // noviLink.style.color = "orange"; // ALI NECE DA PROMENI BOJU LINKA NA EKRANU
    }
    // if(i.startsWith("S") || i.startsWith("s")){
    //     document.body.innerHTML += `<a href="#" target="_blank"> ${i}</a>`;
    // }else{
    //     document.body.innerHTML += `<a href="#"> ${i}</a>`;
    // };
    // if(i[0] == "S" || i[0] == "s"){
    //     document.body.innerHTML += `<a href="#" target="_blank"> ${i}</a>`;
    // }else{
    //     document.body.innerHTML += `<a href="#"> ${i}</a>`;
    //};
});

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.

let lista = `<ul>`;

imena.forEach((ime,i)=>{
    if(i%2 == 0){
        lista += `<li style="color:red">${ime}</li>`
    }else{
        lista += `<li style="color:blue">${ime}</li>`
    }
});
lista += "</ul>";
document.body.innerHTML+= lista;


// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success


sviParagrafi.forEach((el, i)=>{
    if(i%2 ==0){
        el.classList.add('error')
    }else{
        el.classList.add('success')
    }
});

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

let prviPar = document.querySelectorAll('p:nth-child(1)');
prviPar.forEach(el=>{
    el.style.fontSize = "15px";
})
let drugiPar = document.querySelectorAll('p:nth-child(2)');
drugiPar.forEach(el=>{
    el.style.fontSize = "20px";
})
let treciPar = document.querySelectorAll('p:nth-child(3n)');
treciPar.forEach(el=>{
    el.style.fontSize = "25px";
})

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))

// sviParagrafi.forEach(p=>{
//     console.log(p);
    
//     if(p.indexOf('error') > -1){
//         p.classList.add('error');
//     }else if(p.indexOf('success') > -1){
//         p.classList.add('success');
//     }
// });




// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

sviParagrafi.forEach(el=>{
    el.classList.toggle('error');
});
