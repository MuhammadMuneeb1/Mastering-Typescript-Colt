// Modules - Modules helps us to share code between different files using "export" and "import".

// "import" from ".js" files not from ".ts" files otherwise, It will give an Error. With Named Exports we need to add { } while, importing. And, these imports are known as Named imports. In Named Import name has to match with exported piece of code name. But, we can also use other names for Named imports or we can rename Named imports while importing. Just use "as" keyword and specify other name you want to use.
import { userHelper } from "./default.js";
import { add, sample as randomSample } from "./named.js";

// Default Imports - We don't need { } for default imports. And, instead of "User", we can use any other name too, which will act as a container for this default import. In Default Import name does not has to match with exported piece of code name.
import User from "./default.js";



// To use sample and add functions in this file we will either have to create a module
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
userHelper();


// In Browser Console, it gives an error that "exports is not defined" and "Cannot use import statement outside a module" to overcome these errors change "module": "commonjs", to "module": "ES6", in tsconfig.json. And, specify type="module" attribute in HTML file script tag.
