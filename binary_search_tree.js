// Node class
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* Binary Search Tree class
** @param {number} value - Number to be added to tree
*/
class BST{
  constructor(value){
    this.root = new Node(value);
    this.count = 1;
  }

  size(){
    return this.count;
  }

  // Insert a value into the BST
  insert(value){
    this.count++;
    let newNode = new Node(value);

    const searchTree = node => {
      if (value < node.value){
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if(value > node.value){
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }
    searchTree(this.root);
  }

  // Find the min value in the BST
  min(){
    let currentNode = this.root;
    while (currentNode.left){
      currentNode = node.left;
    }
    return currentNode.value;
  }

  // Find the max value in the BST
  max(){
    let currentNode = this.root;
    while (currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  // Check if the BST contains a value
  contains(value){
    let currentNode = this.root;

    while (currentNode){
      if (currentNode.value === value) return true;
      if (value < currentNode.value){
        currentNode = currentNode.left;
      } else if (value > currentNode.value){
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // Depth First Search - In Order
  //left, root, right
  dfsInOrder(){
    let result = new Array();

    const traverse = node => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // Depth First Search - Pre Order
  //root, left, right
  dfsPreOrder(){
    let result = new Array();

    const traverse = node => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // Depth First Search - Post Order
  // left, right, root
  dfsPostOrder(){
    let result = new Array();

    const traverse = node =>{
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  bfs(){
    let result = new Array();
    let queue = new Array();

    queue.push(this.root);
    while (queue.length){
      let currentNode = queue.shift();

      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  }
}
