// Always add ".js" extension while importing.
// "webpack" automatically add extensions at the end of the imports so there is no need to add ".js" extension while importing, when using typescript with webpack...
import Dog from "./Dog";

export default class ShelterDog extends Dog {
    constructor( name: string, breed: string, age: number, public shelter: string ) {
        super(name, breed, age)
    }
}
