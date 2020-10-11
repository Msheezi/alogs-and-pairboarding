const array = [1, 2, 3, 4, 5, 5];

const createMap = (arr) => {
  let result = new Map();

  for (const num in arr) {
    result.set(num, true);
  }
  return result;
};

console.log(createMap(array));
