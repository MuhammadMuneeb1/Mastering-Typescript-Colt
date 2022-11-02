import React, {useState} from 'react';
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/items';
// Install "uuid" using "npm install uuid" and also Install uuid "types" using "npm install --save-dev @types/uuid". And, import "v4" from uuid. Third-party packages "types" are required in Typescript. Therefore, It is necessary to install them.
import { v4 } from 'uuid';

console.log("REACT_TYPESCRIPT");
// "typed variable";
const num: number = 123;
// console.log("Number: ", num);

/*
".tsx" is a TypeScript version of ".jsx" which allows us to write TypeScript with HTML Templating Syntax.

Generics, Arrow Functions, & ".tsx" Files;
A Regular function like this is fine in ".tsx"; 
function getRandomThing<T>(list: T[]): T{
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}

But when we convert the same function into Arrow Function, It will give an Error. ".tsx" will think that "<T>" is an HTML Element. So to avoid this Error add "trailing comma" like this "<T,>" in ".tsx" File. In ".ts" File there is no need to add "trailing comma", "ts" will not give any Errors since it doesn't use HTML Templating Syntax."trailing comma" is only required in ".tsx" Files.
*/
const getRandomThing = <T,>(list: T[]): T => {
  const random = Math.floor(Math.random() * list.length);
  return list[random];
}
// console.log(getRandomThing);


function App() {
  // useState have "type" of Generic Item Interface Array "<Item[]>", We Provide Generic Types to useState Hook.
  // items type is "Item[]".
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT!");
    // console.log(product);
    // Change "id: number;" to "id: string;" in models/items.ts;
    setItems([...items, {id:v4(), product, quantity}]);
  }

  // Array of Objects;
//   const items = [
//     {id:1, product: "Lemon", quantity: 3},
//     {id:2, product: "Chicken Breast", quantity: 2},
// ];

  return (
    <div className="App">
      {/* passing "items" which is an Array of Objects as a props to "ShoppingList" Component. */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;

// React Components are defined using "PascalCase" Convention and Regular Functions are defined using "camelCase" convention.

// @IMPORTANT CheatSheet-React-TypeScript:  https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/

