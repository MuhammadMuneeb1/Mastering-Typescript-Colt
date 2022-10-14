// Array of DataType "Empty Array []". Only accepts "0".
const emptyArray: [] = [];

const stringArray: string[] = [];
stringArray.push("Muneeb");

const numberArray: number[] = [34, 56, 13];
numberArray[0] = 40;
numberArray[1] = 45;

// dataType[] or Array<dataType>;
const booleanArray: boolean[] = [true];
const booleanArray2: Array<boolean> = [false];

// objectType Array;
type Point = {
    x: number;
    y: number;
}

const objTypeArray: Point[] = [];
objTypeArray.push({ x: 23, y: 8 });

// Nested Arrays
// dataType[][]: for 2-Dimensional Array;
const nestedArray: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];

// dataType[][][]: for 3-Dimensional Array;
const threeDimensionalArray: number[][][] = [[[1]]];