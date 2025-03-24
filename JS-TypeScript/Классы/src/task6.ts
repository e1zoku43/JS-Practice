class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

const person = new Person("Alice");
console.log(person.getName());
person.setName("Bob");
console.log(person.getName()); 
