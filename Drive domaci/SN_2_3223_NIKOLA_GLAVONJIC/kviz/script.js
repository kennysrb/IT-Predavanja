let pitanjca = [
    {
        tekst: "Kako se zove glavni grad Srbije?",
        odgovori: ["Nis", "Beograd", "Novi Sad", "Kragujevac"],
        tacan : 1
    },
    {
        tekst: "Kako se zove glavni grad Makedonije?",
        odgovori: ["Skoplje", "Bec", "Budimpesta", "Rim"],
        tacan : 0
    },
    {
        tekst: "Kako se zove glavni grad Italije?",
        odgovori: ["Valensija", "Pariz", "Rim", "Madrid"],
        tacan : 2
    },
    {
        tekst: "Kako se zove glavni grad Bugarske?",
        odgovori: ["Mina", "Jovana", "Sofija", "Tanja"],
        tacan : 2
    },
    {
        tekst: "Kako se zove glavni grad Rusije?",
        odgovori: ["Jabuka", "Talin", "Smokva", "Moskva"],
        tacan : 3
    },
    {
        tekst: "Kako se zove glavni grad Kine?",
        odgovori: ["Minhen", "Peking", "Bukurest", "Micigen"],
        tacan : 1
    },
    {
        tekst: "Kako se zove glavni grad Japana?",
        odgovori: ["Okinava", "Talin", "Brizbejn", "Tokio"],
        tacan : 3
    },
    {
        tekst: "Kako se zove glavni grad Australije?",
        odgovori: ["Vasington", "Melburn", "Sidnej", "Kanbera"],
        tacan : 3
    },
    {
        tekst: "Kako se zove glavni grad USA?",
        odgovori: ["NY", "LA", "Miami", "Vasington"],
        tacan : 3
    },
    {
        tekst: "Kako se zove glavni grad Brazila?",
        odgovori: ["Lima", "Brazilija", "Bogota", "Cancun"],
        tacan : 1
    },
    {
        tekst: "Kako se zove glavni grad Perua?",
        odgovori: ["Lima", "Akapulko", "Kankun", "Tijuana"],
        tacan : 0
    },
    {
        tekst: "Kako se zove glavni grad Egipta?",
        odgovori: ["Kairo", "Marakes", "Akra", "Tel Aviv"],
        tacan : 0
    },
    {
        tekst: "Reka Dunav Protica kroz 10 zemalja.",
        odgovori: ["Da", "Ne"],
        tacan: 0
    },
    {
        tekst: "Indija je najmnogoljudnija drzava na svetu.",
        odgovori: ["Da", "Ne"],
        tacan: 1
    },
    {
        tekst: "Engleski je najpricaniji jezik na svetu.",
        odgovori: ["Da", "Ne"],
        tacan: 1
    },
    {
        tekst: "Na svetu postoji 7 kontinenata.",
        odgovori: ["Da", "Ne"],
        tacan: 0
    },
    {
        tekst: "Voda pokriva preko 70% Zemljine površine.",
        odgovori: ["Da", "Ne"],
        tacan: 0
    },
];



pitanjca.sort(() => 0.5 - Math.random());

let forma_input = document.querySelector(".kviz");
let pitanje;
let odg_div;
let odgovor;
let label;

let kviz_pitanja = arr => {
    let brojac_pitanja = 0;
    let brojac = 0;
    pitanje = document.createElement('h3');    
    for(let i =0; i< 5; i++){
        brojac_pitanja++;
        pitanje = document.createElement('h3');
        pitanje.innerHTML += `${brojac_pitanja}. ${arr[i].tekst}`;
        forma_input.appendChild(pitanje);
        odg_div = document.createElement('div');
        arr[i].odgovori.forEach((p,j)=>{
            brojac ++;
            odg_div.setAttribute('class', 'pon_odg');
            odgovor = document.createElement('input');
            odgovor.setAttribute('type','radio');
            odgovor.setAttribute('name',`${arr[i].tekst}`);
            label = document.createElement('label');
            odgovor.setAttribute('id',`odgovor${j}-${brojac}`);
            label.setAttribute(`for`,`${j}`);
            label.innerHTML = p;
            odg_div.appendChild(odgovor);
            forma_input.appendChild(odg_div);
            odg_div.appendChild(label);
            if(j ==0){
                document.getElementById(`odgovor0-${brojac}`).checked = true;
            };
            if(j == arr[i].tacan){
                odgovor.setAttribute('class','tacan');
            };
        });
    };
};
kviz_pitanja(pitanjca);

// let tacan_odg = document.getElementsByClassName('tacan');

let tacan_odg2 = document.querySelectorAll('.tacan');
console.log(tacan_odg2);

let noviRed = document.createElement('br');
forma_input.appendChild(noviRed);

let btn_submit = document.createElement('button');
btn_submit.classList.add('submit');
btn_submit.classList.add('btn');
btn_submit.innerHTML = 'Posalji odgovore';

let btn_reset = document.createElement('button');
btn_reset.classList.add('reset');
btn_reset.classList.add('btn');
btn_reset.innerHTML = 'Resetuj pitanja';

forma_input.appendChild(btn_submit);
forma_input.appendChild(btn_reset);

let resenje = document.querySelector(`.resenje`);
let p;
let rez;
let p_rez;


btn_submit.addEventListener('click', (e)=>{
    let br_tacnih = 0;
    e.preventDefault();
    let kviz_resenja = arr => {
    for (let i = 0; i < 5; i++){
        if(tacan_odg2[i].checked){
            br_tacnih++;
            p = document.createElement('p');
            p.innerHTML += `${i+1}. Tacno!`;
            p.style.color = "green";
            resenje.appendChild(p);
        }else{
            p = document.createElement('p');
            p.innerHTML += `${i+1}. Netacno!`;
            p.style.color = "maroon";
            resenje.appendChild(p);  
        }
    }
    rez = document.createElement('div');
    rez.setAttribute('class', 'rez');
    resenje.appendChild(rez);
    p_rez = document.createElement('p');
    if(br_tacnih >= 3){
        p_rez.innerHTML += `Cestitamo! Imali ste preko 50% tacnih odgovora.`;
        document.querySelector('.score').appendChild(p_rez);
        document.body.style.background = "green";
        p_rez.style.color = "green";
        alert('Cestitamo! Imali ste preko 50% tacnih odgovora.')
        
    }else if(br_tacnih <= 2){
        p_rez.innerHTML += `Nazalost, imali ste manje od 50% tacnih odgovora. <br> Pokusajte ponovo! <i class="fas fa-poo"></i>`;
        document.querySelector('.score').appendChild(p_rez);
        document.body.style.background = "maroon";
        p_rez.style.color = "white";
        alert('Nazalost, imali ste manje od 50% tacnih odgovora. Svoje rezultate mozete pogledati ispod kviza. :/')


    }
};
kviz_resenja(pitanjca);
});