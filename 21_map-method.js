/* ..........................forEach Method.............................................
const months = ['january', 'february', 'march', 'april', 'may'];
    const capitalMonths =  months.forEach((month,index) => {
    console.log(index + 1,month);
     return month.toUpperCase()
      });
     console.log(capitalMonths); */



     //.........................map method................................
/* const months = ['january', 'february', 'march', 'april', 'may'];

const capitalMonths =  months.map((month, index, array) => {
    // console.log(index + 1,month);
    console.log(array);
    return month.toUpperCase();
       console.log(capitalMonths); 
});   */

//.............................filtered method.........................................

//  const months = ['january', 'february', 'march', 'april', 'may', 'December'];

// const filteredMonths =  months.filter((month, index, array) => {
//         // console.log(month);
//         return month.toLowerCase().includes('m');
//     });


// const months = ['january', 'february', 'march', 'april', 'may', 'December'];

// const filteredMonths =  months.filter((month, index, array) => {
//         // console.log(month);
//         return index >= 3;  //index value 3 >= 3, 4 >= 3, 5 >= 3 print output 
//         });

/* const students = [
    {
        name: 'Akash',
        age: 21,
    },

    {
        name: 'Adarsh',
        age: 17,
    },

    {
        name: 'Amir',
        age: 18,
    },

    {
        name: 'Raman',
        age: 23,
    },

    {
        name: 'Nidhi',
        age: 16,
    },

];


const adultStudents = students.filter((student) => {
    return student.age >= 18;
}).map((student) => {
    return student.age;
}).filter((student) => {
    return student.includes('A');
}); */


//............................reduce method.....................................

// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((accumulator, current, i) => {
//     // console.log(i, current);
//     // console.log(accumulator, current);
//     // debugger
//     return accumulator * current
// }, 1);


//.................................Some method......................................

/* const evenNumber = [0, 2, 3, 4, 6, 8];

const output = evenNumber.some((num, index) => {
    if(num % 2 === 1) {
        console.log(index);
    }
    return num % 2 === 1
});  */

// ................................every method......................................

/* const evenNumber = [0, 2, 3, 4, 6, 8];

const output = evenNumber.every((num) => {
    return num % 2 === 1
}); */


//..............how to acces first element in object or array .......................
// const users = [
//     {Name: 'Alice', Age: 25},
//     {Name: 'Bob', Age: 30},
//     { Name: 'Charlie', Age: 35},
// ];

// users.forEach((user,index) => {
//     if(index === 1) {
//         console.log(`Name: ${user.Name}, Age: ${user.Age}`);
//     }
  
    
// });

// const output = users.map((user, index) => {
//     if(index === 1) {
//         return `Name: ${user.Name}, Age: ${user.Age}`
//     }
// });

// const firstUser = users[0];
// console.log(`Name: ${firstUser.Name}, Age: ${firstUser.Age}`);

//...............filter out Null or Undeifned values...........................

// const values = [1, null, 2, undefined, 3, null, 4];
// const filteredValues = [];
// // debugger
// const filter = values.filter((value) => {
//     if(value !== null && value !== undefined) {
//         filteredValues.push(value);
//     }
// });
// console.log(filteredValues);

