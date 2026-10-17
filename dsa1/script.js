// Two Pointer Method for shifting the 0 at the end
// In the two pointer method We keep the two points and if the condition does not satisfied, we will move the one pointer forward then if the conditon is satisfied then we will swap the position of the value from first pointer to later and will take the pointer to the next position


// ! THis is the TWO pointer method for putting zero at the end
let arr = [0,1,45,5,42,56,200,12,22]
let j = 0 
// for(let  i = 0 ; i < arr.length; i++)
// {
//     if(arr[i]!==0)
//     {
//         [arr[i],arr[j]] = [arr[j], arr[i]]
//         j++
//     }
// }
// console.log(arr);

// 
// ! Getting the max and min value from the array  
// let min = Infinity;
// let max = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }

//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(max, min);

// arr = [0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 9]

// !Remove duplicates from a sorted array in place. 
// let d = undefined
// console.log(arr.filter((v, i) => v !== arr[i - 1]));

// j = 0
// let arr2 = []
//! With the two pointer method
// for(let i = 0 ; i < arr.length ; i++)
// {
//     if(arr[i]!=arr2[j-1])
//     {
//         arr2[j]=arr[i]
//         j = ++j ||0
//     }

// }
// console.log(arr2);


//! Find the first non-repeating character in a string.


// let str = "ghtksikjkszgldhtkx"
// let count= {}
// for(i = 0; i < str.length ; i++)
// {
//     count[str[i]]=count[str[i]]+1 || 1
// }
// console.log(count);
// for(i = 0; i<str.length; i++)
// {
//     if(count[str[i]]===1)
//     {
//         console.log(str[i]);
        
//     }
// }



//! Find the Intersection of Two Arrays in JavaScript

const arr2 = [2, 2, 4, 6];

function intersection(arr1, arr2)
{
    const set1 = new Set(arr1)    
    const result = []
    for( let x of arr2)
    {
        if(set1.has(x))
        {
            result.push(x);
            set1.delete(x)
        }
    }
    return result
}


// console.log(intersection(arr1, arr2));


// ! TWO SUM:  Find two elements whose sum equals a target.
// let sum = 4
// j = 0;
// let result = []
// for(i =1; i<arr1.length; i++)
// {
//     if((arr1[i]+arr1[j])==sum)
//     {
//         console.log(arr1[i], arr1[j]);
//         result.push(...[arr1[i],arr1[j]])
//         console.log("The Sum of TWO Pointers");
//         break;
//     }

//     else if((arr1.length-2)==i && j!= arr1.length-1)
//     {
//         j++
//         i=j;

//     }

// }
// if(result.length!=2)
// {
//     console.log("No Such combination exist");
    
// }

// // time complexity (O)n^2
// for(let k= 0; k<arr1.length; k++)
//     {
//     let rem = sum - arr1[k]
//     let n = arr1.lastIndexOf(rem)
//     if(n!==k && n !=-1)
//     {
//         console.log(arr1[k], arr1[n]);
//         break;
//     }
// }



// let sum = 4;
// let result = [];
// let seen = new Set();

// for (let num of arr1) {
//     let rem = sum - num;

//     if (seen.has(rem)) {
//         result.push(rem, num);
//         break;
//     }

//     seen.add(num);
// }

// if (result.length === 2) {
//     console.log(result);
// } else {
//     console.log("No Such combination exists");
// }


// !    Sliding Window: Find the maximum sum of any subarray of size k.
const arr1 = [1, 2, 6, 5, 4,-2];
i = 0;
let sum = arr1.slice(0,i+3).reduce((a,v)=>{return a+v})
console.log(sum);
let map = new Map()
map.set(sum,[i,i+2])
let max = sum
for(i = 1; i<=arr1.length-3; i++)
    {
        sum=(arr1[i-1]-sum)+arr1[i+2]
        if(!map.has(sum))
        {
            if(sum>max)
            {
                max =sum
            }
            map.set(sum, [i,i+2])
        }
    } 
console.log(map.get(max));


// ? MORE OPTIMISED

 arr1 = [1, 2, 6, 5, 4, -2];
const k = 3;

sum = arr1.slice(0, k).reduce((a, v) => a + v, 0);
max = sum;
let startIndex = 0;

for (let i = 1; i <= arr1.length - k; i++) {
    sum = sum - arr1[i - 1] + arr1[i + k - 1];

    if (sum > max) {
        max = sum;
        startIndex = i;
    }
}

console.log("Maximum sum:", max);
console.log("Subarray:", arr1.slice(startIndex, startIndex + k));
console.log("Indices:", [startIndex, startIndex + k - 1]);