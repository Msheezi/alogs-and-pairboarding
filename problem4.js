// Given an array of length N, with integer values between 0 and N(not including 0 or N),
//

// return any integer that appears in the array more than once, i.e.

// [1, 2, 3, 3, 4] => 3
// [3, 1, 2, 2, 5, 5] => 2 or 5(either is fine)
// [0, 1, 2] => invalid input(can’t have 0)

// time complexity in linear time and linear space

/*
  [1, -1, 3, 3, 4] => 3

  def whatever(nums):
    indexNum = nums[0]
    counter = 0

    while indexNum not equal -1 and counter < N
        nextIndex = nums[indexNum] // 2
        nums[indexNum] = -1
        indexNum = nums[nextIndex] // 
        counter++

    return indexNum
*/

const mulitipleInteger = (array) => {
  let counter = {};

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current === 0) return 0;

    //if key exists return with the current value, implies we've already seen the value
    //if key doesn't exist, initialize and set to 1
    if (current in counter) {
      return current;
    } else {
      counter[current] = 1;
    }
  }
};

console.log(mulitipleInteger([1, 2, 3, 3, 4]));
// console.log(mulitipleInteger([0, 1, 2]));
