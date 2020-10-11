function firstMissingPositive(arr) {
  // create a for loop starting from 1;
  // use .includes to check if the integer exists in the array
  // if it doesnt then we return that integer
  // conditions: linear time and constant extra space

  for (i = 1; i < Number.MAX_VALUE; i++) {
    if (!arr.includes(i)) return i; // includes is o(n) making this o(n**2) solution
  }
}

// [7, 8, 9, 11, 12] => 1
// [3, 4, -1, 1] => 2

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([-3, -4, -1, -10]));
