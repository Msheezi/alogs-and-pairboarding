/* coin change
    given an array of coins and a total amount, 
    return the fewest number of coins to get to the target
*/

// return -1 if cannot evenly divide by coins given

const coinChange = (arr, target) => {
  let sortedArr = arr.sort((a, b) => b - a);
  let count = 0;
  let change = target;

  for (let i = 0; i < sortedArr.length; i++) {
    let current = sortedArr[i];
    if (current > change) {
      continue;
    }

    count += Math.floor(change / current);
    change = change % current;
  }
  if (change > 0) {
    return -1;
  }
  return count;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([7], 14));
// [1,2,5], 11 => 3
// [2]
