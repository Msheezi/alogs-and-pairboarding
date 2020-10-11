/*
write a function that takes in an array and an integer
find a pair of integers in the array that when summed euqal the target number

create an object
iterate through array
each item,
    find difference between target and current
    check if difference in object
        if so, return current and difference
        if not add property current to object
    if no matches, return empty array at end
    time O(n) space o(n) worst case

*/

// function pairSums(array, targetSum) {
//   alreadySeen = {};
//   for (num of array) {
//     let potentialMatch = targetSum - num;
//     if (potentialMatch in alreadySeen) {
//       return [num, potentialMatch];
//     } else {
//       alreadySeen[num] = true;
//     }
//   }
//   return [];
// }

function pairSums(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum1 = array[left];
    let sum2 = array[right];
    let currentSum = sum1 + sum2;
    if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    } else {
      return [sum1, sum2];
    }
  }

  return [];
}

console.log(pairSums([1, 2, 3, 4, 5, 6, 7], 10)); //[7,3]
console.log(pairSums([1, 2, 3, 4, 5, 6, 7], 11)); // [7,4]
console.log(pairSums([1, 2, 3, 4, 5, 6, 7], 12)); //[7,5]
console.log(pairSums([1, 2, 3, 4, 5, 6, 7], 100)); // []
