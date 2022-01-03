let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-1,-1,11,8,-31],

    //1. 
    prosek: function(){
        let suma = 0;
        let element = this.temperature;
        element.forEach(el=>{
            suma+= el;
            
        });
        console.log(suma /element.length);
    },

    //2.
    iznadProseka: function (){
        let element = this.temperature;
        let br = 0;
        let suma = 0;
        for(let i =0; i< element.length; i++){
            suma+= element[i];
            if(element[i] > suma /element.length){
                br++;
            }
        }
        return br;
    },

    //3.
    maximum: function(){
        let element = this.temperature;
        let br = 0;
        let max = element[0];
        for (let i = 1; i< element.length; i++) {
            if(element[i] >= max){
                max = element[i];
            };   
            
        }
        for(let i = 1; i< element.length; i++){
            if(max == element[i]){
                br++;
            }
        };
        console.log(`Bilo je ${br} merenja sa maximalnom temperaturom.`);
    },

    //4. 
    between: function(a,b){
        let element = this.temperature;
        let br = 0;
        element.forEach(el=>{
            if(a < el && el < b){
                br++;
            }
        });
        console.log(`Postoji ${br} temperatura izmedju ${a} i ${b}.`);
    },

    //5. 
    toplo: function(){
        // if(this.iznadProseka() > this.temperature.length/2){
        //     return true;
        // }else{
        //     return false;
        // }

        return (this.iznadProseka() > this.temperature.length/2);
    },

    //6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function(){
        let br = 0;
        for(let i =0; i < this.temperature.length; i++){
            if(this.temperature[i] <= 0){
                br++;
            }
        }
        if(br === this.temperature.length){
            return true;
        }else{
            return false;
        }
    },

    //isti zadatak na prostiji nacin
    leden2: function (){
        for(let i = 0; i< this.temperature.length; i++){
            if(this.temperature[i] > 0){
                return false;
            }
        }
        return true;
    },

    //7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

    tropski: function(){
        let br = 0;
        for(let i =0; i < this.temperature.length; i++){
            if(this.temperature[i] >= 24){
                br++;
            }
        }
        
        if(br === this.temperature.length){
            return true;
        }else{
            return false;
        }
    },

    //8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

    // temperature: [-10,-1,11,8,7]
    nepovoljan: function(){
        let element = this.temperature;
        for(let i = 0; i < element.length; i++){
            if((element[i] - element[i+1]) > 8 || (element[i] - element[i+1]) < -8){
                return true;
            }else{
                return false;
            };
        };
    },

    // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

    //[-10,-1,11,8,7],
    neuobicajen: function (){
        let neuobicajen =0;
       for(let i = 0; i < this.temperature.length; i++){        
        if(this.temperature[i] < -5 && this.kisa === true){
            neuobicajen ++;
        }else if(this.oblacno == true && this.temperature[i] > 25){
            neuobicajen ++;
        }else if(this.kisa === true && this.oblacno === true && this.sunce === true){
            neuobicajen ++;
        }
       };
       return(neuobicajen > 0) ? true : false;
    },
};

dan.prosek();

dan.maximum();
dan.between(-7,7);
console.log(dan.temperature.length);
console.log(`Bilo je ${dan.iznadProseka()} merenja iznad proseka`);
console.log(dan.toplo());
console.log(dan.leden());
console.log(dan.leden2());

console.log(dan.tropski());
console.log(dan.nepovoljan()); 
console.log(dan.neuobicajen());

let maxtemp = Math.max(...dan.temperature);
console.log(maxtemp);










