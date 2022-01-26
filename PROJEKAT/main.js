import {generateImage, surf,bord,travel} from "./modules/general.js";
import {generate_list, generate_list_item} from "./modules/list.js";

generateImage(surf);
generateImage(travel);
generateImage(bord);

let div = document.createElement('div');
document.body.appendChild(div);
let lista = generate_list(div);


function listica (parent, src) {
    let li = document.createElement('li');
    let slika = document.createElement('img');
    slika.src = src;
    li.appendChild(slika);
    parent.appendChild(li);
};

listica(lista, surf);