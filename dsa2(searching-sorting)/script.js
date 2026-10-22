let arr =[1,2,5,15,17,19,25,29,35,45,50,65,67,70,70,82,86,89,90] 

// Binary Sort
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // Target found
//     }

//     if (arr[mid] < target) {
//       left = mid + 1; // Search right half
//     } else {
//       right = mid - 1; // Search left half
//     }
//   }

//   return -1; // Target not found
// }
// console.log();




// function longestConsecutive(nums) {
//     const numSet = new Set(nums);
//     let longest = 0;

//     for (const num of numSet) {
//         // Only start counting at the beginning
//         // of a consecutive sequence.
//         if (!numSet.has(num - 1)) {
//             let current = num;
//             let count = 1;

//             // Extend the sequence forward.
//             while (numSet.has(current + 1)) {
//                 current++;
//                 count++;
//             }

//             // Keep the longest sequence found.
//             longest = Math.max(longest, count);
//         }
//     }

//     return longest;
// }

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// // 4

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// // 9

// console.log(longestConsecutive([]));
// 0


//! Three sum approach sum of all three number is equal to 0

arr = [5,0,1,2,3,6,4,5,8,9,9,-9,5,-4,-6,-3,-2,-1]
arr.sort((a,b)=>a-b)
// console.log(arr);
// let result = []
// for(let i =  0; i < arr.length ; i ++)
// {
// let k = i + 1;
// let j = arr.length - 1;

// if (i > 0 && arr[i] === arr[i - 1]) {
//     continue;
// }
// while (k < j) {
//     let sum = arr[i] + arr[k] + arr[j];

//     if (sum === 0) {
//         result.push([arr[i], arr[k], arr[j]]);

//         k++;
//         j--;

//         while (k < j && arr[k] === arr[k - 1]) {
//             k++;
//         }

//         while (k < j && arr[j] === arr[j + 1]) {
//             j--;
//         }
//     } else if (sum < 0) {
//         k++;
//     } else {
//         j--;
//     }
// }

// }
// console.log(result);




// [ ] Majority Element — Find the element appearing more than ⌊n/2⌋ times.
// It does not look for the most appearing element, similar to election seats it looks for element appearning most number of time in 
// let n= 5
// count = Math.floor(arr.length / 2);
// let obj ={}
// for(let i =0; i<arr.length; i++)
//     {
// obj[arr[i]] = (obj[arr[i]] ||0) +1
//     } 
// // console.log(obj);
// for(let x in obj)
// {
//     if(obj[x]>count)
//     {console.log(x,obj[x] );
//     }
// }

//! Boyer–Moore Voting Algorithm

// function majorityElement(arr) {
//     let candidate = null;
//     let count = 0;

//     for (let num of arr) {
//         if (count === 0) {
//             candidate = num;
//         }

//         if (num === candidate) {
//             count++;
//         } else {
//             count--;
//         }
//     }

//     return candidate;
// }

// console.log(majorityElement([3, 3, 4, 2, 3]));
// 3



// ![ ] Longest Consecutive Sequence — Find the longest sequence of consecutive numbers.

// arr = [100, 4, 200, 1, 3, 2,101,102,103,104];
// let setrr = new Set(arr);
// let count = 0;
// for(let i = 0 ; i < arr.length; i ++)
// {
//     if(!setrr.has(arr[i]-1))
//     {
//         let length = 1
//         let current = arr[i]
//         while(setrr.has(current+1))
//         {
//             length++;
//             current++;
//         }
//         if(count< length)
//         {
//             count = length
//         }
//     }
// }
// console.log(count);




//![ ] Product of Array Except Self — Return products of all elements except the current one without division

