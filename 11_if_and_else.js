alert('Welcome to Ahmad Mobile Shop')
alert(' i Have this company of Smart phone [Samsung, Oppo, Vivo, Iphone ]')
alert(' I Have 9000 thousand plus Amount of phone')

console.log('Welcome to Ahmad Mobile Shop');


const customerName = prompt('Please Enter Your Name') || 'Please enter a valid Name'
const customerAge = prompt(' Please Enter your Age') || 'Please enter a valid Age'
const customerBudget = prompt('Please Enter Your Budget')



console.log(`Name: ${customerName}`);
console.log(`Age: ${customerAge}`);
console.log(`Budget: ${customerBudget}`);


if(customerBudget >= 10000 && customerBudget <= 15000){
    console.log(`According to your budget You can Buy Samsung Phone `);
}
else if(customerBudget > 15000 && customerBudget <= 20000){
   console.log(`According to your budget You can Buy Vivo Phone`);
}
else if(customerBudget > 20000 && customerBudget <= 25000){
    console.log(`According to Your budget You can Buy Oppo Phone `);
}
else if(customerBudget > 25000 && customerBudget <= 50000){
    console.log(`According to Your budget You can Buy Iphone `);
}
else if(customerBudget <= 9000 ) {
    console.log('Sorry this Budget i have not phone ');     
} else if (customerBudget > 51000){
    console.log('Sorry this Budget i have not phone ');
}else{
    console.log('Please Enter a valid Amount');
}
console.log('Thanks for your coming');



// const userName = prompt('Please Enter Your Name') 
// const userAge = +prompt('Enter Your Age') 


// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);


// if(userAge >= 18 && userAge <= 24) {
//     console.log(`${userName} is a working professional.`);
//     console.log(`And ${userName} is learning computer science`);
// }

//  else if(userAge >= 24 && userAge <= 45) {
//     console.log(`${userName} is a senior working professional.`);
//     console.log(`And ${userName} is learning language`);
// }

// else if(userAge > 45) {
//     console.log(`${userName} is retired`);
//     console.log(`And ${userName} is reading newspaper`);
// }

// else {
//     console.log('Please enter a valid age');
// } 

// console.log('program Ended!!!');















