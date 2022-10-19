"use strict";
const inputElement = document.querySelector("#username");
inputElement.value = "Hacked!";
const btn = document.querySelector(".btn");
function identity(item) {
    return item;
}
function customGeneric(item) {
    return item;
}
customGeneric(1);
customGeneric("Hi");
customGeneric(true);
customGeneric({ name: "bluesteele", breed: "cat" });
function getRandomElement(list) {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7]));
getRandomElement(["d", "e", "f"]);
getRandomElement([7, 8, 9, 10, 11, 12]);
