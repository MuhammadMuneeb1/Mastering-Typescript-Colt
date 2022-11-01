import React from "react";

// By default, ".jsx" or ".tsx" elements are of type, "JSX.Element". This is a Regular Function not a React Functional Component.

// Specifying the "types" of props in neccessary.
interface GreeterProps {
    person: string;
}
/*
function Greeter(props: {person: string}): JSX.Element {  Here "Object" is a type of props we are receiving in this function. */

/*
function Greeter(props: GreeterProps): JSX.Element { Here "interface" is a type of props we are receiving in this function. */

function Greeter({ person }: GreeterProps): JSX.Element { // In React we can also Destructure from the props. 
    return <h1>Hello, {person}</h1>;
}

/*
To define React functional components use "React.FunctionComponent" or in short "React.FC", type annotation.

const ReactFunctionalComponent: React.FC = () => {
    return <h1>Hello!</h1>;
}
*/

// Regular Functions are cleaner way to write React Functional Components.


export default Greeter;