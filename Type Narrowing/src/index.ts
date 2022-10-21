// Type Narrowing - Narrowing type into more precise type;
// "Typeof Guard" or, "typeof" operator is the easiest way to achieve "type narrowing";

// Note: To get a precise datatype "return" a statement during Truthy Check. VScode Intellisense will help us to identify datatype. "return" statement is neccessary to avoid union of datatypes during Truthy Check.

function triple(value: number | string) {
    if(typeof value === "string") { // "typeof" operator to achieve type narrowing.
    // "repeat" - string method to repeat string value.
        return value.repeat(3); // "value" is string.
    }
    return value * 3; // "value" is number.
}


// "Truthiness Guards" or Logical NOT (!) operator - Use of Truthiness Guard will narrow or eliminate null, undefined or any falsy value;
const el = document.getElementById("id"); // HTMLElement | null
// Truthy Check
if(el) {
    el; // HTMLElement
} else {
    el; // null
}

const printLetters = (word?: string) => { // "?" to make parameter optional.
    // Truthy Check
    if(word) { // word: string | undefined
        for(let char of word){ // word: string
            console.log(char);
        }
    } else {
        word; // word: string | undefined
        console.log("YOU DID NOT PASS IN A WORD!");
    }
}



// Equality Narrowing - use of "equality operators" such as "===" "!==" etc for type checking;

// function someVal(x: string | number, y: string | boolean) {
//     if( x == y ) { // "==" means equal value no difference b/w 3 and "3";
//         x.toUpperCase();
//     }
// }
// someVal(3, "3");

function someVal(x: string | number, y: string | boolean) {
    if( x === y ) { // "==" means equal value and equal type, "===" checks both values and dataType;
        x.toUpperCase();
    }
}
someVal("3", "3");




// "in" Operator Narrowing;
// "in" operator is mostly used while working with Objects.

type Pet = { // This is not an Object, It's Object Types;
    name: string;
    age: number;
}
const pet: Pet = {
    name: "Kitty",
    age: 20
}
"name" in pet; // true
"breed" in pet; // false

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
    // Truthy Check using "in" operator;
    // "return" statement is neccessary to avoid union of datatypes during Truthy Check.
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration; // media: TVShow
    }
    return media.duration; // media: Movie
}
console.log(getRunTime({title: "Amadeus", duration: 160}));
console.log(getRunTime({title: "SpongBob", numEpisodes: 80, episodeDuration: 30}));





// "instanceof" Narrowing - "instanceof" operator allow us to check if one thing is an instanceof of another;
// "instanceof" is mostly used while working with Classes, Arrays, dates etc, For anything that can be written with "new" keyword such as new Date(); or new Array(); etc. It returns a boolean value that can be either a true or a false.

function printFullDate(date: string | Date) {
    if(date instanceof Date) {
        date.toUTCString(); // date: Date Object.
    } else {
        new Date(date).toUTCString(); // date: string
    }
}


class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName (entity: User | Company) {
    if(entity instanceof User) {
        entity; // "User" Class
    } else {
        entity; // "Company" Class
    }
}