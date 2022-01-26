/*
import { generate_list, generate_item as generate_list_item} from "./modules/list.js";
import {generateTable, generateTableRow, generate_item as generateTableItem} from "./modules/table.js";

let list = generate_list(document.body);
generate_list_item(list, "img/surf.jpg");
generate_list_item(list, "img/travel.jpeg");
generate_list_item(list, "img/bord.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "img/surf.jpg")
generateTableItem(tr, "img/travel.jpeg")
generateTableItem(tr, "img/bord.jpg")
*/

// PRAVLJENJE MODUL OBJEKATA

// import * as List from "./modules/list.js";
// import * as Table from "./modules/table.js";

// console.log(List);


// let list = List.generate_list(document.body);
// List.generate_item(list, "img/surf.jpg");
// List.generate_item(list, "img/bord.jpg");
// List.generate_item(list, "img/surf.jpg");


// let table = Table.generateTable(document.body);
// let tr = Table.generateTableRow(table);
// Table.generate_item(tr, "img/surf.jpg");
// Table.generate_item(tr, "img/bord.jpg");
// Table.generate_item(tr, "img/surf.jpg");



import * as Div from "./modules/div.js";

console.log(Div);


let div = Div.generate_div(document.body);
console.log(div);

Div.add_img(div, "img/bord.jpg");
Div.add_img(div, "img/surf.jpg");
Div.add_img(div, "img/bord.jpg");