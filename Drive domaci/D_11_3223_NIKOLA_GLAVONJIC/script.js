//Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
// ○ Naziv knige,
// ○ Autora knjige,
// ○ Putanja do sličice,
// ○ Polje – indikator da li je knjiga pročitana ili ne (true ili false).


// ➢ Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.


// ➢ U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.


// ➢ Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.


// ➢ Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.

// Napomena: Sav kod je potrebno uraditi u js fajlu. Takođe, potrebno je kreirati DOM stablo preko ugrađenih metoda (nije dozvoljeno kreirati HTML kod kroz innerHTML svojstvo)!

let knjiga1 = {
    naziv: "Hari Poter",
    autor: "J.K.Rowling",
    putanja: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg",
    procitana: true
};

let knjiga2 = {
    naziv: "LOTR",
    autor: "Tolkin",
    putanja: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_5hoXCpHF37fOCl7Ci0aSa_Hl7NLv-o_8w&usqp=CAU",
    procitana: true
};

let knjiga3 = {
    naziv: "Na Drini cuprija",
    autor: "Ivo Andric",
    putanja: "https://edicija.rs/wp-content/uploads/2020/07/knjiga_na_drini_cuprija_i_travnicka_hronika.jpg",
    procitana: true
};

let knjiga4 = {
    naziv: "Magija Beograda",
    autor: "Momo Kapor",
    putanja: "https://s.cdnmpro.com/129900401/p/m/2/magija-beograda-momo-kapor~473662.jpg",
    procitana: false
};

let knjige = [knjiga1,knjiga2,knjiga3,knjiga4];


// ➢ Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.

let tabela = document.createElement('table');
let tr;
let td;
let td2;
let slika;
let paragraf;

for(let i =0;i<knjige.length; i++){
    tr = document.createElement(`tr`);
    tabela.appendChild(tr);
    td = document.createElement('td');
    td2 = document.createElement('td');
    tr.appendChild(td);
    tr.appendChild(td2);
    slika = document.createElement('img');
    
    // ➢ U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
    
    //slika
    td.appendChild(slika);
    slika.src = knjige[i].putanja;
    slika.style = "width: 150px;";
    //naziv autor
    paragraf = document.createElement('p');
    td2.appendChild(paragraf);
    paragraf.appendChild(document.createTextNode(knjige[i].autor + " " + knjige[i].naziv));
    
    
    // ➢ Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
    
    knjige[i].procitana ? paragraf.style = "color: blue" : paragraf.style = "color:#333";

    // ➢ Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.

    i%2 ==0 ? tr.style = "background-color: #999;" : tr.style = "background-color: #777";
}

tabela.style= "width: 90%;"
tabela.style= "margin: auto;"
document.body.appendChild(tabela);


