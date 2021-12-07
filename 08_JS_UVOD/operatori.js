console.log('pozz iz operatora');

let a = 3, b = 6;  //u istoj liniji koda mogu da se deklarisu 2 promenljive
console.log(a*b);

b = b / a;
console.log(a, b); // a = 3; b = 2;

b = b * a + a;

console.log(a, b);

b = (a - 2 *b) /b;
console.log(a , b);


//MENJANJE VREDNOSTI
a = 9;
// a = a + 10;
console.log(a);
a+=10 //UVECAVANJE VREDNOSTI ISTE PROMENLJIVE
console.log(a);

b = 2.5;
b = b / a;

b /= a;

console.log(b);


//UVECAVANJE VREDNOSTI ZA 1
//1. NACIN
a = a + 1;
console.log(a);

//2. NACIN
a +=1;
// 3. NACIN
a++;
// 4. NACIN
++a;
console.log(a);


let c = 5;
console.log(c++); //prvo se iskoristi stara vrednost promenljive u izrazu pa se onda vrednost promenljive poveca
console.log(c);

let d = 3;
console.log(++d); //prvo se vrednost promenljive uveca za jedan a onda se nova vrednost koristi u izrazu
console.log(d);

c = 4;
d = 3;

x = (c++) * (--d); // (4) * (2) = 8;
console.log(c,d,x); // c = 5 , d = 2, x = 8;


console.log(7 % 2); // % pokazuje ostatak od podele 7 sa 2 7 = 3 * 2 + 1

console.log(9 % 2);

console.log(180 % 60); // 180 = 3 * 60 + 0

//Prof 56 % 13 --> (0, 1, 2, 3....12)

console.log(365 % 7);


// STEPENOVANJE

console.log(4 ** 3);
c = 3;

d=(c ** 3) + 1;
console.log(d);





















