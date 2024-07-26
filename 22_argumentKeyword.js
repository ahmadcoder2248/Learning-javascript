// argument ko array me convert kiya phir sab element ko plus krke uska answer niakl
//diya

// function add() {
//     let sum = 0;
//     let array = [];

//   for(let i = 0; i < arguments.length; i++){
//        array.push(arguments[i]);
//        sum = sum + array[i];
      
//   } 
//     console.log(array);
//     return sum;
    
// };

// console.log(add(5, 2, 1));

//...............................................................................
                           // easy way me

// function add() {
//     let array = [];

//   for(let i = 0; i< arguments.length; i++){
//        array.push(arguments[i]); 
//   } 
//   return array.reduce((accu, value) => {
//    return accu + value
//   },0); 
// };

// console.log(add(5, 2, 1));

// ******************************************************************************

// array.from() method use kare hai argument value ko array me print karane ke liye

// function add() {
//         let sum = 0;
//         let arrayArguments;
//       for(let i = 0; i < arguments.length; i++){
//          sum = sum + arguments[i];
//          arrayArguments = Array.from(arguments);
          
//       };
//       console.log(arrayArguments);
//       return sum;
        
//     };
    
//     console.log(add(5, 2, 1));



//****************************************************************************** */

// function add2() {
//     let array = [];
//     for(let i = 0; i < arguments.length; i++) {
//         array[i] = arguments[i];
//     }
//     return array.reduce((accumulator, element) => {
//         return accumulator + element;
//     })
// }

// console.log(add2(1, 3, 4));



//********************************************************************************** */
//short form me likhe reduce method use krke argument ko print karaya

// const array = function() {
//     return Array.from(arguments).reduce((accumulator, value) => {
//         return  accumulator + value;    
//     }, 0);
// };

// console.log(array(1, 3, 6));







