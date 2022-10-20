// Generics, Arrow Functions, & TSX Files;

// A Regular function like this is fine in "tsx". 
// function getRandomThing<T>(list: T[]): T{
//     const random = Math.floor(Math.random() * list.length);
//     return list[random];
// }

// But when we convert the same function into Arrow Function, It will give an Error. "tsx" will think that "<T>" is an HTML Element. So to avoid this Error add "trailing comma" like this "<T,>" in "tsx". In "ts" there is no need to add "trailing comma", "ts" will not give any Errors."trailing comma" is only required in "tsx".
const getRandomThing = <T,>(list: T[]): T => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}