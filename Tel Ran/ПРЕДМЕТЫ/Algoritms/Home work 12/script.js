// Реализовать DFS inorder, preorder and postorder

// function inorder(tree) {
// }


// function preorder(tree) {
// }


// function postorder(tree) {
// }


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  dfsInorder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  dfsPreorder() {
    let result = [];

    function traverse(node) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  dfsPostorder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }

    traverse(this.root);
    return result;
  }
}


// Пример использования:


let tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

// console.log(tree.dfsInorder()); // [3, 6, 8, 10, 15, 20]
// console.log(tree.dfsPreorder()); // [10, 6, 3, 8, 15, 20]
// console.log(tree.dfsPostorder()); // [3, 8, 6, 20, 15, 10]