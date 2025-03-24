// Функция для сортировки массива любого типа
function sortArray<T extends string | number>(arr: T[]): T[] {
    return arr.slice().sort((a, b) => (a > b ? 1 : -1));
}

// Использование conditional types для выбора типа
type SelectType<Condition extends boolean> = Condition extends true ? string : number;


let value1: SelectType<true>;  
let value2: SelectType<false>; 

// Функция, которая возвращает массив ключей объекта
function getObjectKeys<T extends object>(obj: T): string[] {
    return Object.keys(obj);
}

console.log(sortArray([3, 1, 4, 1, 5, 9]));    
console.log(sortArray(["banana", "apple", "cherry"])); 

const myObj = { name: "Alice", age: 25, job: "Developer" };
console.log(getObjectKeys(myObj)); 