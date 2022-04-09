// console.log (
// [1, 7, 3, 0, 4, 5, 4]
// .filter(element => !(element % 2))
// .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
// );

// function () {
//     const num = [1, 4, 6, 7, 3];
//     num % 2 = 0 && num % 2 = Number =
//     console.log();
// }


// // Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     return str.trim().split("  ");
// }

// var arr = stringToarray(str);

// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// console.log(typeof(arr));



//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

//     return str.slice(0, 7);

// };

// document.writeln(delete_characters(str, 7)); // Каждый




// //Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {

//     return str.toUpperCase().replace(/\s+/g, '-');
// }

// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";  

// function cursive_letter(str) {

//   return str.charAt(0).toUpperCase() + str.slice(1);


// }

// document.writeln(cursive_letter(str)); // "String not starting with capital"




//  Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";  

// function capitalize(str) {


// return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
// }

//  document.writeln(capitalize(str)); // "Каждый Охотник Желает Знать"



// Регулярные выражения!
// . - любой одиночный символ
// [ ] - любой из них, диапазоны
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру digital 
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов space
// \w - буква
// \W - все кроме букв
// \b - граница слова border
// \B - не границ

// Квантификация
// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз
// | - или 
// () - групирует символы 



// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  

// function change_register(str) {

// // Ваш код

// }

// document.writeln(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"


// var str = "beutiful"; 

// if (i == str.toLowerCase) {
//     console.log(true);
// } else if (i == str.toUpperCase) {
//     console.log(faulse);
// }

// console.log(str);


// var names = ['rob', 'dwayne', 'james', 'larry', 'steve']
// var i = 3
// var result = []

// while (i < names.length) {
//   result.push(names[i].toUpperCase())
//   i++ 
// }

// console.log(result)


    
// ono|| const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

//     function change_register(str) {
//     const new_str = "";
//     const len = str.length;
//         for (var i = 0; i < len; i++) {
//             if (str[i] === str[i].toLowerCase()) {
//                 new_str += str.toUpperCase(); 
//             } else {
//                 new_str += str[i].toLowerCase();
//             }
//         }
//         return new_str;
//     }

//     document.writeIn(`<p>${change_register}</p>`);




// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  

// function remove_char(str) {
//     var res = "";
//     res = str.replace(/[^\w\s]|_/g, "")
//         .replace(
// }/\s+/g, " ");
//     return res;

// document.writeln(remove_char(str)); // "every hunter wishes to know"




// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


// document.writeln(zeros(145, 5, '-')); // -00145
// document.writeln(zeros(33, 4, '+'));  // +0033 
// document.writeln(zeros(33, 4));       // 


// function zeros (num, len, sign) {
//     let len_zer = len - (num + "").length, 
//     num_zer = '';
//     for (len_zer > 0; len_zer--;) {
//         num_zer = '';
//     }
//     return (sign === undefined || sign === '') & num_zer + num + '' : sign + num_zer + num + '';
// };

// document.writeIn(zeros(145, 5, '-'));
// document.writeln(33, 4 '+');
// document.writeIn(zeros(33, 4));



// function zeros (num, len, sign) {
//     let len_zer = len - (num + '').length, // к-во нулей
//     num_zer = '';
//       for ( ; len_zer > 0; len_zer--) {
//         num_zer += 0;
//       }
        
//       return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
//     }
    
//     document.writeln(zeros(145, 5, '-')); // -00145
//     document.writeln(zeros(33, 4, '+'));  // +0033
//     document.writeln(zeros(33, 4));       // 0033




// Владилен
// Работа с массивами 

// const cars = ['Masda', 'Ford', 'BMV', 'Mersedes'];
// const object = [
//     {name:'Vladilen', budget: 4200}, 
//     {name:'Elena', budget: 2300}, 
//     {name:'Victoria', budget: 1700} 
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13]; 

//     let finedPerson 
//     for (const person of people) {
//         if (person.budget === 3500) {
//             finedPerson = person;
//         }
//     }

// console.log(finedPerson);

// const index = people.findIndex(function(person) {
//     return person.budget === 3500;
// });
// console.log(people[index]);

// console.log(cars);   
// cars.push('Reno');
// console.log(cars);
// cars.unshift('Volga');  // на начало строки 
// console.log(cars);
// const firstItem = cars.shift(); // удвляет елемент первый из массива 
// const  lasrCar = cars.pop(); // удалляет последний обьект из массива 
// console.log(cars);
// console.log(cars.reverse());

// const index = cars.indexOf('BMV');
// const index = cars.indexOf(function(){
//     return people;
// })
// cars[index] = 'Porsche';
// console.log(cars);
// const str = 'rgrtgre, grg gtrg rgr rgrtg';
// const reverseStr = str.split('').reverse().join(''); // после комы делит строку на2 елемента
// console.log(reverseStr);



// const fruits = [
//     {name: 'Oranges', number: 40},
//     {name: 'Apples', number: 80},
//     {name: 'Bananas', number: 30}
// ]

// const allFruits = fruits
//     .filter(fruits => fruits.number > 34)
//     .reduce((acc, fruits) => {
//         acc +=fruits.number
//         return acc;
//     }, 0);

//     console.log(allFruits);


// const sofa = [
//     {name: 't-shirt', number:  34},
//     {name: 'shirt', number:  45},
//     {name: 'dresses', number:  234}
// ]

// const allSofa = sofa
//     .filter(sofa => sofa.number > 47)
//     .reduce((acc, sofa) => {
//         acc +=sofa.number
//         return acc;
//     }, 0);

//     console.log (allSofa);



//  объекты 

// const person = {
//     name: "kata",
//     age: 19,
//     isProgramer: true,
//     info () {
//         console.info('information for people', person.name, 'and her:', person.age)
//     }
// }

// person.info()
// console.log(person.name);
// console.log(person['age']);


// for (let key in person) {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// }