/* ===== Problem 5: Smallest multiple =====
 * 2520 is the smallest number that can be divided 
 * by each of the numbers from 1 to 10 without any remainder. 
 * What is the smallest positive number that is evenly 
 * divisible by all of the numbers from 1 to 20?
 */

function findSmallestMultiple(limit) {
  var smallestMultiple = 1;
  var foundSmallestMultiple = false;

  for (var i = 1; !foundSmallestMultiple ;i++) {
    for (var j = 1; i % j === 0; j++) {
      if (j === limit)
        foundSmallestMultiple = true;
      smallestMultiple = i;
    }
  }

  return smallestMultiple;
}

console.log(findSmallestMultiple(10));
console.log(findSmallestMultiple(20));