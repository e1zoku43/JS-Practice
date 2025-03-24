"use strict";
function getCar(car) {
    if ('model' in car && 'year' in car) {
        return `Машина: ${car.brand} ${car.model}, год выпуска: ${car.year}`;
    }
    else {
        return `Машина: ${car.brand}`;
    }
}
const car1 = { brand: 'Toyota', model: 'Camry', year: 2020 };
const car2 = { brand: 'BMW' };
console.log(getCar(car1)); // Машина: Toyota Camry, год выпуска: 2020
console.log(getCar(car2)); // Машина: BMW
