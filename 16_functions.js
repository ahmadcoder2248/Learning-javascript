function introduceMe(username,stream,age) { 
    console.log('Hi');
    console.log(`My name is ${username || 'empty'}` );
    console.log(`i am a ${stream || 'workless'}.`);
    console.log(`He is ${age} years old`);
    
}

introduceMe('ahmad','software Engineer', 21)
introduceMe('sajid','karigar',23 )
introduceMe('saif','worker',20)

function addTwoNumbers(num1,num2) {
    debugger
    return num1 + num2
    
}

const result = addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12))

console.log(result);


//  ........write a function to print sum of array element mtlb array ki value ko +krke answer likho .............

function sumArray(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i] // ye i wala loop array ki index ki har ek value ko acces krega har baar jab loop chalega
    }
    return sum  // ye sum me result hai kitna plus hoke aya hai answer is 10
}

console.log(sumArray([1, 2, 3, 4, 5])); 



//........................write a array to print sum of element............................

  let arrays = [1, 2, 3, 4]
  let sum = 0
 for(let i = 0; i < 4; i++){
     sum = sum + arrays[i]
 
  }
  console.log(`The sum of array element is : ${sum}`);



// let num = (1, 2, 100, 40)
// let maxNum = Math.max(num)
 
// console.log(finalmax);


// console.log(Math.max(15, 12, 3, 64));

/* find Maximum Element 
write a function maxElement that takes an array of numbers and returns the maximum element
*/ 


function maxElement(arr){
let max = arr[0];

for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }

}
return max;
}

console.log(maxElement([4, 2, 13, 1]));


function Number(num1,num2,num3) {
  if(num1>num2 && num1>num3){
    return num1
  } else if (num2>num1 && num2>num3) {
    return num2
  }  else {
    return num3
  }
  
    
}

let greatestNum = Number(140,1500,45)
console.log(`The Greatest Number is: ${greatestNum}`);

// write a function take an array of number and find min-Element
s
function minElement(array) {
   let min = array[0];
  for(let i = 1; i < array.length; i++) {
      if( array[i] < min ) {
        min = array[i]
      }
       
  }
  return min
}


console.log(` The Minimum element is: ${minElement([25, 10, 15, 20])}`);
