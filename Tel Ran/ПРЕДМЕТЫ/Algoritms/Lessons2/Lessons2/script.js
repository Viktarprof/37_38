function liener (arr, key){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === key){
      return i
    } 
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === key){
        return -1
      }
    } 
  }
}
liener ([1,2,3,4,5], 2)


//============================================

// tine complexity O(nˆ2)
// function test1(n){
//   if (n === 1) 
//      return;
//   for ( i=1; i<= n; i++){ // n  numbers
//     for (j=1; j<=n; j++){ // for each i
//           console.log("*");
//       }
//   }
// }

// test1(3) => 9 iteration
// n = 3

// first iteration
// i = 1
// i = 1, j = 1 => "*"
// i = 1, j = 2 => '*'
// i = 1, j = 3 => '*'
// i = 1, j = 4 => 4 <= 3 => false

// second iteration
// i = 2
// i = 2, j = 1 => "*"
// i = 2, j = 2 => '*'
// i = 2, j = 3 => '*'
// i = 2, j = 4 => 4 <= 3 => false

//third iteration
// i = 3
// i = 3, j = 1 => "*"
// i = 3, j = 2 => '*'
// i = 3, j = 3 => '*'
// i = 3, j = 4 => 4 <= 3 => false

//============================================

// function test3(n){
// //nˆ2
//   for (i = n/2; i <= n ; n++){
//     for (j = 2; j <= n ; j=j++){ 
//         console.log("*");
//     }
//   }
// }


// function test5(n){
//   //Oˆ3
//     for (i = n/2; i <= n ; n++){ //O(n)
//       for (j = 2; j <= n ; j=j*2){ //O(n)
//         for (k = 2; j <= n/2 ; k++){ //O(n)
//         console.log("*");
//       }
//     }
//   }
// }



// //O(nˆ2)
//   //O(n)
//   //O(n) +O(n) ==(2n) - O(n)
// function test7(n){
  
//     for (i = n/2; i <= n ; i++){ //O(n)
//       console.log("+");
//       for (j = 2; j <= n ; j += 2){ //O(n))
//         console.log("*");
//       }
//     }
//   }



// // time complexity O(?)
// // O(n) + O(nˆ2) ~ O(nˆ2)
// function test9(n){

//     for (i = 9; i <= n ; i++){
//       console.log("+");
//     for (j = 2; j <= n ; j += 2){ 
//         console.log("*");
//       }
//     }
  





// time complexity O(n)
    // space complexity O(1)
    public static int getSum(int[] arr) {
      int sum = 0;
      for (int i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
  }

  // task
  // input array of integers
  // result - same array in reversed order
  // input [1,2,3,4], result [4,3,2,1]
  // input [5,-9,112], result [112,-9,5]

  // time complexity  O(n)
  // space complexity O(n)
  // 100 elements 100 sec
  public static int[] reverseArr(int[] arr) {
      int[] result = new int[arr.length];
      for (int i = arr.length - 1; i >= 0 ; i--) {
          result[arr.length - i - 1] = arr[i];
      }
      return result;
  }

  // time complexity  O(n/2) ~ O(n)
  // space complexity O(1)
  // [1,2,3,4,5] -> [5,2,3,4,1] ->[5,4,3,2,1]
  // [1,2,3,4] -> [4,2,3,1] -> [4,3,2,1]

  // 100 elements 50 sec
  public static int[] reverseArrFast(int[] arr) {
      for (int i = 0; i < arr.length / 2; i++) {
          // swap two elements
          int tmp = arr[i];
          arr[i] = arr[arr.length - 1 - i];
          arr[arr.length - 1 - i] = tmp;
      }
      return arr;
  }

  // example of quadratic time complexity
  // time complexity  O(n^2)
  public static void makeMatrix(int[] arr) {
      for (int i = 0; i < arr.length; i++) { // n operations
          for (int j = 0; j < arr.length; j++) { // n operations
              System.out.println(arr[i] * arr[j]); // console.log()
          }
      }
  }


  /*
      Dynamic array
      Static has fixed length

      dynamic array keeps inside static array
      when static array is full,
          new static arr is created
          all elements are copied to newly created arr
          new element is inserted to inside array // O(n)
      when static array is NOT full,
          just add element // O(1)
   */



// task
// input array of integers, length 0 - 10 incl
// output maximum sum of contiguous subarray
// e.x. [1,2,3], result 6
// e.x. [1,-2,3], result 3


// text
// compute all possible contiguous subarrays
// for each of these subarrays calculate the sum
// sort all resulting sums and return the highest

// pseudocode
/*
function(arr) {
  list subarrays[]
  for each element
      subarrays + [contiguous subarray, starting from element]

  number sum
  number max = 0
  for each subarray in subarrays
      for each element in subarray
          sum + element
      if (sum > max)
          max =sum
      sum = 0
  return max

*/


























