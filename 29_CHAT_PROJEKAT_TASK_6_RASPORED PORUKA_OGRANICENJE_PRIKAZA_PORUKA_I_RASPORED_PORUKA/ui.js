export class chatUI {
  constructor(ul) {
    this.ul = ul;
  }
  //setter
  set ul(ul) {
    this._ul = ul;
  }
  //getter
  get ul() {
    return this._ul;
  }

  //METODE
  templateLI(data) {
    let li = `<li>${data.message}</li>`;
    this.ul.innerHTML += li;
  }
}
