let dan = {
  datum: "2021/12/23",
  kisa: true,
  sunce: false,
  oblacno: false,
  temperature: [-1, -1, 11, 8, 31],

  //7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

  tropski: function () {
    let br = 0;
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] >= 24) {
        br++;
      }
    }

    if (br === this.temperature.length) {
      return true;
    } else {
      return false;
    }
  },

  //8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

  // temperature: [-10,-1,11,8,7]
  nepovoljan: function () {
    let element = this.temperature;
    for (let i = 0; i < element.length - 1; i++) {
      if (element[i] - element[i + 1] > 8 || element[i] - element[i + 1] < -8) {
        return true;
      } else {
        return false;
      }
    }
  },

  // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

  //[-10,-1,11,8,7],
  neuobicajen: function () {
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] < -5 && this.kisa === true) {
        return true;
      } else if (this.oblacno == true && this.temperature[i] > 25) {
        return true;
      } else if (
        this.kisa === true &&
        this.oblacno === true &&
        this.sunce === true
        ) {
          return true;
        }
      }
      return false;
  },
};

// console.log(dan.tropski());
// console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
