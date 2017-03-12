/* ===== Problem 3: Largest prime factor =====
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function isPrime(number) {
  if (number < 2)
    return false;

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0)
      return false;
  }

  return true;
}

function largestPrimeFactor(number) {
  var lpf = 1;

  for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if ((number % i === 0)) {
      var p = number / i;
      
      if (isPrime(p) && p > lpf)
        lpf = p;
      else if (isPrime(i) && i > lpf)
        lpf = i;
    }
  }

  return lpf;
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));