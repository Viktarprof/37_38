// recursive stack of calls
// stack - data structure LIFO (last in first out)
// stack supports two operations push and pop
// - push adds element to stack
// - pop removes and retrieves last element from stack

// stack = ()
// stack.push(5) | stack = (5)  - last in = 5
// stack.push(4) | stack = (4, 5) -  last in = 4
// stack.push(7) | stack = (7, 4, 5)  - last in = 7
// res = stack.pop() | res = 7 ; stack = (4, 5)
// res = stack.pop() | res = 4; stack = (5)

// stack  push()  pop() - theoretic algorithmic complexity
// stack has size n - how long does it take to push an element? O(1)
// stack has size n - how long does it take to pop an element? O(1)


// whole arr will be filled by zero element


class StackFirstImpl {

    arr = []

    // O(n)
    push = function (element) {
        for(let i = arr.length - 1; i > 0; i--) {
            arr[i+1] = arr[i] 
            // arr.length =5
            // i = 4 arr[5] = arr[4]; // i = 3 arr[4] = arr[3]
        }
        arr[0] = element
    }

    // O(n)
    pop = function () {
        let result = arr[0]
        for( let i = 0; i < arr.length ; i++) {
            arr[i-1] = arr[i]
        }
        return result;
    }
}

class StackSecondImpl {

    arr = [] // array as data structure provides O(1) access by index
    currIdx = 0

    // O(1)
    push = function(elem) {
        arr[currIdx] = elem 
        currIdx++
        // arr.push()
        
        // push(5) =>  arr = [5], currIdx = 1
        // push(7) => arr = [5,7], currIdx = 2
    }

    // O(1)
    pop = function() {
        //arr = [5,7,6,8,9, _], currIdx = 5
        currIdx-- // if currIdx = 0 then arr[-1]
        if (currIdx < 0) {
            // throw Error("Stack is empty")
            return undefined
        }
        // return arr[currIdx]
        // stack = [5,7,8,9], currIdx = 4factorial
        // var res = stack.pop() => res = 9, arr = [5,7,8,9], currIdx = 3 

        let res = arr[currIdx]
        arr[currIdx] = undefined
        return res
    }

    // O(1)
    isEmpty = function() {
        currIdx === 0
    }

    // O(1)
    peek = function(params) {
        arr[currIdx - 1]
    }

    // example of pop operation
    // stack = (2,7,1,89,-4,6) => arr = [2,7,1,89,-4,6], currIdx = 6
    //stack.pop() => currIdx = 5, res = 6 (arr[5]), arr[5] = undefined, arr = [2,7,1,89,-4]

}

// recursive stack of calls

function factorial(n) {
    if (n === 1) return 1 // base case 
    else return n * factorial(n - 1)
}

// stackOfCalls
// factorial(5) => stackOfCalls = (5 * factorial(4))
// factorial(4) => stackOfCalls = (5 * factorial(4), 4 * factorial(3))
// factorial(3) => stackOfCalls = (5 * factorial(4), 4 * factorial(3), 3 * factorial(2))
// factorial(2) => stackOfCalls = (5 * factorial(4), 4 * factorial(3), 3 * factorial(2), 2 * factorial(1))
// factorial(1) => stackOfCalls = (5 * factorial(4), 4 * factorial(3), 3 * factorial(2), 2 * 1)
// stackOfCalls = (5 * factorial(4), 4 * factorial(3), 3 * 2 * 1)
// stackOfCalls = (5 * factorial(4), 4 * 3 * 2 * 1)
// stackOfCalls = (5 * 4 * 3 * 2 * 1)
// 120, stackOfCalls = ()

//tail recursion when last operation is recursive call

function tailRecursionExample(n) {
    if (n === 1) return 1 // base case
    else tailRecursionExample(n-1) // recursive call
}

function nonTailRecursionExample(n) {
    if ( n === 1) return 1 // base case
    else {
        let res = nonTailRecursionExample(n-1) // recursive call
        return res * res
    }
}
// tail recursion can be oprimized by execution environment (can ve rewriteen via iteration)
// хвостовая рекурсия может быть оптимизирована средой исполнений (можно переписать через циклы)

// Is it a tail recursion X
function factorial(n) {
    if (n === 1) return 1 // base case 
    else return n * factorial(n - 1) // last operation is *
}

// direct vs indirect recursion

// direct - function calls itself
// прямая рекурсия - функция саму себя

// indirect - function calls the other fucntion recursively 
// непрямая, косвенная - функция вызывает рекурсивно другую функцию 

// palindrome  казак 
// ['к','a','з','a','к'].slice(1,length -1) => ['a','з','a']
function isPalindrome(chars) { 
    if (chars.length === 0 || chars.length === 1) return true // base case
    if (chars[0] === chars [chars.length -1]) { // first and last are equal первая и последняя равны
        isPalindrome(chars.slice(1, chars.length -1)) // call isPalindrome without first and last
    } 
    else false
} 

// Hahoi tower
// rod = стержень
// перекладывает с первого на второй
// transfer allrings from first rod to second rod
function moveRing(firstRod, secondRod, thirdRod, numOfRings) {
    if (numOfRings === 1) {
        console.log("Move from firstRod to secondRod")
        var res = firstRod.pop()
        secondRod.push(res)
    }
    else {
        // move n - 1 rings from first to third
        this.moveRing(firstRod,thirdRod,secondRod,numOfRings - 1) 
        // move last ring from first to second
        var res = firstRod.pop()
        secondRod.push(res)
        //move n - 1 rings from third to second
        this.moveRing(thirdRod,secondRod, firstRod, numOfRings - 1)
    }
}

let A = [3,2,1]
let B = []
let C = []

moveRing(A, B, C, 3)
// moveRing(firstRod = A, secondRod = B, thirdRod = C, 3)
    //moveRing(firstRod = A, secondRod = C, thirdRod = B, 2) (168)
        // moveRing(firstRod = A, secondRod = B, thirdRod = C, 1)
        // numOfRings === 1 (true) => A = [3,2], B = [1], C = [] (163, 164)
    // (170, 171) => A = [3], B = [1], C = [2]
    // moveRing(firstRod = B,secondRod = C, thirdRod = A, 2)
        // moveRing(firstRod = B, secondRod = A, thirdRod = C, 1)
        // A = [3, 1], B = [], C = [2] (163, 164)
    // (170, 171)  => 
         


