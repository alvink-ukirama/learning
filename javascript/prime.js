// Mills Prime Number Generator
function MillsPrime(p) {
  const MU = 1.3063778838630806904686144926;
  result = Math.floor(Math.pow(MU, p));
  return result;
}

//Fermat Test : Prime Number Test
function Fermat(p) {
  let prime = false;
  for (a = 1; a < p; a++) {
    test = Math.pow(a, p) - a;
    if (test % p == 0 || test % 1 !== 0) {
      prime = true;
      break;
    }
  }
  return "prime is " + prime;
}
result = MillsPrime(81);
result = Fermat(result);
console.log(result);
