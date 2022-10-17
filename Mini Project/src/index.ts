// "document" - dataType is "Document".
// const btn = document.getElementById('btn');
// console.log(btn);

// "hello".replaceAll("l", "!");
// btn.addEventListener('click'); Error - we cannot add events to a button just like javascript in typescript.

// Solution no.1 - Use Optional chaining "?." operator. It accesses an object's property or calls a function. If the object is "undefined" or "null", it returns "undefined" instead of throwing an error.

// btn?.addEventListener('click', function() {
    // alert('Clicked');
// }); 

// or use Non-Null Assertion Operator "!" - It tells typescript that a value is not "null";
// Now, "button" variable dataType is "HTMLElement".
// use "!" only in the situation where you know that Html Elements value would be found via typescript. Else, don't use it.
const button = document.getElementById('btn')! as HTMLButtonElement;

// Type Assertion "as";
// For "Type Assertion" we use "as" Keyword. Only use in a situation where we are sure about dataType but Typescript has less information.
let mystery: unknown = "Hello World";
// Now, mystery will be treated as a "string" only here in this line elsewhere it will be treated as "unknown".
const numofChars = (mystery as string).length;


// Type Assertion "as" with the DOM.
// since "todoinput" id exists in HTML we will add "!" in the end.
// Now "input" is HTMLElement. But, typescript doesnot know what kind of HTMLElement it is. So to let typescript know more about HTMLElement we use Type Assertion "as".
const input = document.getElementById('todoinput')! as HTMLInputElement; // In Chrome, console.dir(HTMLElement) [e.g, console.dir(input)] to find it's type.

// button.addEventListener('click', function(){
//    console.log(input.value);
//    input.value = ""; // "reseting input" after button click.
// });


// Alternate syntax of using Type Assertion is "<>". But, It doesnot work with JSX or TSX. Because, <> are used to write HTML in React.
// (<HTMLInputElement>input).value;

// Selecting by "id".
// const form = document.querySelector("#todoform");
// Another way of selecting, selecting HTML Tag.
const form = document.querySelector("form")!;

const list = document.getElementById('todolist')!;

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = [];

// "e" dataType is "SubmitEvent". Which is type of Events.
function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
}

function createTodo (todo: Todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
