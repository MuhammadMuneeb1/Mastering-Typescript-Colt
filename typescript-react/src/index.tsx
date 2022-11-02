import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

/*
To Create TypeScript Version of React App: 
"npx create-react-app my-app --template typescript", Command.
Or, we can install React Typescript Types, from DefinitelyTyped GitHub Respository, DefinitelyTyped --> types --> React. In DefinitelyTyped Respository we can find "types" of almost everything which uses Typescript.

And, in React-TypeScript-App, We don't need to run "tsc" command everytime, Here Webpack is taking care of everything.
*/
