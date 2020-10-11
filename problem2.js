/*
A self-dividing number is a number that is divisible by every digit it contains. 
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number,
 including the bounds if possible.

Example
Input: left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

function selfDividingNums(left, right) {
  const nums = [];

  while (left <= right) {
    if (selfDividingNum(left)) {
      nums.push(left);
    }

    left++;
  }

  return nums;
}

function selfDividingNum(num) {
  let numCopy = num;

  while (numCopy) {
    const mod = numCopy % 10;
    if (num % mod !== 0 || mod === 0) {
      return false;
    }
    numCopy = numCopy - mod;
    numCopy = Math.floor(numCopy / 10);
  }

  return true;
}

console.log(selfDividingNums(1, 22));
