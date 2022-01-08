//CVECE INPUT
let input_ruze = document.getElementById('ruze');
let input_ljiljani = document.getElementById('ljiljani');
let input_gerberi = document.getElementById('gerberi');

//POKLONI INPUT

let input_bombonjera = document.getElementById('bombonjera');
let input_cokolada = document.getElementById('cokolada');
let input_sampanjac = document.getElementById('sampanjac');

//PLACANJE INPUT
let placanje = document.querySelectorAll("input[name='placanje']");
let input_kartica = document.getElementById('kartica');
let input_kes = document.getElementById('kes');

//BUTTONS
let btn_izracunaj = document.getElementById('izracunaj');
let btn_reset = document.getElementById('reset');

//PORUDZBINA
//slike
let slike_ruze = document.getElementById('ruze_slike');
let slike_gerberi = document.getElementById('gerberi_slike');
let slike_ljiljani = document.getElementById('ljiljani_slike');

//cene
let p_bez_popusta = document.getElementById('cena_bez_popusta');
let p_popust = document.getElementById('cena_sa_popustom');

let sum;

//POKLONI
let pokloni = document.getElementById('izabrani_pokloni');
console.log(pokloni);


let ruza = "./ruza.jpg";
let gerber = "./gerber.jpeg";
let ljiljan = "./ljiljan.jpg";
let coko = "./cokolada.png";
let bomb = "./bombonjera.jpeg";
let samp = "./sampanjac.jpg";
let slike;



btn_izracunaj.addEventListener('click', (e)=>{
    btn_izracunaj.disabled = true;
    e.preventDefault();
    sum = 0;
    sum += input_ruze.value*150;
    sum += input_ljiljani.value*120;
    sum += input_gerberi.value*70;
    if(input_bombonjera.checked){
        sum+= 500;
    };
    if(input_cokolada.checked){
        sum+= 500;
    };
    if(input_sampanjac.checked){
        sum+= 500;
    };

    // ispis cena
    let cena_sa_popustom = 0;
    if(input_kartica.checked && sum >=2000){
        cena_sa_popustom = sum - (sum*10/100);
        p_bez_popusta.innerHTML = `Cena bez popusta je: ${sum}`;
        p_popust.innerHTML = `Cena sa popustom je: ${cena_sa_popustom}`;
    }else{
        p_bez_popusta.innerHTML = `Cena bez popusta je: ${sum}`;
    };

    if(input_kes.checked){
        p_popust.style = `display:none;`
    }

    // dodavanje slika
    
    if(input_ruze.value > 0){        
        for(let i =0; i<input_ruze.value; i++){
            slike = document.createElement('img');
            slike.src = ruza;
            slike.style = "width: 25px";
            ruze_slike.appendChild(slike);
        }
    };

    if(input_ljiljani.value > 0){        
        for(let i =0; i<input_ljiljani.value; i++){
            slike = document.createElement('img');
            slike.src = ljiljan;
            slike.style = "width: 25px";
            ljiljani_slike.appendChild(slike);
        }
    };

    if(input_gerberi.value > 0){        
        for(let i =0; i<input_gerberi.value; i++){
            slike = document.createElement('img');
            slike.src = gerber;
            slike.style = "width: 35px";
            gerberi_slike.appendChild(slike);
        }
    };
    
    // dodatni pokloni
    if(input_bombonjera.checked){
        slike = document.createElement('img');
        slike.src = bomb;
        slike.style = "width: 50px";
        pokloni.appendChild(slike);
        // pokloni.innerHTML += `+ Bombonjera <br>`;
    }
    if(input_cokolada.checked){
        slike = document.createElement('img');
        slike.src = coko;
        slike.style = "width: 50px";
        pokloni.appendChild(slike);
        // pokloni.innerHTML += `+ Cokolada <br>`;
    }
    if(input_sampanjac.checked){
        slike = document.createElement('img');
        slike.src = samp;
        slike.style = "width: 50px";
        pokloni.appendChild(slike);
        // pokloni.innerHTML += `+ Sampanjac`;
    }
});



