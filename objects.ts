// Parameters Type Annotation for a Function to be an Object;
function objParamFunc(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}
objParamFunc({ first: 'Muneeb', last: 'Ghaffar' });


// Variable Type as an Object;
let variableWithObjectType: { x: number; y: number } = { x: 34, y: 2 };


function returnTypeAnnotationOfObjectLiterals(): { x: number; y: number } {
    // Return Type of this function is an Object;
    return { x: Math.random(), y: Math.random() }
}

// Excess Properties;

// Object Literals defined inline performs extra checks; So, age property is omiting an Error.
// objParamFunc({first: 'Muneeb', last:'Ghaffar', age: 23});

// Here we defined same Object & stored it in a Variable.
const singer = { first: 'Muneeb', last: 'Ghaffar', age: 23 };

// TypeScript will now check if "first" & "last" are declared in a object stored in singer variable. Now, It won't perform extra checks!
objParamFunc(singer);



// Creating Type Aliases;

type Point = { // This is not an Object, It's Object Types;
    x: number;
    y: number;
}

function doubleCoordinate(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

// Nested Objects;

type Song = { 
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: { 
        producer: string, 
        writer: string } 
    }
function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
        title: 'A Song',
        artist: 'A Collection',
        numStreams: 1251366731,
        credits: {
            producer: 'Gabriel Garcia',
            writer: 'Gabriel Garcia'
        }
}

const earnings = calculatePayout(mySong);
printSong(mySong);

console.log(earnings);



// Optional Object Properties;

type Optional = {
    x: number;
    y: number;
    z?: number; // "z" property is optional. "?" makes object properties optional. Now, It depends upon us either we want to use "z" property or not!!! 
}

const myPoint: Optional = {
    x: 1,
    y: 2,
    z: 3 // we can remove "z" from here if we don't need it. Because, It's Optional...
}


// "readonly" modifier

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 123,
    username: 'Catgurl'
}

console.log(user.id);
// user.id = 234; "user.id" is readonly. So, cannot be updated.



// "Intersection" Types;

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

// "&" is used for Intersection (Combine) of Types; 
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'green'
};

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

// "&" Intersection (Combination) of Types and then Combination with another Object with "age" property.
type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: 'Husky',
    age: 9
}