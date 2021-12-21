// 1. ZADATAK Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m. Pozvati funkciju i njen rezultat ispisati u konzoli.

let sumaKuba = (n,m) => {
    let suma = 0;
    for(let i = n; i <= m; i++){
      suma+= i**3;
    }
    return suma;
  }
  
  
  console.log(`Suma kubova je ${sumaKuba(2,5)}`);
  
  
  // 2. ZADATAK Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja. Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
  
  let date = new Date();
  
  let godina = date.getFullYear();
  console.log(godina);
  
  let godine = godRodjenja => {
    let brGod = godina - godRodjenja;
    return brGod;
  }

  console.log(godine(1992));
  
  
  //3. ZADATAK Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

  let deljiv = (n,m,k) => {
      let brojac =0;
      for(let i = n; i <= m; i++){
          if(i%k == 0){
            brojac++;
          }
      }
      console.log(brojac);
  }
  
  deljiv(1,10,9);

  // 4. ZADATAK Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.


  let pilot = (sat1, min1, sat2, min2) => {
        let pocetak = (sat1 * 60) + min1;
        let kraj = (sat2 * 60) + min2;
        let vremeLeta = kraj - pocetak;
        console.log(`Let je trajao ${Math.floor(vremeLeta/60)}h ${vremeLeta %60} minuta.`);
        }

  pilot(11,56,22,20);
  
  
  // 5. ZADATAK Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.
  
 


  let jaban2 = (j,b) =>{
      let jabuka = j * 0.8;
      let banana = b;
      if(jabuka/2 < b/3){
          console.log(`MOguce je napraviti ${Math.floor(jabuka/2)}`);
      }else{
        console.log(`MOguce je napraviti ${Math.floor(banana/3)}`);
      }
  }

  jaban2(10,2);

  
  // 6. ZADATAK 
 