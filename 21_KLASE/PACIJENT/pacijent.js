export class Pacijent{
    constructor(i,v,t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i){
        this._ime = i;
    }
    get ime(){
        return this._ime;
    }

    set visina(v){
        if(v>0 && v<250){
            this._visina = v;
        }else{
            this._visina = 150;
        }
    }
    get visina(){
        return this._visina;
    }

    set tezina(t){
        if(t>0 && t<550){
            this._tezina = t;
        }else{
            this._tezina = 100;
        }
    }
    get tezina(){
        return this._tezina;
    }

    //METODE

    stampaj(){
        console.log(`Ime: ${this.ime}; Visina: ${this.visina}cm; Tezina: ${this.tezina}kg;`);
    }

    stampajListu(){
        let htmlLista =`
        <ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>
        `;
        return htmlLista;
    }
    bmi(){
        return this.tezina / ((this.visina/100)**2);
    }
    kritican(){
        if(this.bmi()<15 || this.bmi()>40){
            return true;
        }else{
            return false;
        }
    }
}
