//RSA Encryption System
let N;
var e;
var d;
let FN;
var message;

function genRandom(min, max) {
  //A function to generate random number with up and down limits
  return Math.floor(Math.random() * (max - min) + min);
}

function areCoprime(num1, num2) {
  const smaller = num1 > num2 ? num1 : num2;
  for (let ind = 2; ind < smaller; ind++) {
    const condition1 = num1 % ind === 0;
    const condition2 = num2 % ind === 0;
    if (condition1 && condition2) {
      return false;
    }
  }
  return true;
}

function RSA(p, q) {
  N = p * q;
  FN = (p - 1) * (q - 1);
  let cond = false;
  while (cond === false) {
    e = genRandom(2, FN);
    let coprime1 = areCoprime(e, FN);
    let coprime2 = areCoprime(e, N);
    if (coprime1 === true && coprime2 === true) {
      console.log(`your lock is ${e}`);
      cond = true;
      break;
    }
  }
  cond = false;
  while (cond === false) {
    d = genRandom(e, 100);
    if ((d * e) % 6 === 1) {
      console.log(`your key is ${d}`);
      cond = true;
      break;
    }
  }
}

function encrypt(msg) {
  var enc = [];
  for (i = 0; i < msg.length; i++) {
    let code = msg.charCodeAt(i);
    console.log(code);
    code = Math.pow(code, e) % N;
    enc.push(code);
  }
  message = enc.toString();
  console.log(message);
  //console.log(String.fromCharCode(message));
  console.log("Batas");
  return message;
}

function decrypt(msg) {
  var dec = [];
  for (i = 0; i < msg.length; i++) {
    let code = Math.floor(Math.pow(code, d)) % N;
    dec.push(code);
  }
  message = enc.toString();
  console.log(message);
  console.log(String.fromCharCode(message));
}
let surat = "halo";
RSA(2, 7);
let cipher = encrypt("halo");
console.log(cipher);
let normal = decrypt(cipher);
