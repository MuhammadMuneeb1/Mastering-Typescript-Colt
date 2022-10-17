"use strict";
// Parameters Type Annotation for a Function to be an Object;
function objParamFunc(person) {
    console.log(`${person.first} ${person.last}`);
}
objParamFunc({ first: 'Muneeb', last: 'Ghaffar' });
// Variable Type as an Object;
let variableWithObjectType = { x: 34, y: 2 };
function returnTypeAnnotationOfObjectLiterals() {
    // Return Type of this function is an Object;
    return { x: Math.random(), y: Math.random() };
}
// Excess Properties;
// Object Literals defined inline performs extra checks; So, age property is omiting an Error.
// objParamFunc({first: 'Muneeb', last:'Ghaffar', age: 23});
// Here we defined same Object & stored it in a Variable.
const singer = { first: 'Muneeb', last: 'Ghaffar', age: 23 };
// TypeScript will now check if "first" & "last" are declared in a object stored in singer variable. Now, It won't perform extra checks!
objParamFunc(singer);
function doubleCoordinate(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: 'A Song',
    artist: 'A Collection',
    numStreams: 1251366731,
    credits: {
        producer: 'Gabriel Garcia',
        writer: 'Gabriel Garcia'
    }
};
const earnings = calculatePayout(mySong);
printSong(mySong);
console.log(earnings);
const myPoint = {
    x: 1,
    y: 2,
    z: 3 // we can remove "z" from here if we don't need it. Because, It's Optional...
};
const user = {
    id: 123,
    username: 'Catgurl'
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: 'green'
};
const christy = {
    numLives: 7,
    breed: 'Husky',
    age: 9
};
