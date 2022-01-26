import generateImage from "./general.js";

function generate_list (parent) {
    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    ul.style.overflow = "hidden"; // da bi mogao na li  float left
    parent.appendChild(ul);
    return ul;
};

function generate_item (parent, src) {
    let li = document.createElement('li');
    li.style.float = "left";
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
};



export {generate_list, generate_item};
