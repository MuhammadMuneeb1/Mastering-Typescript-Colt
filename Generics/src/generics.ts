// Generics - Generics are a special feature or special bit of syntax that allows us to define reusable functions or reusable classes that can work with multiple types.

// Generics Syntax - inteface-name<datatype>

// Use interface-name, in this case "Array" and pass dataTypes inside the "<>".
// const nums: Array<number> = [1, 2, 3];
// const colors: Array<string> = ["red", "green", "blue"];

const inputElement = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputElement);
inputElement.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;


// Custom Generics;

// Here dataType and return Type may varies, They can be different from each other. Function may take one dataType and can return some other.
function identity(item: any): any {
    return item;
}


interface Cat {
    name: string;
    breed: string;
}

// But, In this Generic Function, data-type and return-type remain same. 
function customGeneric<Type>(item: Type): Type {
    return item;
}

customGeneric<number>(1); // Function data-type and return-type is "number";
customGeneric<string>("Hi"); // Now, here data-type and return-type are "string";
customGeneric<boolean>(true); // Here data-type and return-type are "boolean";
customGeneric<Cat>({name: "bluesteele", breed: "cat"}); // Here data-type and return-type are "interface Cat";


// Another Generic Function;
function getRandomElement<T>(list: T[]): T{ // "T" stands for "type".
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}

console.log(getRandomElement<string>(["a", "b", "c"])); // Here data-type and return-type is "string" Array;
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7])); // Here data-type and return-type is "number" Array;
// getRandomElement<Cat>; // Here data-type and return-type are "interface Cat" Array;


// Inferred Generic Type Parameters;
// "Type Inferrence" - means Typescript itself identifies the dataType.
getRandomElement(["d", "e", "f"]); // Due to "Type Inferrence" Typescript automatically knows the type, we don't need to specify dataType inside the "<>". Here, the dataType is a "string" Array.
getRandomElement([7, 8, 9, 10, 11, 12]); // Now the dataType is "number" Array. Typescript is itself identifying the dataType.


// "Type Inferrence" doesnot work in all the cases especially when we are working with DOM & BOM Elements we have to specify their type parameters such as "HTMLInputElement", "HTMLButtonElement" etc...