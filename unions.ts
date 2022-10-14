// "|" is a Union Operator ...

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
