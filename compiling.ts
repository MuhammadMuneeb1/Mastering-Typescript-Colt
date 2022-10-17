// npx tsc 
// npx tsc -w filename.ts
// npx tsc --watch

interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
}

const norma: Chicken = {
    breed: "Chicken Breed",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2,
}

const juniper: Chicken = {
    breed: 'Silkie',
    eggsPerWeek: 5,
        name: 'Juniper',
        age: 1,
}

interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProductSummary = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`);
}