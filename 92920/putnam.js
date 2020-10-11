/**

Let's say I gave you a array of numbers. There is a guarenteed to be at least one duplicate number in the array. Suppose you are scanning the array from left to right, return the first number that appears twice

[1,1] -> 1
[1,1,3,3] -> 1
[1,3,4,5,3,4,5,6] -> 3







const findFirstDuplicate = (arr) => {
    
    let viewed = {}
    
    
    // {1: true}
    
   

        for (let num of arr){  // 1,1
            if(viewed[num]){
                return num
            
        } else {
            viewed[num] = true
        }
            
            
    
    
}
    
    
    
let arr1 = [1,1]// -> 1
let arr2 = [1,1,3,3]// -> 1
let arr3 = [1,3,4,5,3,4,5,6] //-> 3
    
    console.log(findFirstDuplicate(arr1))
    console.log(findFirstDuplicate(arr2))
    console.log(findFirstDuplicate(arr3))


**/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**

      a
  b      c
 d e    f g
 
 a->b->d
 a->b->e
 a->c>f
 a->c->g
 
 
 
      20
  10      40
 30 100    5  10 
 
**/

// DFS algorithm
/**
1. Base Case
2. Call the function in itself
3. As you call the function, you approach one of the base cases
**/

const findAllPaths = (root, path = "") => {
  let left = root.left;
  let right = root.right;

  if (!left && !right) {
    console.log(path + root.value);
  } else {
    if (left) {
      findAllPaths(left, path + root.value);
    }

    if (right) {
      findAllPaths(right, path + root.value);
    }
  }
};

const findAllPathsIterative = (root) => {
  let stack = [[root, ""]];

  while (stack.length > 0) {
    let record = stack.pop();
    let node = record[0];
    let path = record[1];

    let left = node.left;
    let right = node.right;

    if (!left && !right) {
      console.log(path + node.value);
    }
    if (right) {
      stack.push([right, path + node.value]);
    }
    if (left) {
      stack.push([left, path + node.value]);
    }
  }
};

const test_root_node = new Node("A");
const b_node = new Node("B");
const c_node = new Node("C");
test_root_node.left = b_node;
test_root_node.right = c_node;
findAllPathsIterative(test_root_node);
