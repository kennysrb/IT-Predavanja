let n = 1;
let m = 28;

let proizvod = 1;

while (n <= m) {
  if (n % 7 == 0 && n % 3 != 0) {
    proizvod = proizvod * n;
  }
  n++;
}
console.log(proizvod);

// ZADATAK 2

n = 1;
m = 18;

let zbir = 0;

while (n <= m) {
  if (n % 3 == 0 && n % 7 != 0) {
    zbir = zbir + n;
  }
  n++;
}

console.log(`ZBir je ${zbir}`);
