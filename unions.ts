// "|" Pipe Operator is a Union Operator ...

// Union of dataTypes;
let age: number | string = 20;
age = 23;
age = "24";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    lng: number;
}

// Union of objectTypes;
let coordinates: Point | Loc = {x:1, y:34}
coordinates = {lat: 321.213, lng: 23.334}


function printAge(age: number | string){
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("24");

// Type Narrowing with Union Types;
function calculatePrice(price: number | string, tax: number){
    // return price * tax; Price maybe string or a number. So, Typescript will show error.
    // price.replace("$", ""); 

    // Type Narrowing - To perform Type Narrowing we are using conditional statements!
    if(typeof price === "string"){
        // price.replace("$", ""); Here price dataType is string.
        price = parseFloat(price.replace("$", "")); // Here price dataType is number.
    }
    return price * tax;
}


// Union Type with Array;

// const numberArray: number[] = [1, 2, 3, 4];
// const anyArray: any[] = [10, 20, "Hi", true, {}];

// stringAndNumberArray allows both number and string dataTypes in an Array.
const stringAndNumberArray: ( number | string )[] = [15, 25, "abc", 'xyz'];

// stringOrNumberArray only allows either number or string dataType in an Array.
let stringOrNumberArray: number[] | string[] = [0, 1, 2, 3];
stringOrNumberArray= ['a', 'b', 'c'];

// Object Data Types Union with an Array.
const objTypesArray: (Point | Loc)[] = [];
objTypesArray.push({lat: 321.213, lng: 23.334});
objTypesArray.push({x: 213, y: 43});


// Literals Types - allows us to Assign specific value to a variable;
const zero: 0 = 0;
const hi: "hi" = "hi";

// Union of Literal Types;
let literalTypesUnion: "Happy" | "Sad" = "Happy";
literalTypesUnion = "Sad";

// Custom Literal Types Union;
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let customLiteralTypesUnion: DayOfWeek = "Friday";
customLiteralTypesUnion = "Thursday";