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
    // TODO
}

function getBalanceFactor(node) {
    if (node) {
        return getHeight(node.left) - getHeight(node.right)
    }
    else return 0
}

function getHeight(node) {
    if (node) {
        return node.height
    }
    else return 0
}

function balanceTree(key, node) {
    // update height
    node.height = 1 + Math.max(getHeight(node.left),
        getHeight(node.right))

    // get balance factor
    const balanceFactor = getBalanceFactor(node)
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


    }
    else if (balanceFactor < -1) {
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

    }
    else return node
}

function insert(key, current) {
    if (!current) {
        current.key = key
        return current;
    }

    if (key < current.key) {
        const newSubTreeRoot = insert(key, current.left)
        current.left = newSubTreeRoot
    }
    else if (key > current.key) {
        const newSubTreeRoot = insert(key, current.right)
        current.right = newSubTreeRoot
    }

    const subTreeRootAfterBalancing = balanceTree(key, current);
    return subTreeRootAfterBalancing
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




