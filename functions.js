"use strict";
function num(num) {
    return num * num;
}
function str(person) {
    return `Hi there ${person}`;
}
const manyParams = (person, age, isFunny) => { };
function defaultParam(person = 'Muneeb') {
    return `Hi there ${person}`;
}
function funcReturnTypeNum(num) {
    return num * num;
}
function funcReturnTypeStr(person = 'Muneeb') {
    return `Hi there ${person}`;
}
function funcReturnTypeUnion(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
num(1);
str('Muneeb');
manyParams('Muneeb', 23, true);
defaultParam();
// Anonymous Function Contextual Typing;
const colors = ['red', 'yellow', 'green'];
colors.map(color => {
    return color;
});
// Function return Type 'void';
function funcReturnTypeVoid(msg) {
    console.log(msg);
}
// Function return Type 'never';
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game Loop Running!!!");
    }
}
