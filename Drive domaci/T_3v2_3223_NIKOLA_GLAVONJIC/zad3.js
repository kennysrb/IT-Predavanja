//2. ZADATAK
console.log('Treci zadatak');

// 3. Izmeniti objekte u prethodnom zadatku tako da svaki objekat sadrži i polje plate koje je niz neto plata koje je svaka osoba zaradila u poslednjih 5 godina. Napisati funkciju koja ispisuje podatke o osobi koja ima najveću razliku između svoje minimalne i maksimalne plate.


let visine = [
    { ime: "Pera", visina: 189, pol: "M", plata: [100, 200, 300, 400, 500],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  },
    { ime: "Laza", visina: 192, pol: "M", plata: [200,400,600,800, 900],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  }, 
    { ime: "Milka", visina: 164, pol: "Z", plata: [1000,2000,3000,4000,5000],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  },
    { ime: "Mika", visina: 176, pol: "M", plata: [4000, 4000, 4000, 4000, 4000],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  },
    { ime: "Sonja", visina: 178, pol: "Z", plata: [2500, 3500, 4500, 5500],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  },
    { ime: "Milica", visina: 166, pol: "Z", plata: [2000,4000, 6000, 8000,10000],razlika(){
        let min = this.plata[0];
        let max = this.plata[0];  
        let razlika =0;     
        this.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        return razlika;
    }  }
];
console.log(visine[1].razlika());



let razlika = arr =>{
    
    arr.forEach(osoba=>{
        let min = osoba.plata[0];
        let max = osoba.plata[0];  
        let razlika =0;     
        osoba.plata.forEach(m=>{
            if(min > m){
                min = m;
            }
            if(max < m){
                max = m;
            }
            razlika = max - min;
        })
        console.log(razlika);


        //////

        if(osoba.razlika() <min)
    })
}

razlika(visine);