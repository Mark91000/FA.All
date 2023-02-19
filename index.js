// // console.log(!!0);
// // console.log(!!false);
// // console.log(!!null);
// // console.log(!!undefined);
// // console.log(!!10);
// console.log(0 || false || null || undefined || 10 || 100);

// /*
//     !!0 === false? да, идём дальше
//     !!false === false? да, идём дальше
//     !!null === false? да, идём дальше
//     !!undefined === false? да, идём дальше
//     !!10 === false? нет, возвращаем 10
// */

// console.log(null ?? undefined ?? false ?? 0 ?? "")

// /*
//     null === undefined? нет, идём на шаг 2:
//         null === null? да, идём дальше
//     undefined === undefined? да, идём дальше
//     false === undefined? нет, идём на шаг 2:
//         false === null? нет, возвращаем false
// */

// /*
//     !true = false
//     !false = true

//     !!true = !false = true
//     !!false = !true = false

//     !!0 = !true = false
// */

// const arr = [1, 2, 3, 4]
// let a = arr.find(function (el) {
//     return el === 10;
// });

// console.log(a);

// // Иванов Иван Иванович
// // Петров Пётр Петрович
// // Ю Несбё Игоревич
// // Петров-Водкин Валентин Вячеславович
// function checkIfFio(str) {
//     const re = /^([А-ЯЁ][А-ЯЁа-яё\-]{0,}\s[А-ЯЁ][А-ЯЁа-яё\-]{0,}\s[А-ЯЁ][А-ЯЁа-яё\-]{0,})$/
//     return re.test(str);
// }

// console.log(checkIfFio("Иванов Иван Иванович"))
// console.log(checkIfFio("Петров Пётр Петрович"))
// console.log(checkIfFio("Ю Несбё Игоревич"))
// console.log(checkIfFio("Петров-Водкин Валентин Вячеславович"))
// console.log(checkIfFio("Роберт Дауни-младший Соломонович"))
// console.log(checkIfFio("Я есть Грут"))

// // "город Владимир, 601650, ул. Пушкина, д. 190, кв. 57" -> "601650"
// // "602650, город Владимир, ул. Ленина, д. 17" -> "602650"
// // "город Владимир, ул. Ленина, д. 17" -> ""
// function getPostalCode(str) {
//     const re = /[0-9]{6}/
//     const match = str.match(re);
//     if (match === null) {
//         return "";
//     }
//     return match[0];
// }

// console.log(getPostalCode("601650 город Владимир, ул. Ленина, д. 17 222222"));

const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i*2);
}

console.log(arr);

// arr.forEach(function (element, ind) {
//     console.log(`Hello. I'm ${element}. My index is ${ind}`);
// });

// const y = arr.map(function (element, ind) {
//     if (ind % 2 === 0) {
//         return -1;
//     } else {
//         return `I'm ${element}. I've survived!`;
//     }
// });

// console.log(y);

// const bigValues = arr.filter(function (element, index) {
//     return element > 100;
// });

// console.log(bigValues);

// const isValid = arr.some(function (element, index) {
//     return element === index;
// })
// [ true, true, false.... ] ||

// console.log(isValid);

// const isValid = arr.every(function (element) {
//     return element % 2 === 0;
// });
// [ true, true, false.... ] &&
// console.log(isValid);

const sum = [1, 2, 3, 4, 5].reduce(function (accumulator, element) {
    return accumulator + element;
}, 0);

/*
    Шаг 0: accumulator = 0, element = arr[0] = 1. Return 0 + 1 = 1.
    Шаг 1: accumulator = 1, element = arr[1] = 2. Return 1 + 2 = 3.
    Шаг 2: accumulator = 3, element = arr[2] = 3. Return 3 + 3 = 6.
    Шаг 3: accumulator = 6, element = arr[3] = 4. Return 6 + 4 = 10.
    Шаг 4: accumulator = 10, element = arr[4] = 5. Return 10 + 5 = 15.
*/

console.log(sum);
