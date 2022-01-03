let student1 = {
    ime: "Ninoslav",
    prezime: "Obradovic",
    godStudija: 4,
    ocene: [8, 10, 9, 6, 7],
    skole: ["Kralj Petar", "Vuk Karadzic", "Dositej"],
    prosek: function () {
      let suma = 0;
      this.ocene.forEach((el) => {
        suma += el;
      });
      return suma / this.ocene.length;
    },
  };
  
  let student2 = {
    ime: "Cedomir",
    prezime: "Ribic",
    godStudija: 5,
    ocene: [10, 10, 9, 10, 7],
    skole: ["Kralj Petar", "Vuk Karadzic", "Dositej"],
    prosek: function () {
      let suma = 0;
      this.ocene.forEach((el) => {
        suma += el;
      });
      return suma / this.ocene.length;
    },
  };
  let student3 = {
    ime: "Aleksandar",
    prezime: "Micic",
    godStudija: 4,
    ocene: [8, 8, 9, 7, 7],
    skole: ["Kralj Petar", "Vuk Karadzic", "Dositej"],
    prosek: function () {
      let suma = 0;
      this.ocene.forEach((el) => {
        suma += el;
      });
      return suma / this.ocene.length;
    },
  };
  let student4 = {
    ime: "Djordje",
    prezime: "Teofilovic",
    godStudija: 3,
    ocene: [8, 7, 9, 6, 6, 7],
    skole: ["Kralj Petar", "Vuk Karadzic", "Dositej"],
    prosek: function () {
      let suma = 0;
      this.ocene.forEach((el) => {
        suma += el;
      });
      return suma / this.ocene.length;
    },
  };
  
  let student5 = {
    ime: "Iva",
    prezime: "Blecic",
    godStudija: 3,
    ocene: [10, 10, 10],
    skole: [ "Vuk Karadzic", "Dositej", "stagod"],
    prosek: function () {
      let suma = 0;
      this.ocene.forEach((el) => {
        suma += el;
      });
      return suma / this.ocene.length;
    },
  };
  
  let student = [student1, student2, student3, student4, student5];
  
//   let prosecan = (arr) => {
//     arr.forEach(el => {
//         let brojac = 0;
//         el.ocene.forEach(ocene => {
//             if (ocene == 10 || ocene == 6) {
//                 brojac++;
//             }
//         })
//         if (brojac == 0) {
//             console.log(el.ime)
//         }
//     });
// };

// prosecan(student);

let bivseSkole = (arr, ime) =>{
    arr.forEach(s=>{
        s.skole.forEach(a=>{
            if(a.indexOf(ime) > -1){
                console.log(s.ime);
            }

        })
    });
};

bivseSkole(student, "st");

