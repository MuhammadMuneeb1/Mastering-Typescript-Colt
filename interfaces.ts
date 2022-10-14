// Interfaces - are used to create resuable, modular types to describe Object Shapes. They are very similar to type Aliases.
// type Aliases are delared using "type" keyword. And,Interfaces are declared using "interface" keyword. "=" operator is not used in Interfaces while it is used in Interfaces.



// type Aliases;
type Point = {
    x: number;
    y: number;
}

const pt: Point = {x: 123, y: 543}


// Interface
interface PointTwo {
    x: number;
    y: number;
}

const ptTwo: Point = {x: 323, y: 092}

// Interfaces with "readonly", "?" (optional) & method properties.
interface Person {
    readonly id: number;
    first: string; 
    last: string;
    nickname?: string; // optional property
    // sayHi: () => string; // Method - A function inside an Object.
    // sayHi method can also be written as:
    sayHi(): string,
}

const theName: Person = {
    first: "Muneeb",
    last: "Ghaffar",
    id: 2,
    nickname: "Muneeb Ghaffar",
    sayHi: () => {return "Muneeb"},
}

theName.first = "abc";


// Re-open or describing new properties in existing interface.

// Re-Declaring same interface multiple times to add more properties.
interface Dog {
    name: string;
    age: number;
}
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 5,
    breed: "Garnet",
    bark() {
        return "WOOF WOOF!!";
    },
}


// Extending or Inheriting Interfaces;
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb sniffer" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark";
    },
    job: "guide dog",
}


// Interface Multi-Level Inheritence
interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const engineer: Engineer = {
    name: "Muneeb",
    id: 4,
    email: "muneeb@gmail.com",
    level: "Software Engineer Internee",
    languages: ["HTML5", "CSS3", "Javascript"],
}



// "type" Aliases vs "interface";

// "interfaces" can be re-open(use inheritence) using "extends" keyword and we can add more properties to the existing interface. But, we cannot do such things with "type" Aliases.
interface YourName {
    name: string;
}
interface ThisPerson extends YourName {
    age: number;
}

// In "type" Aliases we can use "&" sign to add more properties. But, we cannot duplicate existing "type". Such as:
type Name = {
    name: string;
}
type Man = Name & {
    age: number;
}

// "interface" only defines Object Shapes, we cannot use them for anything else.
// "type" Aliases can define any sort of type that might be a function type, object type, and union type etc.

// For defining Object Types "interface" is best.
// "=" operator is used in "type" Aliases not in "interface".