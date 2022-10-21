"use strict";
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
const el = document.getElementById("id");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word;
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};
function someVal(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someVal("3", "3");
const pet = {
    name: "Kitty",
    age: 20
};
"name" in pet;
"breed" in pet;
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRunTime({ title: "Amadeus", duration: 160 }));
console.log(getRunTime({ title: "SpongBob", numEpisodes: 80, episodeDuration: 30 }));
function printFullDate(date) {
    if (date instanceof Date) {
        date.toUTCString();
    }
    else {
        new Date(date).toUTCString();
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
