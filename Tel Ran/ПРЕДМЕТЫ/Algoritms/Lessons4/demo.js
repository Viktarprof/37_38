// space complexity
// estimate of additional (except memory for input data) memory which algotihm requires
// оценка дополнительной (кроме входных данных) памяти

function reverseArray(arr) {
    let newArr = []  // space complexity O(1)
    for (let i = arr.length; i > 0 ; i--) { 
        newArr[i] = arr[i]; // space complexity O(n)
    }
    const newArrLength = newArr.length // space complexity O(1)
    console.log("newArrLength " + newArrLength)
    return newArr;
}
// array required O(n) n length of array - memory data
// newArr requires O(n) of additional memory
// newArr требует O(n) дополнительно памяти


// merge sort
// arr [14,38,21,17,9,6,19,33,41]
// left = [14,38,21,17] ; right = [9,6,19,33,41] 
// left = [14,38] ; right = [21,17] ; left = [9,6,19], right = [33,41]

// assume that array of two elements is small enough to sort
// скажем, что массив достаточно мал, чтобы его отсортировать
// "small enough" means we can sort quickly
// examples
// - array from 1 element already sorted, [2], [5]
// - array of 2 elements is small enough we can sort in one operation
// [a,b] if a <= b then already sorted else swap the elements

// left = [14,38] ; right = [21,17] ; left = [9,6,19], right = [33,41]
// left = [14,38] ; right = [17,21] ; left = [9, 6] ; right = [19] ; right = [33,41]
// left = [14,38] ; right = [17,21] ; left = [6, 9] ; right = [19] ; right = [33,41] // sort [9, 6]

// merge operation - merging two sorted arrays
// операция объединения отсортированных массивов

// arrA = [a1, a2, a3], arrB [b1, b2, b3]  - sorted array
// 1) compare a2 and b1
// if a1 < b1 then a1 < b2 and a1 < b3 because b1 < b2 and b1 < b3 because arrB is sorted
// a1 < b1 means the a1 is minimum наименьший элемент массивов
// 2) compare a2 and b1
// if a2 < b1 then a2 is less than every element in arrB
// 3) compare a3 and b1
// if a3 > b1 then b1 goes in result array
// 4) compare a3 and b2
// if a3 > b2 then b2 goes in result array
// 5) compare a3 and b3
// if a3 > b3 then b3 goes in result array

// result = [a1,a2,b1, b2, b3, a3]

// time complexity O(n), n - arrA.length + arrB.length
function merge(arrA, arrB) {
    //...
}

// merge example continues here
// left = [14,38] ; right = [17,21] ; left = [6, 9] ; right = [19] ; right = [33,41]
// [14,17,21,38] ; [6,9,19] ; [33,41] // merged left and right
// [6,9,14,17,19, 21, 38] ; [33, 41] // merged two arrays
// [6,9,14,17,19,21,33,38,41]

// merge sort pseudocode
    // if arr.length == 1 then arr 
    // if arr.length == 2 then sorted arr

    // midIndex = arr.length / 2
    // leftArr = mergeSort(arr[0...midIndex])
    // rightArr =  mergeSort(arr[midIndex]...arr.length)
    // result = []
    // for i = 0...leftArr.length, j = 0...rightArr.length 
    //  if leftArr[i] < rightHalf[j] 
    //      result[i+j] = leftArr[i]
    //      i++
    //  else 
    //      result[i+j] = rightHalf[j] 
    //      j++
    // result

    // [14,38,21,17,9,6,19,33,41]
    function mergeSort(arr) {
        // base case of recursion
        // базовый случай рекурсии
        if (arr.length === 1 || arr.length === 0) {
            return arr
        }
        else if (arr.length === 2) {
            if (arr[0] <= arr[1]) {
                return arr
            }
            else {
                // return [arr[1],arr[0]]
                const tmp = arr[0]
                arr[0] = arr[1]
                arr[1] = tmp
                return arr
            }
        }

        // divide array in two half делим массив на две части
        const length = arr.length // 9
        const midIdx = length / 2 // 4
        // const leftHalf = arr.slice(0,midIdx) // [14,38,21,17,]
                // const rightHalf = arr.slice(midIdx, length) // [9,6,19,33,41] - alternative
        const leftHalf = []
        for(let i = 0; i < midIdx; i++) {
            leftHalf.push(arr[i])
        }
        // leftHalf = [14,38,21,17]

        const rightHalf = []
        for(let j = midIdx; j < length; j++) {
            rightHalf.push(arr[j])
        }
        // rightHalf = [9,6,19,33,41]


        // recursive call
        const leftHalfSorted = mergeSort(leftHalf)
        // leftHalfSorted = [14,17,21,38]
        const rightHalfSorted = mergeSort(rightHalf)
        // rightHalfSorted = [6,9,19,33,41]

        // merge leftHalfSorted and rightHalfSorted
        return mergeSortedArrays(leftHalfSorted,rightHalfSorted)
    }

    function mergeSortedArrays(sortedArrA, sortedArrB) {
        const result = []
        let lastI = 0
        let lastJ = 0
        for(let i = 0, j = 0; i < sortedArrA.length && j < sortedArrB.length;) {
            if (sortedArrA[i] === sortedArrB[j]) {
                result.push(sortedArrA[i])
                lastI = i++ 
            }
            else {
                result.push(sortedArrB[j])
                lastJ = j++
            }
        }

        // sortedArrA = [6,9,14,17,19, 21, 38] ;sortedArrB = [8,15] 
        // 6 < 8 => [6]
        // 9 < 8 => [6,8]
        // 9 < 15 => [6,8,9]
        // 14< 15 => [6,8,9,14]
        // 17 < 15 => [6,8,9,14,15]
        // [6,8,9,14,15,17,19, 21, 38 - copy tail

        // sortedArrA = [1,2,3], sortedArrB = [4,6,8,9,12,14,15,16]
        if (lastI === sortedArrA.length) {
            for (let k = lastJ; k < sortedArrB.length; k++) {
                result.push(sortedArrB[k])
            }
        }

        // sortedArrA = [4,6,8,9,12,14,15,16], sortedArrB = [1,2,3] 
        if (lastJ === sortedArrB.length) {
            for(let k = lastI; k < sortedArrA.length; k++) {
                result.push(sortedArrA[k])
            }
        }

        return result
    }

// sort by rating 
let users = [
    {
    "name": "Vasya",
    "rating" : 5683
},
{
    "name": "Vasya",
    "rating" : 456
}
]

// quick sort 
//1) choose (somehow) an element - pivot
// выбрать (как-нибудь, например, последний элемент массива) - опорный
// 2) divide array in two parts (not halfs!)
// разделить массив на две части
// в левую половину все элементы меньше опорного
// в правую половину все элементы больше опорного
// опорный элемент может быть как слева, так и справа

// arr = [15,8, 94, 72, 12,42,83, 56]
// 56 - опорный
// left = [15,8,12,42] - 42 - опорный ; right = [56, 94,72,83] 83 - опорный
// left = [15,8,12] right = [42]; left [56, 72] right = [94,83]


function binarySearch(sortedArr, key) {

    if (sortedArr.length === 0) {
        return -1 // it means no key in sortedArr
    }

    const midIndex = sortedArr.length / 2
    const midElement = sortedArr[midIndex]
    if (key === midElement) {
        return midIndex
    }
    else if (key > midElement) {
        binarySearch(sortedArr.slice(midIndex + 1, sortedArr.length), key)
    }
    else {
        binarySearch(sortedArr.slice(0, midIndex), key)
    }
}



