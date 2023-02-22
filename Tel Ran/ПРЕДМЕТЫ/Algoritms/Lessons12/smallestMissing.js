// // Find the smallest positive element, which given sorted array doesn't contain.
// All elements of an array are sorted
//
//  Example: [1, 2, 6, 31]
//  Result: 3
//
//  Example: [1, 2, 3, 6, 31]
//  Result: 4
//
//  Example: [2, 3, 4, 6, 9, 11, 15]
//  Result: 1
//
// //Expected time complexity O(log(n))
//
// signature example java
// public static int smallestMissing(int[] arr) {
// }

// positive 1, 2, 3, 4, 5, 6, 7, 8, 9...
// indexes in any array 0, 1, 2, 3, 4, 5, 6, 7, 8 ...

// function binarySearch(arr, k) {
//     // searches for k in arr
// }

function smallestMissing(arr) {
    const indexWrongElem = smallestMissingBinarySearch(arr, 0, arr.length - 1)
    return indexWrongElem + 1;
}

function smallestMissingBinarySearch(arr, left, right) {
    if (left > right)
        return left;

    let mid = Math.floor(left + (right - left) / 2)

    // That differes from classic binary search at the condition
    if (arr[mid] === mid + 1) {
        // if element in the middle has right index then misssing element is to the right
        return smallestMissingBinarySearch(arr, mid + 1, right)
    } else {
        return smallestMissingBinarySearch(arr, left, mid - 1)
    }
}
// arr = [1, 2, 6, 31]
// left = 0, right = 3
// mid = 1
// arr[1] === 2 -> true
    // left = 2, right = 3
    // mid = 2
    // arr[2] === 3 -> false
        // left = 2, right = 1
        // 2 > 1 -> true
        // return 2

console.log(smallestMissing([1, 2, 6, 31]))
console.log(smallestMissing([2, 3, 4, 6, 9, 11, 15]))