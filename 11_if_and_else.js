const userName = prompt('Please Enter Your Name') 
const userAge = +prompt('Enter Your Age') 


console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);


if(userAge >= 18 && userAge <= 24) {
    console.log(`${userName} is a working professional.`);
    console.log(`And ${userName} is learning computer science`);
}

 else if(userAge >= 24 && userAge <= 45) {
    console.log(`${userName} is a senior working professional.`);
    console.log(`And ${userName} is learning language`);
}

else if(userAge > 45) {
    console.log(`${userName} is retired`);
    console.log(`And ${userName} is reading newspaper`);
}

else {
    console.log('Please enter a valid age');
} 

console.log('program Ended!!!');












