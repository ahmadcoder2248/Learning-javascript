
/*The object is a collections of key pair in javascript 
  you can create nested object */

const user = {
    firstName: 'Akash'
}


// const user2 = {
//     firstName: 'Adarsh',
//     lastName: 'singh',
//     anurag: 'Developer'
// }

// console.log(user2.lastName);
// console.log(user2['lastName']);
// console.log(user2[myName]);
// console.log(user2['first'+'Name']);



const user2 = {         
    firstName: 'Adarsh',
    lastName: 'singh',

    pata: {
        city: 'Bangalore',
        pinCode: 876776,
        state: 'Karnataka',

        moreDetails: {
            population: 943565766,
            area: '567 sq km',
        }
    }
    
}
console.log(user2.firstName);

