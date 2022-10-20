"use strict";
const getRandomThing = (list) => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
};
