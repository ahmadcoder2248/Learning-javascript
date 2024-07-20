const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

//Normal loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for-of-loop
for(const fruit of fruits) {
   console.log(fruit);
}

// apply on string it is work
const user = 'Ahmad'
for(const letter of user) {
    console.log(letter);
}

// for-in-loop

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    City: 'Bangalore',
};


for(const key in person) {
    console.log(key, ':', person[key]);
}

// easy way
const personKeys = Object.keys(person)
const personvalues = Object.values(person)
const personEntires = Object.entries(person)

for(const key of personKeys) {
    console.log(key, ':', person[key]);
}

console.log(personKeys);