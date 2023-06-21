const person = {
  firstName: "Alvin",
  lastName: "Kosman",
  age: 17,
};

console.log("Hello, " + person.firstName);
let num1 = 30;
console.log(num1 + 5);
console.log("1" + num1);

console.log("");

let str1 = true;
console.log(`Im weriting code in ${!str1}`);

console.log("");

function hitungHarga(harga, diskon) {
  console.log(`Harga = ${harga} \nDiskon = ${diskon * 100}%`);
  let Tharga = harga * diskon;
  console.log("Harga Stlh Diskon = ", harga - Tharga);
}
hitungHarga(10000, 0.5);

console.log("");

function pajak(harga, persen) {
  console.log(`Harga = Rp.${harga} \nPersen = ${persen * 100}%`);
  let pajak = harga * persen;
  console.log("Pajak = Rp.", pajak);
  return harga + pajak;
}
result = pajak(10000, 0.1);
console.log("Harga Stlh Pajak = Rp.", result);

console.log("");

const timeNow = new Date();
const win95launch = new Date(1995, 7, 24);

console.log(timeNow);
console.log(win95launch);

console.log("");

let status = 400;
if (status === 200) {
  console.log("OK!");
} else if (status === 400) {
  console.log("Error!");
} else {
  console.log("Unknown Status");
}

console.log("");

for (i = 1; i <= 5; i++) {
  console.log(`${i}. Saya berjanji tidak akan mengulangi lagi `);
}

console.log("");

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

let phoneBrand = ["Samsung", "Huawei", "Xiaomi", "Oppo", "Apple"];
