// Primitive (call by values)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// How to define 
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// this both id and anotherId verables value is not same

const bigNumber=3134165792213n;

// Non Primitive (Referance type)

//Array, Objects, Functions

const heros=["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Anshul",
    age: 27,
}

const myFunction = function() {
    console.log("Hello world");
}

// finding datatype then use typeOf
console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3