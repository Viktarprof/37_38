

var array = [1, 23, -3, 100, 75, 32, -10];
for (let i = 0; i <= array.length; i++)
console.log('#1 ' + array);


//====================================


for (let i = -2; i <= 5; i++)
console.log('#2 ' + i);


//====================================


const array1 = [1,'My', 2, 'name', 3, 'is', 4, 5, 6, 7, 8];
for (let i = 0; i < array1.length; i++){
 if ( array1[i] % 1 === 0){
    console.log('Значения массива = ' + array1[i]);
 }
 } 


//====================================
var array2 = [1, 2, 3, 4, 5, 6, 7, 8];

 function arrayClone(newarr) {
 return newarr.slice(0);
};

var myArr = arrayClone(array2);
console.log("Origin array " + array)
console.log("Copy array " + myArr)


//====================================
