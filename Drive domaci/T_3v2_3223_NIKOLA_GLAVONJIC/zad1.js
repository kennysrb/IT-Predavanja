//1. ZADATAK Napisati program koji ispisuje sve recepte čiji naziv sadrži slovo “s”, a broj sastojaka je strogo veći od 2.


let recepti = [
    { naziv: "kolac", sastojci: ["jaja", "brasno", "mleko", "secer"] },
    { naziv: "kajgana", sastojci: ["jaja", "so"] },
    { naziv: "pire",  sastojci: ["krompir", "mleko", "maslac", "so"] },
    { naziv: "espreso", sastojci: ["kafa", "mleko"] },
    { naziv: "kacamak", sastojci: ["palenta", "so", "mast"] }
  ];


  console.log(recepti);
  

  let receptiNaSlovo = (arr, slovo)=>{
      arr.forEach(r=>{
        if(r.naziv.includes(slovo)){
            console.log(r.naziv);  
        }
      })
  };

  receptiNaSlovo(recepti, "s")
  




