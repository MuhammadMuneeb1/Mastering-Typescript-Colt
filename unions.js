// "|" Pipe Operator is a Union Operator ...
// Union of dataTypes;
var age = 20;
age = 23;
age = "24";
// Union of objectTypes;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, lng: 23.334 };
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(23);
printAge("24");
// Type Narrowing with Union Types;
function calculatePrice(price, tax) {
    // return price * tax; Price maybe string or a number. So, Typescript will show error.
    // price.replace("$", ""); 
    // Type Narrowing - To perform Type Narrowing we are using conditional statements!
    if (typeof price === "string") {
        // price.replace("$", ""); Here price dataType is string.
        price = parseFloat(price.replace("$", "")); // Here price dataType is number.
    }
    return price * tax;
}
// Union Type with Array;
// const numberArray: number[] = [1, 2, 3, 4];
// const anyArray: any[] = [10, 20, "Hi", true, {}];
// stringAndNumberArray allows both number and string dataTypes in an Array.
var stringAndNumberArray = [15, 25, "abc", 'xyz'];
// stringOrNumberArray only allows either number or string dataType in an Array.
var stringOrNumberArray = [0, 1, 2, 3];
stringOrNumberArray = ['a', 'b', 'c'];
// Object Data Types Union with an Array.
var objTypesArray = [];
objTypesArray.push({ lat: 321.213, lng: 23.334 });
objTypesArray.push({ x: 213, y: 43 });
// Literals Types - allows us to Assign specific value to a variable;
var zero = 0;
var hi = "hi";
// Union of Literal Types;
var literalTypesUnion = "Happy";
literalTypesUnion = "Sad";
var customLiteralTypesUnion = "Friday";
customLiteralTypesUnion = "Thursday";
