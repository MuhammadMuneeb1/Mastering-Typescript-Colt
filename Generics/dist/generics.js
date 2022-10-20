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
const randomElement = (list) => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
};
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pet: ["blue", "elton"] });
merge({ name: "colt" }, { pet: ["blue", "elton"] });
console.log(merge({ name: "colt" }, 9));
function merge2(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge2({ name: "colt" }, { num: 9 }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("asadasdsa");
function makeEmptyArray() {
    return [];
}
const stringArray = makeEmptyArray();
stringArray.push("abc");
const unknownTypeArray = makeEmptyArray();
function makeEmptyArray2() {
    return [];
}
const nums = makeEmptyArray2();
const bools = makeEmptyArray2();
class VideoPlaylist {
    constructor() {
        this.videos = [];
    }
}
class SongPlaylist {
    constructor() {
        this.song = [];
    }
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add({ title: "Song", artist: "s" });
const videos = new Playlist();
videos.add({ title: "Video", creator: "v", resolution: "720p" });
