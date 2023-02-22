// Given an array 'arr[]' of positive integers, flip each group of subarrays to size 'K.'
//
// Example 1:
// K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: The first group consists of elements
// 1, 2, 3. The second group consists of 4,5.
//
// Example 2:
// K = 3
// arr[] = {5,6,8,9}
// Output: 8 6 5 9
//
// Your task:
// To write a reverse (arr, k) function that takes 'arr[]' and 'K' as input and modifies the array into place.

function reverse(arr, k) {
    // for the last group is between current j and arr.length - 1
    // iterates over indexes where each group starts
    for (let j = 0; j < arr.length; j += k) {
        const groupBound = Math.min(arr.length - j, k);
        revertSubArrayOfSpecificSize(arr, groupBound, j)
    }
    return arr;
}

// revert subarray between indexes shift and shift + size
function revertSubArrayOfSpecificSize(arr, size, shift) {
    for (let i = 0; i < size / 2; i++) {
        const tmp = arr[shift + i];
        arr[shift + i] = arr[shift + size - 1 - i]
        arr[shift + size - 1 - i] = tmp
    }
}

// for arr [1, 2, 3, 4, 5, 6, 7, 8], k = 3
// j = 0, 3, 6 , arr[j] = 1, 4, 7

const arr = reverse([1, 2, 3, 4, 5, 6, 7, 8], 3)
console.log(arr)
//

// function flipToK(arr, k) {
//     let tempStart = []
//     let tempEnd = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i < k) {
//             tempStart[i] = arr[k - i - 1]
//         } else tempEnd.push(arr[i])
//     }
//     return [...tempStart, ...tempEnd]
// }
//
// const arr = flipToK([1, 2, 3, 4, 5, 6, 7, 8], 3)
// console.log(arr)
