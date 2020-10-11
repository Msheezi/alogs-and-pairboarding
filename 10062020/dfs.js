const dfs = (root) => {
  const stack = [[root], ""];
  let path = "";
  while (stack.length > 0) {
    let record = stack.pop();
    let node = record[0];
    let currPath = record[1];

    let left = node.left;
    let right = node.right;

    if (!right && !left) {
      console.log(currPath + node.value);
    }

    if (right) {
      stack.push([right, currPath + node.value]);
    }

    if (left) {
      stack.push([left, currPath + node.value]);
    }
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*

*/

const myTree = new Node("A");
const node_2 = new Node("B");
const node_2 = new Node("C");
const node_2 = new Node("D");
const node_2 = new Node("E");
const node_2 = new Node("F");
const node_2 = new Node("G");
const node_2 = new Node("H");
