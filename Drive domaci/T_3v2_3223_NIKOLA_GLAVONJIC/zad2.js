// 2. ZADATAK



console.log('Drugi zadatak');

let visine = [
    { ime: "Pera", 
    visina: 189, 
    pol: "M", 
    prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } },
    { ime: "Laza", visina: 192, pol: "M", prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } }, 
    { ime: "Milka", visina: 164, pol: "Z",prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } },
    { ime: "Mika", visina: 176, pol: "M",prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } },
    { ime: "Sonja", visina: 178, pol: "Z",prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } },
    { ime: "Milica", visina: 166, pol: "Z",prosek(){
        let sum=0;
        this.visina.forEach(o=>{
            sum+=o;
        });
        return sum/this.length;
    } }
];

// Napisati funkciju koja ispituje da li je prosečna visina mušakaraca veća od prosečne visine žena

let prosecnaVis = arr =>{
    let prosekM = 0;
    let rezM = 0;
    let rezZ = 0;
    let prosekZ = 0;
    arr.forEach(a=>{
        if(a.pol == "M"){
            prosekM += a.visina;
            rezM = prosekM / a.length;
        }else if(a.pol == "Z"){
            prosekZ += a.visina;
            rezZ = prosekZ / a.length;
        }
    }
        if(rezM > rezZ){
            console.log('Visi su M');
            
        }
        
    )
}

prosecnaVis(visine);
	