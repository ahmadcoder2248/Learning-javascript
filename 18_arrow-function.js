//function decleration
function square(num) {
    return num * num
}

// function expression
const square = function(num) {
    return num * num
}

// arrow function Expression

 const square = (num) => {
 return num * num  explicit return we use return keyword 
 } 
  
/* only one argument you pass you can acces without parentesis  const sqaure = num => num * num */

// example
const add = (a,b) => a + b
console.log(add(5,6));

const cube = (num) => num ** 3
console.log(cube(3));


const evenNumber = (num) => {
  return num % 2 === 0 ? 'even' : 'odd'
    }

console.log(evenNumber(4));

