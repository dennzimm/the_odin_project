/* ===== Problem 4: Largest palindrome product =====
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit 
 * numbers is 9009 = 91 × 99. Find the largest palindrome made 
 * from the product of two 3-digit numbers.
 */

function isPalindrom(val) {
  var str = '';

  if (isNaN(val))
    str = val;
  else
    str = val.toString();
  
  return str == str.split('').reverse().join('');
}

function findLargestPalindrome(lowerLimit, upperLimit) {
  var largestPalindrom = 1;

  for (var i = lowerLimit; i < upperLimit; i++) {
    for (var j = lowerLimit; j < upperLimit; j++) {
      var product = i * j;

      if (isPalindrom(product) && product > largestPalindrom)
        largestPalindrom = product;
    }
  }

  return largestPalindrom;
}

console.log(findLargestPalindrome(10,100));
console.log(findLargestPalindrome(100,1000));