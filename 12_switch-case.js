// const dayNumber = 0


// if(dayNumber === 0) {
//     console.log('It is Sunday Today'); //(isko niche switch case me convert kiya hu)
// }else if (dayNumber === 1) {
//     console.log('It is Monday Today');
// }else if (dayNumber === 2) {
//     console.log('It is Tuesday Today');
// }else if (dayNumber === 3) {
//     console.log('It is Wednesday Today');
// }else if (dayNumber === 4) {
//     console.log('It is Thursday Today');
// }else if (dayNumber === 5) {
//     console.log('It is Friday Today');
// }else if (dayNumber === 6) {
//     console.log('It is Saturday Today');
// }else {
//     console.log('Please enter a valid day Number');
// }

const dayNumber = +prompt('Enter the dayNumber Number')   //(1ST SOLUTION)
debugger
switch(dayNumber) {
    case 0: 
    console.log('It is Sunday Today');
    break
    case 1:
    console.log('It is Monday Today');    
    break
    case 2:
    console.log('It is Tuesday Today');
    break
    case 3:
    console.log('It is Wednesday Today');
    break
    case 4:
    console.log('It is Thursday Today');
    break
    case 5:
    console.log('It is Friday Today');
    break
    case 6:
    console.log('It is Saturday Today');
    break 
    default:
    console.log('Please Enter the valid Day Number');
}

// const userName = 'Ahmad'
// const userAge = 21   // (isko niche switch case me convert kiya)

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

 const userName = 'Ahmad'
 const userAge = 34
// debugger

/*logic of the day in switch case
(switch me true condition add karo phir niche case ke ander condtion daalo agar condition true hai to execute hoga ) */
// like userName me age daale phir niche case me check karega user ki age conditon se milti hai agar milti hai to execute krega

switch(true){   // (2ND SOLUTION)
    case  (userAge >= 0 && userAge <= 4): 
    console.log(`${userName} He is a kid. `);  
    break
    case (userAge >= 5 && userAge <= 17):
    console.log( `${userName} He is a college student. `);
    break
    case (userAge >= 18 && userAge <= 24):
    console.log(`${userName} is a working professional. `);
    break
    case (userAge >= 25 && userAge <= 45):
    console.log(`${userName} is retired. `);
    break
    case (userAge > 45 && userAge < 121):
    console.log(`${userName} is immortal`);
    break
    default:
    console.log('Please Enter a valid Age');
}


// const Name = 'Ahmad'   //(isko niche switch case me convert kiya )
// const marks = prompt('please Enter your marks');  
// console.log(`Your Marks is: ${marks}`);
// /*logic of the day ye (ye uper wali marks variable me jo bhi value dalenge phir woh niche wali marks if and else condition me check krega) */

// if(marks >= 90 && marks <= 100) {
//     console.log(`${Name} Your Grade is A`);
// }else if(marks >= 70 && marks <= 80) {
//     console.log(`${Name} Your Grade is B`);
// }else if(marks >= 60 && marks <= 70) {
//     console.log(`${Name} Your Grade is C`);
//  }else if (marks >= 35 && marks <= 60) {
//      console.log(`${Name} Your Grade is D`);
//  }else if (marks < 35 ){
//      console.log(`${Name} Your Grade is F`);
//  }else {
//      console.log(`${Name} Please Enter Your marks under 100`);
// }


const Name = 'Ahmad'  //(3RD SOLUTION)
const marks = prompt('please Enter your marks');  
console.log(`Your Marks is: ${marks}`);
debugger
switch(true) {
    case (marks >= 90 && marks <= 100):
    console.log(`${Name} Your Grade is: A`);
    break
    case (marks >= 70 && marks <= 80):
    console.log(`${Name} Your Grade is: B`);
    break
    case (marks >= 60 && marks <= 70):
    console.log(`${Name} Your Grade is: C`);
     break
    case (marks >= 40 && marks <= 60):
    console.log(`${Name} Your Grade is: D`);
    break
    case (marks < 35):
    console.log(`${Name} Your Grade is: F`);
    break
    default:
        console.log(`${Name} please enter your marks under 100`);

}

console.log('Program ended');

const grade = 'c'



switch(grade.toUpperCase()){  // 4TH SOLUTION
    case 'A':
        console.log('Your score is between 85% to 100%. ');
        break
    case 'B':
        console.log('your score is between 75% to 85% ');
        break
    case 'C':
        console.log('Your score is between 60% to 75% ');
        break
    case 'D':
        console.log('Your score is between 50% to 60%. ');
       break
    case 'E':
        console.log('Your score is between 30% to 50%. ');
        break
    default:
        console.log('Sorry, you failed. ');
}

console.log('program Ended!');
