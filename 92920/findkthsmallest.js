const kthSmallets = (root, k, result = []) => {
  if (root !== null) {
    kthSmallets(root.left, k, result);
    result.push(root.val); //  this is the step missing, pushing the value, initalize the result and pass it down with each call
    kthSmallets(root.right, k, result);
  }
  return result[k - 1];
};

//flatten binary tree
// answer is on algoexpert

//kadanes algorightm
// answer is on algoexpert as well
