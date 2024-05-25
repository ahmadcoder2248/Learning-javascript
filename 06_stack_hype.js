// Stack (Primitive),=> me copy value jata hai orginal nahi   Heap (Non-Primtive) => me original value jata hai 
let myYoutubename = 'ahmadshaikh';

let anothername = myYoutubename;
anothername = 'chaiaurcodee';

//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne
userTwo.email = 'ahmad@google.com';
// console.log(userOne.email);
// console.log(userTwo.email);


// Example

let number = 34;
let anotherNumber = number;
anotherNumber = 56;
console.log(number);
console.log(anotherNumber);


let product = {
    item: 'book',
    price: 100
};

let anotherProduct = product;
anotherProduct.price = 200;

console.log(product.price);
console.log(anotherProduct.price);
