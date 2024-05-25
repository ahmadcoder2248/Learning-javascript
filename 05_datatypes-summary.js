// Primitive 

// 7 types : String, Number, Boolean, null, undeifined, Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//const bigNumber = 34565544566689996n;

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ['shaktiman', 'spiderman', 'batman'];
let myObj = {
    name: 'ahmad',
    age: 22,
};

const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof userEmail);
