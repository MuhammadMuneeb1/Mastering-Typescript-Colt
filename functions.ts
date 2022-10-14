function num(num: number){
    return num * num;
}

function str(person: string){
    return `Hi there ${person}`;
}

const manyParams = (person: string, age: number, isFunny: boolean) => {}

function defaultParam(person: string = 'Muneeb'){
    return `Hi there ${person}`;
}

function funcReturnTypeNum(num: number): number {
    return num * num;
}

function funcReturnTypeStr(person: string = 'Muneeb'): string{
    return `Hi there ${person}`;
}

function funcReturnTypeUnion(num: number): string | number {
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}

num(1);
str('Muneeb');
manyParams('Muneeb', 23, true);
defaultParam();

// Anonymous Function Contextual Typing;
const colors = ['red', 'yellow', 'green'];
colors.map(color => {
    return color;
});

// Function return Type 'void';
function funcReturnTypeVoid(msg: string): void{ // "void": function return null or undefined;
    console.log(msg);
}

// Function return Type 'never';
function makeError(msg: string): never {  // "never" : specifies that functions never even get a chance to return anything;
    throw new Error(msg);
}

function gameLoop(): never{
    while(true){
        console.log("Game Loop Running!!!");
    }
}