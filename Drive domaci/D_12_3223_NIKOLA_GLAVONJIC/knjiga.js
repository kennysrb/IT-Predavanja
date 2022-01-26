export class Knjiga{
    constructor(n,a,g,b,c){
        this.naslov = n;
        this.autor = a;
        this.god_izdanja = g;
        this.broj_strana = b;
        this.cena = c;
    }

    set naslov(n){
        this._naslov = n;
    }
    get naslov(){
        return this._naslov;
    }

    set autor(a){
        this._autor = a;
    }
    get autor(){
        return this._autor;
    }

    set god_izdanja(g){
        this._god_izdanja = g;
    }
    get god_izdanja(){
        return this._god_izdanja;
    }

    set broj_strana(b){
        this._broj_strana = b;
    }
    get broj_strana(){
        return this._broj_strana;
    }

    set cena(c){
        this._cena = c;
    }
    get cena(){
        return this._cena;
    }

    stampaj(){
        console.log(this);
    }

    obimna(){
        if(this.broj_strana >600){
            return true;
        }
    }

    skupa(){
        if(this.cena >8000){
            return true;
        }
    }

    dugacko_ime(){
        if(this.autor.length > 18){
            return true;
        }
    }
};
