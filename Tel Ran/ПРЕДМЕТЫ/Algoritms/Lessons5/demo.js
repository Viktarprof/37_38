// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// 	 решение 1 - рекурсивно O(n)
// 	 решение 2 - улучшить решение 1 до O(log n)

// Solution 1. Inspiration

// x multiply itself n times (like factorial)

// O (n) time complexity

// Solution 2

// Example x = 2, n = 8
// 2 ^ 8 = 256
// 2 ^ 8 = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 =
// =  (2 * 2 * 2 * 2) * (2 * 2 * 2 * 2) =
// = ( (2 * 2) * (2 * 2) ) * ( (2 * 2) * (2 * 2) )
// = (  4 * 4 ) * ( 4 * 4 ) =
// = 16 * 16

// 2 * 2 = 4
// 4 * 4 = 16
// 16 * 16 = 256

// n could be even or odd
// n может быть нечётным или чётным




// 2. Имея два отсортированных массива размера m и n соответственно,
// вам нужно найти элемент, 
// который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив A - 100 112 256 349 770
// Массив B - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.


// Solution. Inspiration


// Direct solution #1 (not optimal, naive approach)
// Unite two arrays // O(k), k = n + m (n - length of array A, m - length of array B,
//  k is sum of lenghts of arrays A and B)
// Sort the result array (merge sort)
// Recap: Algorithm merge sort takes O(n log n) n - length of array
// We apply Merge Sort to arr having lenght k 
// O (k log k)
// Напоминание: сортировка слиянием требует  O(n log n) n - длина массива
// Мы применяем сортировку слиянием к массиву длины k
// Соответственно оценка O (k log k), where k = n + m  ( O((n + m) * log (n + m)) )
// find element by k-1 index // O(1)

// O(k) + O ( k log k) + O(1) ~ O(k log k), where k = n + m

// step 1 arr = [100, 112, 256, 349, 770, 72, 86, 113, 119, 265, 445, 892]
// n = 5, m = 7, k = 12
// step 2 sortedArr = [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
// return sortedArr[k-1]

// time complexity O(k log k) k = n + m 

// Direct solution #2 (merge approach)
// Merge two sorted arrays O(k), k = n + m (mergeSortedArrays from previous lecture)
// find element by k-1 index // O(1)

// O(k) + O(1) ~ O(k) , k = n + m

// step 1 sortedArr = merge([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892])
// sortedArr = [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
// return sortedArr[k-1]

// time complexity O(k), k = n + m

// Merge Sort is an sorting algorihm 
// merge(sortedArrA, sortedArrB) - operation than merges two sorted arrays into one

// Сортировка слиянием - это алгоритм сортировки
// Слияние - операция объединения двух отсортированных массивов в один 


// 3. Имея отсортированный массив arr[] и число x, напишите функцию,
// которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
// arr[] = {1, 1, 2, 2, 2, 2, 3,} 
// x = 2
// Вывод: 4 раза

// Direct approach  #1 (naive)
// time complexity O(n),  n - length of array
function countIns(sortedArr, x) {
    let count = 0
    for(let i = 0; i < sortedArr.length; i++) {
        if( sortedArr[i] === x) count++
    }
    return count
}

// Binary search approach #2

// find index of x in sorted array using binary search // O(log n)
// xIndex
// explore the nearest elements to count O(1)

// arr[] = [1, 1, 2, 2, 2, 2, 3] 
// x = 2
// apply binary search
// midElement = 2
// if midElement == x then return current idx
// 2 == 2
// xIndex = 3
// while arr[xIndex] == x do increase count and go left
// while arr[xIndex] == x do increase count and go right

// time complexity O(log(n)), worst case - ?

// 4* Найдите пиковый элемент в двумерном массиве
// Элемент является пиковым, если он больше или равен своим четырем соседям слева, справа, сверху и снизу.
// Например, соседями для A[i][j] являются A[i-1][j], A[i+1][j], A[i][j-1] и A[i][j+1 ]. Для угловых элементов отсутствующие соседи считаются отрицательными бесконечными значениями.
// Пример
// 10 20 15
// 21 30 14
//  7 16 32
// Выход: 30
// 30 — пиковый элемент, потому что все его
// соседи меньше или равны ему.
// 32 также можно выбрать в качестве пика.

// note
// 1 Смежная диагональ не считается соседней. 
// 2 Пиковый элемент не обязательно является максимальным элементом. 
// 3 Таких элементов может быть несколько. 
// 4 Всегда есть пиковый элемент.


