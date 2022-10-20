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



// Generics with Arrow Function.
const randomElement = <T>(list: T[]): T => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}



// Generics With Multiple Types;

// When we have multiple types convention is to use "U" after "T" to alphabets order. 
function merge<T,U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}
// "return Type of this function is intersection between "T" & "U". Typescript is able to infer the generic types.Typescript is smart enough to understand that we are merging 2 Objects in arguments.
const comboObj = merge({name: "colt"}, {pet: ["blue", "elton"]});

// We can also tell Typescript to merge Objects manually while passing them as an arguments.
merge<{name: string}, {pet: string[]}>({name: "colt"}, {pet: ["blue", "elton"]});

// we can also merge an object with a number. But, number won't be able to print at console.
console.log(merge({name: "colt"}, 9));



// Adding Type Constraints;
// In a merge function right now "T" & "U" can have any datatype it can be number or a string etc. But, we can also assign dataTypes to generics using "extends" keyword.

// "object" can be of any type. But, it has to be a object.
function merge2<T extends object,U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}

console.log(merge2({name: "colt"}, {num: 9}));

interface Lengthy {
    length: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }

// We can also write same printDoubleLength function without Generics "<>".
function printDoubleLength(thing: Lengthy): number {
    return thing.length * 2;
}

printDoubleLength("asadasdsa");
// printDoubleLength(234); // Here it is giving an Error.



// Default Type Parameters;
// We can write our own Generics with a "Default Value" assign to "type parameter".

function makeEmptyArray<T>(): T[] {
    return [];
}

const stringArray = makeEmptyArray<string>();
stringArray.push("abc");

const unknownTypeArray = makeEmptyArray();

function makeEmptyArray2<T = number>(): T[] {
    return [];
}

const nums = makeEmptyArray2();
// Even tough we have assign default dataType to generic parameter we can still change it.
const bools = makeEmptyArray2<boolean>();




// Writing Generic Classes;
interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

// Classes without Generics using interface.
class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public song: Song[] = [];
}

// Classes with Generics using interface.
class Playlist<T> {
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>();
songs.add({title: "Song", artist: "s"});

const videos = new Playlist<Video>();
videos.add({title: "Video", creator: "v", resolution: "720p"});