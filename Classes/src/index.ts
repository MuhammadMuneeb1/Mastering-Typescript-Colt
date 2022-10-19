// TypeScript CLasses;

/*
class Player{
    // "readonly" modifier only exists in TypeScript not in Javascript. It only allows us to read the value and will give error while updating it.
    // "public" and "private" modifiers exists in TypeScript only. By default properties and methods are in class are "public". To make any property or method, "private" we use "private keyword or # symboll" in TypeScript and only "#" in Javascript. "_" is just a convention that tells the developer about anything which is "private" but it doesnot make anything "private". 
    public readonly first: string;
    public readonly last: string; // use of "public" modifier is optional byDefault everything is public.
    // #score: number = 0;
    private score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
        // this.privateMethod();
    }
    private privateMethod(){
        console.log("Private Method!");
    }
}
*/


/*
// Parameters Properties ShortHand;
class Player{
    // Here with the use of "public" modifier in constructor. Now, we dont need to write extra code above constructor or inside it. It is shortHand of what we have done above.
    constructor(public first: string, public last: string) {}
    private privateMethod(){
        console.log("Private Method!");
    }
}
*/


/*
// The "protected" Modifier;
class Player{
    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) {}
    private privateMethod(){
        console.log("Private Method!");
    }

    // "getters" Method;
    get fullName(): string{
        return `${this.first} ${this.last}`;
    }
    get score(): number {
        return this._score;
    }

    // "setters" Method;
    set score(newScore: number) {
        if(newScore < 0) { throw new Error('Score cannot be negative!') }
        this._score = newScore;
    }
}
*/


/*
// "protected" modifier comes into play when we are working with inheritence. "protected" modifier is just like "private" modifier. But, "private" modifiers are only accessible inside the class in which it is declared. We cannot use "private" properties or methods inside the Child Classes. But, "protected" modifiers can be used and is accessible inside the child Classes. 
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore(){
        this._score = 999999;
    }
}

const elton = new Player("elton", "steele", 0);
console.log(elton.fullName); // call "getter" Method without ();
elton.score = 99;
*/


/*
// Classes & interfaces;
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

// "implements" keyword to implement interface in class.
class Bike implements Colorful {
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() { 
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 =  new Bike('red');

const jacket1 = new Jacket("Prada", "black");
*/



// Abstract Classes - This functionality only exists in TypeScript. "abstract" is a Modifier.
// instance of Abstract Class cannot be created e.g, new Employee();
// Using Abstract Class we define a Methods/Patterns which must be implemented by childClass.
abstract class Employee {
    constructor(public first: string, public last: string) {}
    // Here we will defined Methods which must exists in childClasses. Abstract Class purpose is similar to interfaces. But interfaces only defines shape of an Object. We can consider "abstract class" as a Hybrid of "Class" and "interfaces".

    // "abstract" keyword indicates that childClass must have that methods declared using "abstract" modifier.
    abstract getPay(): number; 
    // Here, we can also declare Methods here, just like other classes.
    greet() {
        console.log("HIII!");
    }
}


class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());