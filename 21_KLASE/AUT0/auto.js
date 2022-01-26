class Auto {
    constructor(m,b,ik,bv = 5){
        // this._marka = m;
        this.marka = m; // poziva se setter marka
        this.boja = b;
        this.imaKrov = ik;
        this.brojVrata = bv;
    }

    sviraj(){
        console.log(`Beep! Beep!`);
    }

    vozi(x){
        let m = this.marka;
        console.log(`${m} ide ${x} km/h.`);
    }

    stampaj(){
        console.log(`Auto marke ${this.marka}, boje: ${this.boja}, ${this.imaKrov}, broj vrata: ${this.brojVrata}`);        
    }

    //SETTER i GETTER za polje _marka

    set marka(m){ // IME ISTO KAO POLJE _MARKA SAMO BEZ DONJE CRTICE
        let m1 = m.trim();
        if (m1.length > 0){
            this._marka = m1;
        }else{
            this._marka = "Auto";
        }
    }

    get marka(){
        return this._marka;
    }

    // SETTER I GETTER ZA POLJE _BOJA
    
    
    set boja(b){
        let b1 = "Black";
        this._boja = b1;
    }
    
    get boja(){
        return this._boja;
    }
    
    // SETTER I GETTER ZA POLJE _IMAKROV

    set imaKrov(ik){
        if(ik === false){
            this._imaKrov = "Kabriolet";
        }else{
            this._imaKrov = "Regular";
        }
    }

    get imaKrov(){
        return this._imaKrov;
    }

    // SETTER I GETTER ZA POLJE _BROJVRATA

    set brojVrata(bv){
        if(bv > 0){
            this._brojVrata = bv;
        }else{
            this._brojVrata = 1;
        }
    }

    get brojVrata(){
        return this._brojVrata;
    }

   

    /*
    // Metoda koja postavlja vrednost polja_marka
    postaviMarku(m){
        let m1 = m.trim();
        if (m1.length > 0){
            this._marka = m1;
        }else{
            this._marka = "Auto";
        }
    }

    // Metoda koja cita vrednost polja_marka
    dohvatiMarku(){
        return this._marka;
    }
    */
};

export default Auto;
