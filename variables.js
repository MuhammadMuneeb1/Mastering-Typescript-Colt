"use strict";
// string;
var movieTitle = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 2;
movieTitle.toUpperCase();
// number;
var numCatLives = 10;
numCatLives += 1;
// numCatLives = 'zero';
// boolean;
var gameOver = true;
gameOver = false;
// gameOver = 'true';
// Type Inference;
var tvShow = "Olive Kitteridge"; // Type Inference: Typescript automatically indentifies the type of value, Assign to the variable;
tvShow = "The Other Two";
// tvShow = false;
var isFunny = false;
isFunny = true;
// isFunny = 'abcd';
// 'any' dataType;
let thing = 'Hello';
thing = 2;
thing = false;
thing();
thing.toUpperCase();
// Delay Initialization & Implicit any;
const movies = ['Arrival', 'The Things', 'Aliens', 'Amadeus'];
let foundMovie;
for (let movie of movies) {
    if (movie === 'Amadeus') {
        foundMovie = 'Amadeus';
    }
}
// foundMovie();
// foundMovie = 1;
