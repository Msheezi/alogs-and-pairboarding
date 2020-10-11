/*
write a function that takes an array of integers and an integer that if two integers in the array
sum to the target sum, return the two integers in an array.  order does not matter

*/

// function pairSums(array, targetSum) {
//   const alreadySeen = {};
//   const pairedSums = [];
//   for (const num of array) {
//     let possibleMatch = targetSum - num;
//     if (possibleMatch in alreadySeen) {
//       pairedSums.push([num, possibleMatch]);
//     } else {
//       alreadySeen[num] = true;
//     }
//   }
//   return pairedSums;
// }

// function pairSums(array, targetSum) {
//   let left = 0;
//   let right = array.length - 1;
//   array.sort((a, b) => a - b);
//   let results = [];
//   console.log(array.sort((a, b) => a - b));
//   while (left < right) {
//     let currentSum = array[left] + array[right];
//     if (currentSum < targetSum) {
//       left += 1;
//     } else if (currentSum > targetSum) {
//       right -= 1;
//     } else if (currentSum === targetSum) {
//       results.push([array[left], array[right]]);
//       left += 1;
//       right -= 1;
//     }
//   }
//   return results;
// }

// time 0(n log n) space O(1)
function pairSums(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    } else if (currentSum === targetSum) {
      return [array[left], array[right]];
    }
  }
  return [];
}

console.log(pairSums([-1, 11, 3, 4, 5, 6, 10], 10));
