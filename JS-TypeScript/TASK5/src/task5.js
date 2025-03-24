"use strict";
// Функция для сортировки массива любого типа
function sortArray(arr) {
    return arr.slice().sort((a, b) => (a > b ? 1 : -1));
}
let value1;
let value2;
// Функция, которая возвращает массив ключей объекта
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(sortArray([3, 1, 4, 1, 5, 9]));
console.log(sortArray(["banana", "apple", "cherry"]));
const myObj = { name: "Alice", age: 25, job: "Developer" };
console.log(getObjectKeys(myObj));
