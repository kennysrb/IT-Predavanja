import generateImage from "./general.js";

function generate_div(parent){
    let div = document.createElement('div');
    parent.appendChild(div);
    div.style = "display:flex; background: #333; justify-content: center; padding: 80px;border-radius: 15px; padding-left: 10px; padding-right: 10px; width: 55%; margin:auto";
    return div;
};


function add_img (parent, src){
    let img = document.createElement ('img');
    img.src = src;
    // img.style.width = "200px";
    img.style = "width: 200px; border: 2px solid white; border-radius: 5px; margin-right: 20px;"
    parent.appendChild(img);
    return img;
};

export {generate_div, add_img};