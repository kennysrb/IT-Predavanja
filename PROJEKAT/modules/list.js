function generate_list (parent) {
    let lista = document.createElement('ul');
    parent.appendChild(lista);
};

function generate_list_item (parent, src) {
    let li = document.createElement('li');
    li.innerHTML += src;
    parent.appendChild(li);
};

export {generate_list, generate_list_item};
