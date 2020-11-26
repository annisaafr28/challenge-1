let a = 4, b = 100000, r = 3;
let jumlah = 0;

for (let x = a; x <= b; x = x * r){
    console.log(x)
    jumlah += x;
}

console.log("---------------------");
console.log("Jumlah deret = " + jumlah);