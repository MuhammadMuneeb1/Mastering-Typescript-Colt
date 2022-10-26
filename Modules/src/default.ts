// Default Exports - Default Exports can be used only one default export per module or per file.


// NOTE: Any explicitly marked "type" import is guaranteed to be removed from your JavaScript File, and tools like Babel can make better assumptions about your code via the "isolatedModules" compiler flag.

// Importing "interface Person" from "./types.js". This is Named "import". Use "type" keyword to import types in Typescript. It makes "type" imports safer.
import type { Person } from "./types.js";

// We can also import Typescript "type" like:
import { type Color } from "./types.js"; // Named "type" import



// This class is implementing Person interface imported from "./types.js".
export default class User implements Person {
    constructor(public username: string, public email: string) {}
}

// We can also mix default export with named exports.

// Named Export;
export function userHelper(): void {
    console.log("USER HELPER!!!");
}