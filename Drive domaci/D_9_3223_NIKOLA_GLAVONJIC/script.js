// 1. Zadatak Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.


let niz = ["meso", "jaja", "biftek", "voce", "povrce"];

let kupovina = niz => {
    let ul = `<ul>`;
    niz.forEach(el => {
        ul += `<li>${el}</li>`;
    });
    ul += `</ul>`;
    document.body.innerHTML += ul;
}

kupovina(niz);
// 2. Zadatak Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let ekipe = ["Crvena Zvezda", "Patlidzan", "Radnicki", "Denver"];

let liga = niz => {
    let table = `<table style = " width: 30%; margin: auto; background-color:  rgb(58, 29, 29); color: white; align-items: center;";><tr><th style="font-size: 2em;
    padding: 10px;">Liga bez briga</th></tr>`;
    niz.forEach(el => {
        table += `<tr style=" background-color:#666;"><td style="text-align: center;
        padding: 20px;
        font-weight: bold;
        font-size: 1.2em;">${el}</td></tr>`;
    })
    table += `</table>`;
    document.body.innerHTML += table;
}

liga(ekipe);

// 3. Zadatak Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.



let adreseSlike = ["https://upload.wikimedia.org/wikipedia/commons/f/f3/Alex_Ovechkin_2018-05-21.jpg", "https://images.thestar.com/Gp0cb7ukwbIia65V6K0vNpRBetE=/1280x1024/smart/filters:cb(1638874864961)/https://www.thestar.com/content/dam/thestar/sports/hockey/opinion/2021/12/05/inside-the-nhl-alex-ovechkins-contract-might-be-a-capital-offence-and-jason-spezzas-love-of-the-game/ovechkin.jpg", "https://sportshub.cbsistatic.com/i/r/2020/02/13/15f08284-1ecb-48a4-bb64-874726fa1879/thumbnail/1200x675/98e24b912cd094134c686f7ceee2e422/gettyimages-1193579487.jpg"];

let slike = niz => {
    
    niz.forEach(el => {
        document.getElementById("slike").innerHTML += `<img width="200px" src="${el}"></img>`
    });
};

slike(adreseSlike);



