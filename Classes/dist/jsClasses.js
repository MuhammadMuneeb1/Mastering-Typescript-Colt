"use strict";

// Classes in Javascript;
class Player {
    // By Default every field/property in class in "public";
    // score = 1;
    // "_" is just for developer to understand that a property should be "private", don't touch it. otherwise if developer use it outside of a class, it doesnot have any effect on a code it will not give any error; 
    // _score = 1;
    // "#" allows us to make fields "private" in Class. Then these fields will not be accessible outside a class;
    #score = 1;
    numLives = 10;
    static description = "Player In Our Game!";
    constructor(first, last){
        this.first = first;
        this.last = last;
        // this.score = 0;
        // this.numLives = 10;
        this.#privateMethod(); // To call private Method inside a class. 
    }
    // To make private fields accessible outside a class:
    getScore(){
        return this.#score;
    }
    // To Update private fields, updating private fields is allowed inside a class:
    updateScore(newScore){
        this.#score = newScore;
    }
    taunt(){
        console.log('BOOYAH!');
    }
    loseLife(){
        this.numLives -= 1;
    }
    // "private" Methods;
    #privateMethod(){
        console.log("This is a Private Method!");
    }
    // "getters" Method;
    get fullname(){
        return `${this.first} - ${this.last}`;
    }
    // using "getters" for private property.
    get score(){
        return this.#score;
    }
    // "setters" Method;
    set score(newScore){
        if(newScore < 0) { throw new Error("Score must be positive") };
        this.#score = newScore;
    }
    set fullname(newName){
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }

    // "static" Method tells Javascript that property or method exists on class itself and is not going to exist in each individual instance.
    static randomPlayer() {
        return new Player("Andy", "Samberg");
    } // To call static Method: className.StaticMethodName();

}

// Inheritence;
class AdminPlayer extends Player { // This childClass will have access to all the properties/fields and Methods defined in parentClass.
    constructor(first, last, powers){
        super(first, last); // "super()" reference the constructor function of parentClass. It is use to run/access, parentClass constructor();
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete", "update"]);

// const player1 = new Player("Blue", "Steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1._score = 12);
// console.log(player1.getScore());
// console.log(player1.updateScore(28));
// console.log(player1.getScore());
// console.log(player1.fullname); // Don't use () to call getters.
// console.log(player1.score); // calling get Method score with private field.
// player1.score = -21321312;
// player1.score = 432;
// console.log(player1.score);
// console.log(player1.fullname); // Don't use () to call setters.
// player1.fullname = "Amy Adams";
// console.log(player1);

// const player2 = new Player("charlie", "brown");
// player2.taunt();
// console.log(player2.first);
// console.log(player2.last);
