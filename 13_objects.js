
/*The object is a collections of key pair in javascript 
  you can create nested object */
  
  let username = 'ahmad'


const user = {         
    firstName: 'Adarsh',
    lastName: 'singh',

    pata: {
        city: 'Bangalore',
        pinCode: 876776,
        state: 'Karnataka',

        moreDetails: {
            population: 943565766,
            area: '567 sq km',
        },
    },
    age: 15,
    isGraduate: false,
    
}
 console.log(Object.seal(user)) // apply this method nobody can add and delete object only you can modify your property
 console.log(Object.freeze(user)) // aplly this method nobody can change anything in your object
 console.log('mobileNumber' in user); 