// Quick sort 
// recap:
// 1) choose (somehow) an element - pivot
// выбрать (как-нибудь, например, последний элемент массива) - опорный
// 2) divide array in two parts (not halfs!)
// разделить массив на две части
// в левую часть все элементы меньше опорного
// в правую часть все элементы больше опорного
// опорный элемент может быть как слева, так и справа
// 3) рекурсивно выполнить для левой и правой частей

// input: arr = [5,82,1,43,18,33,14,68]
// output: arr = [1,5,14,18,33,43,68,82]

// arr = [5,82,1,43,18,33,14,68]
// pivot = 68
// left1 = [5,1,43,18,33,14] right1 = [82]
// [5,1,43,18,33,14,68,82] - state of initial array
// left1 = [5,1,43,18,33,14]
// pivot = 14
// left2 = [5,1] right2 = [43,18,33]
// [5,1,14,43,18,33,68,82] - state of initial array
// left3 = [1, 5], pivot = 33, left4 = [18] right4 = 43
// [1,5, 14, 18, 33, 43,68, 82]

// time complexity 
// 1) choose element - O(1)
// 2) divide array in two parts O(n), n - length of array
// 3) recursive calls of 1) and 2)
// average cae
// 1 array length n
// 2 arrays length ~n/2
// 4 arrays length ~n/4 = n/(2^2)
// 8 arrays length ~n/8 = n/(2^3)
// ..
// n arrays length n/2^a

// n n/2 .. 1  
// log_2 n = a, 2^a = n

// O(log n) recursive calls

// worst case (we always choose maximum)
// 1 array length n
// 1 array length n - 1
// 1 array length n - 2
// ..
// 1 array length 1

// O(n) recursive calls

// time complexity 
// time complexit #recursive calls * O(n)
// average case: O(log n * n) 
// worst case: O(n * n) 

// worst case (if we take the last element as pivot)
// arr = [1, 5, 14, 18, 33, 43, 68, 82]

// time complexity average O(n logn)
// space complexity O(1) ( O(log n) for recursive calls)
// Sort in place - Сортировка на месте
function quickSort(arr) {
    quickSortRecursive(arr, 0, arr.length - 1)

}

function quickSortRecursive(arr, start, end) {
    if (end >= start) {
        return
    }
    else {
    // 2) divide array in two parts
    const indexPivot = partition(arr, start, end)
    // 3) recursively call for left 
    quickSortRecursive(arr, start, indexPivot - 1)
    //    and right part
    quickSortRecursive(arr, indexPivot + 1, end)

    }
}

// change two elements by indexes first and second
function swap(arr, first, second) {
    let tmp = arr[first]
    arr[first] = arr[second]
    arr[second] = tmp
}

// 2) divide array in two parts (not halfs!)
// разделить массив на две части
// в левую часть все элементы меньше опорного
// в правую часть все элементы больше опорного
// опорный элемент может быть как слева, так и справа

//[5,82,1,43,18,33,14,68]
function partition(arr, start, end) {
    const pivot = arr[end] 
    // how many element are less than pivot = index of pivot in array
    let indexPivot =  start 

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, indexPivot)
            indexPivot++
        }
    }

    swap(arr, indexPivot, end)
    return indexPivot
}

// arr = [5,82,1,43,18,33,14,68]
// start = 0
// end = 7
// pivot = 68
// indexPivot = 0
// for
//  i = 0 
//      5 <= 68 then 
//                  swap(arr, 0, 0) 
//                  indexPivot = 1
//  i = 1
//      82 <= 68 
//  i = 2
//      1 <= 68 then 
//                  swap(arr, 2, 1)  // [5,1,82,43,18,33,14,68]
//                  indexPivot = 2  
//  i = 3, 43 <= 68 then  
//                  swap(arr, 3, 2)  // [5,1,43,82,18,33,14,68]
//                  indexPivot = 3 
//  i = 4, 18 <= 68 then swap(arr, 4, 3), indexPivot = 4 // [5,1,43,18,82,33,14,68]
//  i = 5, 33 <= 68 then swap(arr, 5, 4), indexPivot = 5 // [5,1,43,18,33,82,14,68]
//  i = 6, 14 <= 68 then swap(arr, 6, 5), indexPivot = 6 // [5,1,43,18,33,14,82,68]
//  i= 7 
// end for
// [5,1,43,18,33,14,68,82]


// arr = [5,95,2,82,68]
// i = 0, indexPivot = 1, arr = [5,95,2,82,68] // swap(arr, 0, 0)
// i = 1, indexPivot = 1, arr = [5,95,2,82,68]
// i = 2, indexPivot = 2, arr = [5,2,95,82,68] // swap(arr, 2, 1)
// i = 3, indexPivot = 2, arr = [5,2,95,82,68]
// end for
// swap(arr, indexPivot, end) => arr = [5,2,68,82,95]









