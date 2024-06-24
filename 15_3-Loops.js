/* 3 Types of Loops

for loop
while loop
do while loop */


// 1............. while Loop....................

// console.log('Program Started');


let k = 1

while (k <= 100) {
    console.log(i)
    k++
}


// let friends = ['Ahmad', 'Rehan', 'Sajid', 'Abbas', 'Saif']
// let i = 0

// while (i < friends.length) {
//     console.log(`${i + 1}. ${friends[i]}`);
//     friends[i] = friends[i] + '500'
//      i++
// }


// ..................for loop....................... 

// 1st example
console.log('Program Started');

let friends1 = ['Oppo', 'Vivo', 'Iphone', 'Realme']

for(let i = 0; i < friends1.length; i++) {
    console.log(` ${i + 1}. ${friends1[i]}`);
    // friends1[i] = friends1[i] + 10000
}
console.log('Program Ended');


// 2nd example

let mobileShop = [{
    customerName1: 'ahmad',
    mobileName: 'Oppo',
    price : 35000 },

    {
     customerName2: 'sajid',
     mobileName: 'Vivo',
     price: 15000
    },

    {
        customerName3: 'rehan',
        mobileName: 'Realme',
        price: 12000
    }


];


for(let i = 0; i < mobileShop.length; i++){
    // console.log(mobileShop[i]);
    mobileShop[i].price = mobileShop[i].price + 1000
    
}
console.log(mobileShop);

// 3rd Example

for(let i = 0; i<=100; i++) {
    if(i%2 === 0){
        console.log(`Even Number: ${i}`);
    }
}

// 3.................do while loop...................

// 1st example
let i = 0
do {
    console.log(i);
    i++
} while (i<5);


