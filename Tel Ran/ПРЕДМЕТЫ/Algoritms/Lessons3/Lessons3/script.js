function factorialRecursion (n){
    if ( n === 1)
    return 1 // base case
    else return n * factorialRecursion(n-1)
}

// recursive stak of calls
// stack - data srtucture FIFO (last in first out)
// stack support two operations push and pop
// -push adds elements to stack;
// -pop removes and retrieves last element from stack

// принцип стопки книг
//stack = ()
//stack.push(5) | stack = (5)  - last in = 5
//stack.push(4) | stack = (4,5)   -  last in = 4
//stack.push(7) | stack = (7, 4, 5)  -   last in = 7
//res = stack.pop() | res = 7; stack = (4, 5)
//res = stack.pop() | res = 4; stack = (5)

// stack push() -  pop ()  -  algorithmic complexity.
// stack has size  n - how long does it take to push an element? O(1)
// stack has size  n - how long does it take to pop an element? O(1)


class stack {

    arr=[];
    // O(n)
    push = function (element) {
        // for (let i = 1; i < arr.length; i++){
        //     arr[i] = arr[i-1] // whole arr will be filled by zero element
        // }
        // i = 0 . arr[1] = arr[0];
        // i = 1 . arr[2] = arr[1];
        // i = 2 . arr[3] = arr[2];
  
        arr[0] = element;

        for (let i = arr.length -1; i >0; i--){
        // arr.length = 5;
        //i = 4 arr [5]  = arr [4]
        //i = 3 arr [4]  = arr [3]
        }
    }
        // O(n)
        pop = function () {
        let result = arr[0];
        for (let i = 0;  i < arr.length; i++){
            arr[i-1] = arr[i]
            }
        }
    

}





class StackSecondImpl {
    arr=[]
// O(1)
    push = function(elem){
        arr[curIdx == 0]{arr[0] - elem}
        currIdx++
        // arr.push()
        
        // push(5) => arr = [5], currIdx = 1
        // push(7) => arr = [5,7], currIdx = 2
    }
// O(1)
    pop = function(){
        // arr = [5,7,6,8,9, _], cirrIdx = 5
        currIdx-- // if currIdx = 0 then arr[-1]
        if (curIdx < 0){
            //throw Error('Stack is empty')
            //или
            return undefined
        }
        return arr[currIdx]
    }
    // stack = [5,7,8,9] currIdx =4
    // var res = stack.pop() => arr  = [5,7,8,9], currIdx = 3 (in case return arr[])
}








