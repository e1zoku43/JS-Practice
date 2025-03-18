class Human {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`);
    }
}

const person1 = new Human("Никита", 30, "Россия");
const person2 = new Human("Маша", 25, "Казахстан");

person1.displayInfo();
person2.displayInfo();
