//let name = prompt ('укажите свое имя');
//console.log(name);

//let , const (хорошо)
//var (плохо)
//________________________________


//переменная должна быть осмыс.леннна
//a-z 0-9 _
// 1a - не будет работать 
// a1 можем использовать
// _

// a,b,c,d плохо использовать не осмысленное название пеперменной

// нет транслитерации

//let my_lovely_dog_name так можно прописывать

//let myLovelyDogName так можно прописывать


// строка в ковычках
// число
'12'


//__________________________________________
//const name = prompt ('укажите свое имя');
//const result = 'Hello '+ name; // вывел в консоли Hello Viktor
//console.log(result);


//__________________________________________
//const name = prompt ('укажите свое имя');
//console.log ('Hello '+ name); // вывел в консоли Hello Viktor
//console.log(`Hello ${name}`);


//______________________________________
// const rgb = prompt ('rgb');
// const r = 123;
// const g = 32;
// const b = 57;
            //rgb (   123,     32,      57)
                                // один из способов как можем формировать строку
// console.log ('rgb(' + r + ','+ g +',' + b +');');
// console.log (`rgb(${r}, ${g}, ${b});`); ИНТЕРПОЛЯЦИЯ


//______________________________________
// let name = prompt ('укажите действе');
// const value_1 = 145;
// const value_2 = 13;
// console.log(value_1 + value_2);
// console.log(value_1 - value_2);
// console.log(value_1 * value_2);
// console.log(value_1 / value_2);
// console.log(value_1 % value_2);
//console.log(value_2 ** 2); // возведение в степень



//____________________________________
//let name = prompt ('укажите действе');
// const value1 = 12;    // !!!!!число!!!!!
// const value = '12';   //  !!!!!строка!!!!!

// console.log(typeof(value1));
// console.log(typeof(value));



//_____________________________________
//приобразовываем строку в число и число в строку

//const value_1 = '12'; // !!!!!!строка!!!!!
//const value_2 = 12;   // !!!!!число!!!!!!
//console.log(typeof(Number(value_1)));
//console.log(typeof(String(value_2)));


//_____________________________________
// не явные преобразования
//const value_1 = '12';   // !!!!!!строка!!!!!
//const value_2 = 12;     //  !!!!!число!!!!!!
////console.log(typeof(+value_1));
//console.log(typeof(String(value_2)));
//console.log(typeof(''+value_2));


//_____________________________________
// написать программу, которая через prompt получает два числа и выводит в консоль их сумму
//let name = prompt ('укажите свое имя');
//let value_3 = prompt ('укажите первое число');
//let value_4 = prompt ('укажите второе число');

//console.log(+value_3 + +value_4);



//_____________________________________
//let value_1 = prompt ('укажите слово'); // тут я ввел слово ПРИВЕТ и в консоли получил результат NaN и number
//console.log(+value_1);
//console.log(typeof(+value_1));



//_____________________________________
//let name = prompt ('укажите свое имя');

//console.log('b'+ 'a' + + 'c');
//получил слово baNaN




// написать программу, которая запрашивает у пользователя сколько ему лет и выводит сколько ему минут

const age = prompt ('укажите сколько вам лет');

console.log(age * 365.25 * 24 * 60);