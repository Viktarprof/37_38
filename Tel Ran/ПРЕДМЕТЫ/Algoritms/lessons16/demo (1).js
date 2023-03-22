class Node {
    key // key is used to compare element in tree
    data
    left
    right
    height

    constructor(key, data) {
        this.key = key
        this.data = data
    }
}

function rotateLeft(node) { // node = A
    const leftChild = node.left // leftChild = B
    const tmp = leftChild.right // tmp = T2

    // LL turn
    leftChild.right = node
    node.left = tmp

    // update heights
    node.height = Math.max(getHeight(node.left),
        getHeight(node.right) + 1)
    leftChild.height = Math.max(getHeight(leftChild.left),
        getHeight(leftChild.right) + 1)

    // returns new root
    return leftChild
}

function rotateRight(node) {
    const rightChild = node.right
    const tmp = rightChild.left

    rightChild.left = node
    node.right = tmp

    node.height = Math.max(
        getHeight(node.left),
        getHeight(node.right) + 1)
    rightChild.height = Math.max(
        getHeight(rightChild.left),
        getHeight(rightChild.right) + 1)

    return rightChild;
}

function getBalanceFactor(node) {
    if (node) {
        return getHeight(node.left) - getHeight(node.right)
    } else return 0
}

function getHeight(node) {
    if (node) {
        // console.log("Height of node " + node.key + " = " + node.height)
        return node.height
    } else return 0
}

function balanceTree(key, node) {
    // update height
    node.height = 1 + Math.max(getHeight(node.left),
        getHeight(node.right))

    // get balance factor
    const balanceFactor = getBalanceFactor(node)
    // console.log("Balance of node " + node.key + " = " + balanceFactor)
    if (balanceFactor > 1) {
        // LL
        if (key < node.left.key) {
            return rotateLeft(node)
        }
        // LR
        else if (key > node.left.key) {
            const newSubTreeRoot = rotateRight(node.left)
            // if there is a tree above
            node.left = newSubTreeRoot
            return rotateLeft(node)
        }
    } else if (balanceFactor < -1) {
        // RR
        if (key > node.right.key) {
            return rotateRight(node)
        }
        // RL
        else if (key < node.right.key) {
            const newSubTreeRoot = rotateLeft(node.right)
            node.right = newSubTreeRoot
            return rotateRight(node)
        }

    } else return node
}

function insert(key, current, data) {
    // if (!current) {
    //     current.key = key
    //     return current;
    // }
    if (!current) {
        const leaf = new Node(key, data);
        leaf.height = 1;
        return leaf;
    }

    if (key < current.key) {
        const newSubTreeRoot = insert(key, current.left, data)
        current.left = newSubTreeRoot
    } else if (key > current.key) {
        const newSubTreeRoot = insert(key, current.right, data)
        current.right = newSubTreeRoot
    }

    const subTreeRootAfterBalancing = balanceTree(key, current);
    return subTreeRootAfterBalancing
}

function printTree(node) {
    // DFS in order
    if (node) {
        console.log("Key = " + node.key + " Data " + node.data)
        printTree(node.left)
        printTree(node.right)
    }
}

// insert(7, Node(20))
// current = Node(20), key = 7, 7 < 20 => true
//      current = Node(15), key = 7, 7 < 15 => true
//           current = Node(10), key = 7, 7 < 10 => true
//               current = Node(7)
//               return Node(7)
//           current = Node(10)
//           current.left = Node(7)
//           balanceTree(7, Node(10))
//           subTreeRootAfterBalancing = Node(10)
//           return Node(10)
//      current = Node(15)
//      current.left = Node(10)
//      balanceTree(7, Node(15))
//      subTreeRootAfterBalancing = Node(15)
//      return Node(15)
// current = Node(20)
// current.left = Node(15)
// balanceTree(7, Node(20))
// subTreeRootAfterBalancing = Node(15)
// return Node(15)

let root = new Node(20, null)

root = insert(23, root)
root = insert(15, root)
root = insert(17, root)
root = insert(10, root)
root = insert(7, root)

// printTree(root)

// console.log(root)


let rootLanguages = new Node(20, "Python")

rootLanguages = insert(23, rootLanguages, "Rust")
rootLanguages = insert(15, rootLanguages,"Java" )
rootLanguages = insert(17, rootLanguages, "JavaScript")
rootLanguages = insert(10, rootLanguages, "CoffeScript")
rootLanguages = insert(7, rootLanguages, "C++")

printTree(rootLanguages)

// find the node with the key = key
// and return its data
//
function searchByKey(key, node) {
    if (!node) {
        return undefined
    }
    if (key === node.key) {
        return node.data
    }
    else if (key < node.key) {
        return searchByKey(key, node.left)
    }
    else if (key > node.key) {
        return searchByKey(key, node.right)
    }
}

const res = searchByKey(17, rootLanguages)
console.log(res)

function searchByValue(data, node) {
    // pre order DFS
    if (node) {
        if (node.data === data) {
            return node.key
        }
        const leftRes = searchByValue(data, node.left)
        if (leftRes) {
            return leftRes
        }
        const rightRes = searchByValue(data, node.right)
        if (rightRes) {
            return rightRes
        }
        return 0
    }
}

const jsRating = searchByValue("JavaScript", rootLanguages)
console.log(jsRating)

const julRating = searchByValue("Julia", rootLanguages)
console.log(julRating)

// Asymptotic analysis
// searchByKey - O( log n) if tree is balanced, if not O(n)
// searchByValue - O(n)





