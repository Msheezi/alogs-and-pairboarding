const dfs = (node, target, check=false)=> {
  if (!node) return 
  
  
  
  if(node.left){ 
    if (check){
      if (visited.hasOwnProperty(node.value)){
        return true
      }
    }
    visited[target-node.value] = true
    dfs(node.left)
  }
  
  if(node.right){
     if (check){
      if (visited.hasOwnProperty(node.value)){
        return true
      }
    }
    visited[target-node.value] = true
    dfs(node.right)
  } 
  
}

  dfs(tree1, target)
  
  dfs(tree2, target, true)
  
  return false

}
