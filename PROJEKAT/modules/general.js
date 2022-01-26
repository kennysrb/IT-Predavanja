let surf = "./img/surf.jpg";
let bord = "./img/bord.jpg";
let travel = "./img/travel.jpeg";


let generateImage = src =>{
    let slika = document.createElement('img');
    slika.src = src;
    slika.style.width = "300px";
    slika.style.marginRight = "20px";
    slika.style.marginTop = "50px";
    document.body.appendChild(slika);
};


export {generateImage,surf,bord,travel};

