// 1) создать объект user со свойствами name, lastname и age и задать какие-нибудь значения

// const user = {
//         name: `Viktor`,
//         lastname: `Kalosha`,
//         age: 31
//     };
//     console.log(user)


// 2) добавьте к возрасту 10 лет
// const user = {
//         name: `Viktor`,
//         lastname: `Kalosha`,
//         age: 31
//     };
//     user.age += 10;
//     console.log(user);








//______________________________

// function power(value){
//     const result = value ** 2;
//     console.log(result);
// }
// power(13 - 5);  // так задаем значения аргументу VALUE
// power(14); // можно делать и так
// power(15);
// power(16);
// power(17);






//______________________________

// function power(value, p){ // указываем аргументы
//     const result = value ** p; //тут указываем то с нашими аргументами делать
//     console.log(result);
// }
// power(12, 2); // задали степень в функции POWER. 
// power(10, 3); // вторая цифра это стрепень
// power(5, 4);






//______________________________
// function power(value, p=2){ //тут мы указали то наш второй аргумент будет всегда 2
//     const result = value ** p; // ут указываем то с нашими аргументами делать
//     console.log(result);
// }
// power(12); // задали степень в функции POWER. 
// power(10, 3); // вторая цифра это стрепень
// power(5);






//____________return__________________
// function power (value, p = 2){
//     const result = value ** p;
//     return result
// }
// const val_1 = power(12); 
// const val_2 = power(10, 3);
// const val_3 = power(5);

// console.log(val_1, val_2, val_3); //тут просто возвели все значения из функции POWER
// console.log(val_1 + val_2 + val_3); // возвели все значения из функции в степень и СЛОЖИЛИ





//______________________________
// function power (value, p = 2){
//     const result = value ** p;
//     return result
// }

// // aˆ2 + bˆ2 = cˆ2

// const cat_1 = power(3);
// const cat_2 = power(4);
// const hip = power(cat_1 + cat_2, 0.5);     // 0.5 это корень квадратный
// console.log(hip);          // 3 возводит в степень из функции power и 4 возводит в степень из функции power, потом все склыдвает и 0.5








//______________________________
// написать функцию check которая в качестве аргумента получает
// число и возвращает true если оно четное и false в ином случае
// function check (value){
//      if (value %2 === 0){
//          return true
//      }else{
//          return false
//      }
//  }
// console.log(check(12));
// console.log(check(13));
// console.log(check(14));

                  // тоже самое решение только по короче
// function check (value){
//     return value % 2 === 0
//     }
// console.log(check(12));
// console.log(check(13));
// console.log(check(14));





//______________________________
// const test = 12;
// function power (value, p = 2){
//     console.log(test);
//             const result = value ** p;
//             return result
//     }
//     console.log(power(12, 2));
//console.log(return); // тут не отработает

// __ _ _ _ _ _ __ _ _ _ _ __ _ _ _ _ __ _ _

// const global = 12;
// function func(){
//     const local = 15;

//     console.log('local', global);
//     console.log('local', local);
// }
// func()

// console.log('global', global);
// console.log('global', local);








// ________________    var  let    ______________________

// var а = 12 переменную "а" можно повторять много раз
// let a = 12 переменную "а" так повторять нельзя


// вот что делает var. если сделать ошибку то найти ее будет сложно
// var a = 12;
// a = 13;
// a = 45; 
// console.log(a)


// if (1 === 1){
//     let a = 12; // любые {} скобки локальная область видимости
//     var b = 16; // только функция локальная область видимости
// }
// console.log(b);
// console.log(a);







//____________________________________________________
// написать функцию compare которая получает в качестве аргументов 
// два числа и выводит наибольшее

// function compare (value_1, value_2){
//     if(value_1 > value_2){
//         return value_1
//     }else{
//         return value_2
//     }
// }
// console.log(compare(1,4));
// console.log(compare(4,1));





//____________________________________________________
// написать функцию range которая в качестве аргумента
// получает число и возвращает массив с числами от 0 до аргумента - 1
// range(10) -> [0 ... 9]


// function range (value){
//     const result = [];
//     for(let i = 0; i < value; i++){
//         result.push(i)
//     }
//     return result
// }
// console.log(range(6));






//___________________________________________
// const arr = [123, 4, 32, 5, 3, 2, 53];
// for (let i = 0; i < 10; i++){ 
//     console.log(i); // так выведем только массив от 0 до 10
// }


// const arr1 = [123, 4, 32, 5, 3, 2, 53];
// for (let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]) //так выведем весь массив из arr1
// }
// console.log('Покажи третье значение и второе = ' + arr1[3], arr1[2])



//___________________________________________
// написать цикл, который выводит квадраты чисел от 0 до 10

// for (let i = 0; i <= 10; i++){
//     console.log(i ** 2)
// }
    