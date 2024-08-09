function multiply(a, b = 1){
    return a * b
};

function rollDie(numberOfSide) {
    if(numberOfSide === undefined) {
        numberOfSide = 6
    }
    return Math.floor(Math.random() * numberOfSide) + 1
}

// easy way default paremeter use 

function rollDie(numberOfSide = 5) {
    return Math.floor(Math.random() * numberOfSide) + 1
};


// display the smallest even number from an array

// debugger
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let minEven = numbers[1];
// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0 && minEven>numbers[i]) {

//     };
    
// };

// console.log(`The smallest even number is ${minEven}`);

// debugger
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let minEven = numbers[1];
// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0) {
//        console.log(numbers[i]);
//     };
    
// };

// console.log(`The smallest even number is ${minEven}`);


// display the element from an array which are divisible by 5 or 7

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i<array.length; i++){
//     if(array[i] % 5 === 0 || array[i] % 7 === 0) {
//         console.log(array[i]);
// };

// };

// let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// debugger
// for(let array of arrays){
//     if(array % 5 === 0 || array % 7 === 0){
//         console.log(array);
//     }
// }


/* display the element from an array which are divisible by 5 or 7

// function divisibleBy(divisible) {
    
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let i = 0; i<arrays.length; i++){
        if(arrays[i] % divisible === 0 || arrays[i] % divisible === 0) {
            console.log(arrays[i]);
            // if(arrays[i] === 5 || arrays[i] === 7){
            //   console.log(arrays[i]);
            // }
           };
    };

  
   
};

console.log(divisibleBy(5));
console.log(divisibleBy(7)); */

/*        display the element from array which are not divisible by 3  */

// let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//      for(let i = 0; i<arrays.length; i++){
//         if(arrays[i] % 3 !== 0){
//             console.log(arrays[i]); // output 1,2,4,5,7,8,10
//         };
//      };

/* display the smallest element from an array */
// debugger
    let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let element = arrays[0];
     let minEven;
    for(let i = 0; i<arrays.length; i++) { 
        if(element >= arrays[i]) {  
            smallElement = arrays[i] // logic 1>=1 karenge to condition true 1>=arrays[i] sab conditon false
            console.log(`small element is: ${smallElement}`); 
        };
            
    };
    
















