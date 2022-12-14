"use strict";
// Interfaces - are used to create resuable, modular types to describe Object Shapes. They are very similar to type Aliases.
// type Aliases are delared using "type" keyword. And,Interfaces are declared using "interface" keyword. "=" operator is not used in Interfaces while it is used in Interfaces.
const pt = { x: 123, y: 543 };
const ptTwo = { x: 323, y: 092 };
const theName = {
    first: "Muneeb",
    last: "Ghaffar",
    id: 2,
    nickname: "Muneeb Ghaffar",
    sayHi: () => { return "Muneeb"; },
};
theName.first = "abc";
const elton = {
    name: "Elton",
    age: 5,
    breed: "Garnet",
    bark() {
        return "WOOF WOOF!!";
    },
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark";
    },
    job: "guide dog",
};
const engineer = {
    name: "Muneeb",
    id: 4,
    email: "muneeb@gmail.com",
    level: "Software Engineer Internee",
    languages: ["HTML5", "CSS3", "Javascript"],
};
// "interface" only defines Object Shapes, we cannot use them for anything else.
// "type" Aliases can define any sort of type that might be a function type, object type, and union type etc.
// For defining Object Types "interface" is best.
// "=" operator is used in "type" Aliases not in "interface".
