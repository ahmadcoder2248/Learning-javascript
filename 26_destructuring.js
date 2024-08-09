const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white'];
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

// const [color1, color2, color3] = colors// common way yahi array ko destructuring krte hue
// const [, , , color4] = colors
// const { 3: color4, 5: color5 } = colors  // door index wale value ko acces krna hai ye wala

const user = {
    name: 'Anurag',
    age: 25,
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
    },
}


// const name = user.name // old version how to access object value
// const age = user.age  // old version  how to access object value

// const { name,age} = user // object ki is tarah se destructuirng

// const {name: username, age: userAge} = user

// const {address: {state,city}} = user

// function intro({age,name}) {
//     console.log(age,name);
// }
// intro(user);


// function printColor([a,b,,g]) { // common aise hi krte hai
//    console.log(a,b,g);
// }

// printColor(colors);



// function printColor({4: color5}) {
//     console.log(color5);
//  }
 
//  printColor(colors);





