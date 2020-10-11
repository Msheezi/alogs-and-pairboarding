var sumNumbers = function(root) {
if (!root) return 0; // if no tree, return zero
const paths = []; // keep track of paths

const stack = [[root, ""]]; // initialize stack with root node and empty string for path

while (stack.length > 0) {
  let [currNode, path] = stack.pop(); //get first node and assign currNode and path varialbles

  let left = currNode.left; // assign left
  let right = currNode.right; // assign right

  let currentVal = currNode.val.toString() //set the current node value to a string
  if (right) {
    stack.push([right, path + currentVal]); // create tuple for right node and push to stack
  }

  if (left) {
    stack.push([left, path + currentVal]);  // create tuple for left node and push to stack
  }

  if (!left && !right) {
    paths.push(parseInt(path + currentVal)); // if leaf, convert the completed path to integer push the completed path to the paths array
  }
}

let result = 0; // initialize the result counter
paths.forEach((num) => (result += num)); // loop through array and increment result with the path values

return result;
