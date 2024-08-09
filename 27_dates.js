let myDate = new Date()
console.log(myDate.toString());   //fri aug 09 8:00:15  
console.log(myDate.toISOString());  // 2024-08-09 t14:51:09.405z
console.log(myDate.toDateString());  // fri aug 09 2024
console.log(myDate.toJSON());  // 2024-08-09 t14:53: 48.658z.
console.log(myDate.toLocaleDateString()); // 9/8/2024
console.log(myDate.toLocaleString()); // 9/8/2024, 8:26:21pm
console.log(myDate.toTimeString()); // 20:26:21
console.log(typeof myDate); // object

let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1); // mon jan 23 2023 00:00:00 Gmt 0530
console.log(myCreatedDate1.toDateString()); // mon jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());   // 23/1/2023, 5:03: 00 Am

// let myCreatedDate3 = new Date("2023-01-14");
let myCreatedDate3 = new Date("01-14-2023");   // 14/1/2023, 5:03: 00 Am
// console.log(myCreatedDate3.toLocaleString());   // 14/1/2023, 5:03: 00 Am


let myTimeStamp = Date.now();
console.log(myTimeStamp);    // 1723220777103
console.log(myCreatedDate3.getTime());  //1673634600000
console.log(Math.floor(Date.now()/1000)); // 1723221338

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());  // month 7
console.log(newDate.getDay());  // Day 5

newDate.toLocaleString('default', {
    weekday: "long"
});











