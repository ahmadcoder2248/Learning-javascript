/* const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

 fruits.forEach(function (fruit)  {
     console.log(fruit);
 }); */

/* easy way with arrow function

   fruits.forEach((fruit) => {
    console.log(fruit);
    });  

 function abc(el) {
     console.log(el);
 }

 fruits.forEach(abc);  */


// forEach Method use easy way solution 

/* const numbers = [1, 2, 3, 4, 5];
 let sum = 0;
numbers.forEach((num) => {
     sum = sum+num 
});

console.log(sum);  */

// using for loop to sum of all element

/*debugger
     const sumElement = (array) => {
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum = sum+array[i];
    };
    return sum; 
};  
 console.log(sumElement([1, 2, 3])); */


 // forEach Method use easy way solution 

/* debugger
const sumElement = [1, 2, 3, 4, 5, 15];
let sum = 0;

sumElement.forEach(function(number){
    sum = sum + number
});

console.log(`Total sum is ${sum}`); */


// 3.......... print element with their index...................

// const fruits = ['apple', 'banana','cheery', 'grapes'];

// fruits.forEach(function(fruit,index) {
//     console.log(`${index}: ${fruit}`);
// });

/* easy way with arrow function

fruits.forEach((fruit,index) => {
    console.log(`${index}: ${fruit}`);
}); */


// 4. ..............convert each string into uppercase .....................

//  const fruits = ['apple', 'banana','cheery', 'grapes'];
//  let uppercase;

// using first for loop 

 /* for(let i = 0; i<fruits.length; i++) {
    uppercase = fruits[i].toUpperCase()
    console.log(uppercase);
 }; */

 // using for-of-loop

//  const fruits1 = ['apple', 'banana','cheery', 'grapes'];
//  let uppercase1;

 /* for(const fruit of fruits) { // fruit is new variable storing fruits values
    uppercase1 = fruit.toLowerCase();
    console.log(uppercase1);
 }; */


 //using forEach Method and using anonymous function

/* const fruits2 = ['apple', 'banana','cheery', 'grapes'];
   let uppercase2;

 fruits.forEach(function(fruit){
    uppercase2 = fruit.toUpperCase();
    console.log(uppercase2);
 }); */


 // using arrow function with forEach method

 /* const fruits3 = ['apple', 'banana','cheery', 'grapes'];
  let uppercase3;

 fruits3.forEach((fruit) => {
    uppercase3 = fruit.toUpperCase();
    console.log(uppercase3);
 }); */

 // 5. ...............add suffix to each string.....................

 // using for loop

 /* const fruits = ['apple', 'banana', 'cherry'];

 for(let i = 0; i<fruits.length; i++) {
    console.log(`${fruits[i]} fruit`);
 };  */

 /* using for-of-loop

  const fruits = ['apple', 'banana', 'cherry'];
 
  for(let fruit of fruits){
    console.log(`${fruit} fruit`);
  } */

/* using forEach method using anonymous function

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit){
    console.log(`${fruit} fruit`);
});  */

/* using forEach method using arrow function

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit) => {
    console.log(`${fruit} fruit`);
}); */


// print even and odd number take an array of number 

// count even number in loop 
/*const numbers = [1, 2, 3, 4, 5, 6];

for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] % 2 === 0)  {
        console.log(`isEven: ${numbers[i]}`);
    }
    else {
        console.log(`oddNum: ${numbers[i]}`);
    }
};   */

/* using for-of-loop
const numbers = [1, 2, 3, 4, 5, 6];

for(let num of numbers) {
    if(num % 2 === 0) {
        console.log(`isEven: ${num}`);
    }
    else {
        console.log(`isOdd: ${num}`);
    }
}; */

/* using anonymous funtion and forEach method
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function(num){
    if(num % 2 === 0){
        console.log(`isEven: ${num}`);
    }

    else {
        console.log(`isOdd ${num}`);
    }
}); */

/* using arrow function with forEach method

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((num) => {
   if(num % 2 === 0){
    console.log(`isEven: ${num}`);
   }

   else {
    console.log(`isOdd ${num}`);
   }
}); */

// ...............count even number .....................

// using simple loop

// const numbers = [1, 2, 3, 4, 5, 6];
// let count = 0;

// for(let i = 0; i<numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//       count++;
      
//     }
    
// };
// console.log(`total even Number is ${count}`);

/* using for of loop

 const numbers = [1, 2, 3, 4, 5, 6];
 let count = 0;

 for(let num of numbers){
    if(num % 2 === 0) {
        count++;
    }

 };

 console.log(`Total even Number is ${count}`); */

/*using forEach method and anonymous function
const numbers = [1, 2, 3, 4, 5, 6];
let count = 0;

numbers.forEach(function(num){
    if(num % 2 === 0){
    count++;
    }
})

console.log(`total even is: ${count}`); */

/* using arrow function with forEach method

const numbers = [1, 2, 3, 4, 5, 6];
let count = 0;

numbers.forEach((num) => {
    if(num % 2 === 0){
        count++;
    }
});

console.log(`total even is ${count}`);  */

/* ......create a new array with modified element 
   wap that uses forEach to create a new array where each element is doubled
   and print the new array................

   const numbers = [1, 2, 3, 4, 5,];
   let doubledNumber = [];

   for(let i = 0; i<numbers.length; i++) {
   doubledNumber.push(numbers[i] * 2)

   };
   console.log(doubledNumber); */

   /*
   const numbers = [1, 2, 3, 4, 5,];
   const doubleNumber = [];

   numbers.forEach(function(number)  {
    doubleNumber.push(number * 2)
   });
   console.log(doubleNumber); */


  /* 
   const numbers = [1, 2, 3, 4, 5,];
   const doubleNumber = [];

   numbers.forEach((number) => {
    doubleNumber.push(number * 2)
   });
   console.log(doubleNumber);*/

   /*
   const infor = {
    firstName: 'Ahmad',
    age: 21,
    isGraduate: 'true',
   };


   for(let key in infor){
   
    console.log(key, ':', infor[key]);
   } */

    // const users = {
    //     Name: 'Alice',
    //     Age: 25,
    //     Name: 'Bob',
    //     Age: 30,
    //     Name: 'Charlie',
    //     Age: 35
    // };

    // users.forEach((user) => {
    //     console.log(`Name: ${user.Name}, Age: ${user.Age}`);
        
    // });






