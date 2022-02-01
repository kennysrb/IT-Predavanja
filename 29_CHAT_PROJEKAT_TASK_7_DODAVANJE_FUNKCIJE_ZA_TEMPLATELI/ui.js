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
    let date = data.created_at.toDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let HTMLli = `<li>${data.username}: ${data.message}
    <br>
    ${h}:${min}
    </li>`;
    this.ul.innerHTML += HTMLli;
  }
}
