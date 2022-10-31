// Webpack takes modules with dependencies and generates static assets representing those modules. Webpack bundles everything togather.
// Always add ".js" extension while importing.
// "webpack" automatically add extensions at the end of the imports so there is no need to add ".js" extension while importing, when using typescript with webpack...
import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";
console.log("From Index File!!!!!!!!!!");

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Spring Shelter");

// npm install --save-dev  webpack webpack-cli typescript ts-loader
// This command will add dev dependencies of these packages in package.json. "ts-loader" is a middleman b/w typescript and webpack. And, we are re-installing "typescript" because it is a good practice to do so.



// npm run build - for using/running webpack. include "build": "webpack" in package.json "scripts" section.
// WEBPACK: While using webpack with typescript. There is no need to generate javascript files for every typescript file. Webpack will bundle all of typescript files and will make a new javascript file called "bundle.js" in dist folder, which we can then add into our "html" file for use. And, With Webpack we don't need to add type="module" attribute in script tag in html file because bundle.js is single bundled file for all ".js" generatings.

// Adding Source Maps;
// Enable "sourceMap": true, in tsconfig.json 
// To view souce maps of typescript files visit "souces" tabs in console.


// Webpack Dev Server - Is a live server just like lite-server but it handles buildings behind the scenes and it does it in the memory. With Webpack Dev Server, When we run "npm run serve" bundle.js file is generated in memory not in dist folder. But, when we run "npm run build" it generates bundle.js file in dist folder.

// Production Configuration;
// clean-webpack-plugin will empty out dist folder everytime when a new bundled javascript file is created because of "[contenthash].bundle.js", included in webpack.prod.js file. We need to install this plugin using "npm install --save-dev clean-webpack-plugin" command. We will only have our most recent bundled hashed javascript file in the dist folder. clean-webpack-plugin is only needed in production mode. In development mode there is no need of including [contenthash].bundle.js in webpack.prod.js and for installing and using clean-webpack-plugin. "webpack-dev-server" takes care of everything in development mode.

// rename webpack.config.js to webpack.dev.js. Now it's not a default config file anymore so specify "--config webpack.dev.js" in "serve": "webpack-dev-server --config webpack.dev.js" in script section of package.json file.


// npm run serve for development mode.
// npm run build for production mode.