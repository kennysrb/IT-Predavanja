class Film {
    constructor(i,r,g,o){
        this.ime = i;
        this.reziser = r;
        this.godina = g;
        this.ocene = o;
    }

    set ime(i){
        this._ime = i;
    }
    get ime(){
        return this._ime;
    }

    set reziser(r){
        this._reziser = r;
    }
    get reziser(){
        return this._reziser;
    }

    set godina(g){
        if(g<1800){
            this._godina = 1800;
        }else{
            this._godina = g;
        }
    }
    get godina(){
        return this._godina;
    }

    set ocene(o){
        this._ocene = o;
    }
    get ocene(){
        return this._ocene;
    }



    // DODAVANJE JEDNE OCENE
    dodajOcenu(novaOcena){
        this._ocene.push(novaOcena);
    }

    stampaj(){
        console.log(this);
    } 

    prosek(){
        let sum = 0;
        this.ocene.forEach(oc=>{
            sum+= oc;
        })
        return sum / this.ocene.length;
    }

    


};

export default Film;