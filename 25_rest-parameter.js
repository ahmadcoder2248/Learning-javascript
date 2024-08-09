const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8, 9, 10];

const joinArray = [...nums1, ...nums2];

function add(a, b, ...nums) {  // sab value array me a agyi hai means nums me rest paramds
    console.log(a,b);  // a = 1 , b = 2 baki 3 aur 4, nums me chali jayegi 
    console.log(nums);
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        sum = sum + nums[i];
    };
    return sum;
};

console.log(add(...joinArray)); // joinArray ki value nums me add hogai aur chali gayi
// const result = add(...nums1, 8, 9,10) // 8,9,10 rest nums me chala gaya


//.............reduce method.......................
// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8, 9, 10];
// const joinArray = [...nums1, ...nums2];

// function add(...nums) {    
//  return nums.reduce((accu, curr) => accu + curr)    
// };

// const result = add(...joinArray);
//ouput is 55


// function add1(){
//    return [...arguments].reduce((accu, curr) => accu + curr )
// }

// const result = add1(...joinArray);



// function add1(){
//     return Array.from(arguments).reduce((accu, curr) => accu + curr )
//  }
 
//  const result = add1(...joinArray);


// const nums1 = [1, 2, 3, 4,5 ,6 ,7 ,8 ,9 ,10];
// const string = 'Ahmad'

// const joinValue = [...nums1]
// let sum = 0;
// for(let i = 0; i<nums1.length; i++){
//      sum = sum+joinValue[i];
// };
// console.log(sum);

//print a table
// debugger
// function add2(...nums) {
//    let sum;
//    for(let i = 0; i<nums.length; i++){
//     sum = 2*nums[i];
//     console.log(`2 * ${i+1} = ${sum}`);
//    }
//    return sum;

// };
// console.log(add2(...nums1));


//print table using forEach method
// function multiply(...nums) {  // rest parameters
//     let sum;
//   nums.forEach((nums,index) => {
//     sum = 2*nums
//     console.log(`2 * ${index+1} = ${sum}`);
//   })
// }

// multiply(...nums1) // spread operator



// debugger
// const Arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let smallestEven = null;

// for (let i = 0; i < Arrays.length; i++) {
//   if (Arrays[i] % 2 === 0) { // Check if the number is even
//     if (smallestEven === null || Arrays[i] < smallestEven) {
//       smallestEven = Arrays[i];
//     }
//   }
// }

// if (smallestEven !== null) {
//   console.log("The smallest even number is:", smallestEven);
// } else {
//   console.log("No even numbers found in the array.");
// }


// debugger
// const Arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    let sum = 0;
// for(let i = 0; i<Arrays.length; i++){
//       if(Arrays[i] % 2 === 1) {
//         sum = sum + Arrays[i]
       
      
//       }

//     }

//     console.log(sum);

//     function oddNumber(...nums) {
//       let sum = 0;
//       for(let i = 0; i<nums.length; i++){
//             if(nums[i] % 2 === 1) {
//               sum = sum + nums[i]
                    
//             }     
//           }
//           return sum
//     }

    // console.log(oddNumber(...Arrays));

    // function oddNumber(...nums){
    //   let sum = 0;
    //  nums.reduce((accu, curr) => {
    //   if(curr % 2 === 1){
    //     sum  = sum + curr
    //   }
    // },0)
    //    return sum;
    // };

    // console.log(oddNumber(...Arrays));
