class Person {
    public name: string;

    private age:string;

    // protected gender: string;

    constructor(name: string, age:string) {
        this.name = name;
        this.age = age;
    }

    protected greet(): string {
        return `Hello, my name is ${this.name}.`;
    }
}

const person = new Person("John", "25");
// console.log(person.greet()); // Output: Hello, my name is John.
console.log(person.name);
// console.log(person.age);   // Output: John
