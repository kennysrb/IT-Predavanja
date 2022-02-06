export class ChatUI {
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
  dateFormat(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    //dodavanje 0 ispred jednocifrenih vrednosti

    d = String(d).padStart(2, "0");
    m = String(m).padStart(2, "0");
    h = String(h).padStart(2, "0");
    min = String(min).padStart(2, "0");
    let date_string = `${d}.${m}.${y}. - ${h}:${min}`;
    return date_string;
  }

  templateLI(doc) {
    let id = doc.id;
    let data = doc.data();
    let date = data.created_at.toDate();
    let date_output = this.dateFormat(date);
    let today = new Date();
    let htmlLi = document.createElement("li");
    htmlLi.classList.remove("sent");
    if (data.message != "") {
      if (date.getDate() === today.getDate()) {
        htmlLi.setAttribute("id", id);
        htmlLi.innerHTML = `<span>${data.username}</span>: ${data.message}
        <br>
        ${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")} <i class="fas fa-trash-alt trash"></i>
          `;
          if(data.username == localStorage.username){
            htmlLi.classList.add("sent");
          }
        this.ul.appendChild(htmlLi);
      } else {
        htmlLi.setAttribute("id", id);
        htmlLi.innerHTML = `<span>${data.username}</span>: ${data.message}
          <br>
    ${date_output}
    <i class="fas fa-trash-alt trash"></i>`;
    htmlLi.classList.remove('sent');
          if(data.username == localStorage.username){
            htmlLi.classList.add("sent");
          }
          this.ul.appendChild(htmlLi);
      }
    }
  }
  delete() {
    this.ul.innerHTML = "";
  }
}
