//Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godina.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.

class Datum {
    constructor(d,m,g){
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }

    //dan

    set dan(d){
        if(this.mesec === 2){
            if(d > 0 && d <= 29){
                this._dan = d;
            }else{
                this._dan = 1;
            }
        }else{
            if(d > 0 && d <= 31){
                this._dan = d;
            }else{
                this._dan = 1;
            }

        } 
    }

    get dan(){
        return this._dan;
    }

    //mes

    set mesec(m){
        if(m > 0 && m <= 12){
            this._mesec = m;
        }else{
            this._mesec = 1;
        }
    }
    get mesec(){
        return this._mesec;
    }

    //god

    set godina(g){
        this._godina = g;
    }
    get godina(){
        return this._godina;
    }
};

export default Datum;

