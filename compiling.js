"use strict";
// npx tsc 
// npx tsc -w filename.ts
// npx tsc --watch
const norma = {
    breed: "Chicken Breed",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2,
};
const juniper = {
    breed: 'Silkie',
    eggsPerWeek: 5,
    name: 'Juniper',
    age: 1,
};
const printProductSummary = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
