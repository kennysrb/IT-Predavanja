// 1. Zadatak Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.

// 2. Zadatak Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

// 3. Zadatak Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.

let shoppingList = ["meso", "jaja", "biftek", "voce", "povrce"];
let ekipe = ["Crvena Zvezda", "Patlidzan", "Radnicki", "Denver"];
let adreseSlike = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/Alex_Ovechkin_2018-05-21.jpg",
  "https://images.thestar.com/Gp0cb7ukwbIia65V6K0vNpRBetE=/1280x1024/smart/filters:cb(1638874864961)/https://www.thestar.com/content/dam/thestar/sports/hockey/opinion/2021/12/05/inside-the-nhl-alex-ovechkins-contract-might-be-a-capital-offence-and-jason-spezzas-love-of-the-game/ovechkin.jpg",
  "https://sportshub.cbsistatic.com/i/r/2020/02/13/15f08284-1ecb-48a4-bb64-874726fa1879/thumbnail/1200x675/98e24b912cd094134c686f7ceee2e422/gettyimages-1193579487.jpg",
];

function pisi(poruka) {
  document.body.innerHTML += poruka;
};
function loguj(poruka){
  console.log(poruka);
};

// 1. ZADATAK ELSE IF PETLJA ZA TABELU

let zadatak123 = (niz, type) => {
  if (type === "ul") {
    let type = `<ul>`;
    niz.forEach((el) => {
      type += `<li>${el}</li>`;
    });
    type += `</ul>`;
    return type;
  }

  // 2. ZADATAK ELSE IF PETLJA ZA TABELU
  else if (type === "table") {
    let type = `<table style = "margin-top: 30px; width: 30%; margin: auto; background-color:  rgb(58, 29, 29); color: white; align-items: center;";><tr><th style="font-size: 2em;
    padding: 10px;">Liga bez briga</th></tr>`;
    niz.forEach((el) => {
      type += `<tr style=" background-color:#666;"><td style="text-align: center;
      padding: 20px;
      font-weight: bold;
            font-size: 1.2em;">${el}</td></tr>`;
    });
    type += `</table>`;
    return type;
  }

  // 3. ZADATAK ELSE IF PETLJA ZA SLIKE
  else if (type === "img") {
    let ispis = "";
    niz.forEach((el) => {
      ispis += `<${type} width="200px" src="${el}"></${type}>`;
    });
    return ispis;
  } else {
    // nije potrebno za domaci ali eto :)
    let ispis = " ";
    alert(
      `Molim vas unesite parametre "ul" , "table" ili "img" za ispis domaceg zadatka. :)`
    );
    return ispis;
  }
};

pisi(zadatak123(shoppingList, "ul"));
pisi(zadatak123(ekipe, "table"));
pisi(zadatak123(adreseSlike, "img"));
// pisi(zadatak123(adreseSlike, "")); // pogresan unos test

loguj(zadatak123(ekipe,"table"));


