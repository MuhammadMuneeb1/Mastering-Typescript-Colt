import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

console.log("REACT_TYPESCRIPT");
// "typed variable";
const num: number = 123;
console.log("Number: ", num);

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
  return (
    <div className="App">
      <Greeter person="Colt" />
      <Greeter person="Blue" />
      <Greeter person="Elton" />
    </div>
  );
}

export default App;
