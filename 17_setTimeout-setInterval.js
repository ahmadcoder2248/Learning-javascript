
const hii = 'hello' 
const timer1 = setTimeout(`console.log("Hi-1")`, 1000)
const timer2 = setTimeout(`console.log("Hi-2")`, 2000)
const timer3 = setTimeout(a, 3000, 'lsg', 99)

const timer4 = setInterval(`console.log("Hi-1")`, 1000)
const timer5 = setInterval(a, 3000, 'lsg', 99, 89, 'skjj', [1, 7]);





// function a() {
//     // console.log(arguments);
//     console.log('Hello World');

// }


// console.log('Hi-1');

// function hello() {
//     console.log('Hello World');
// }


for(let i = 1; i<=4; i++) {
    console.log(i);
}

hello()
setTimeout(hello, 0);


console.log('Hi-2');



// debugger
// function outer() {
//     const a = 4
//     function parent() {
//         const b = 6
//         function add() {
//             console.log(a + b);
//         }
    
//         return add
//     }
//    return parent()
// }

// const add1 = outer();

// console.dir(add1);
// debugger
// function parent() {
//     let a = 5;
//     function child(increament) {
//        a = a + increament;
//     }

//    return child 
// }

// const y = parent();
// const y2 = parent();
// console.dir(y);
// console.dir(y2);


// debugger
// function doSomething() {
//    const username = 'john'
//    function callBackFunction() {
//       console.log(username);
//    }
//    console.dir(callBackFunction);
//    setTimeout(callBackFunction, 2000)
// }

// doSomething()
// debugger
// function createOnceFunction() {
//    let executed = false;

//    return function() {
//       if (!executed) {
//          executed = true
//          console.log('congratulations! you have called the function.');
//       }
//    }
// }

// const z = createOnceFunction() 

// z()



// debugger
// sayHi()

// var sayHi = function(){
//   console.log('hiii');
// }


// const maths = {
//   add: function(a,b) {
//     return a+b
//   },
//   square: function (num){
//     return num * num
//   },
//   substract(a,b) {
//    return a - b
//   },

//   cube(num) {
//    return num ** 3
//   } 
// }

// // console.log(maths.add(5,6));

// console.log(maths.cube(4));

















