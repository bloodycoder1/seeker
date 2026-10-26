let arr =[1, 8, 6, 2, 5, 4, 8, 3, 7];


//! [ ] Container With Most Water — Find two lines that hold the maximum amount of water.

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// let left = 0;
// let right = height.length - 1;
// let maxArea = 0;

// while (left < right) {
//     const width = right - left;

//     const minHeight = Math.min(
//         height[left],
//         height[right]
//     );

//     const area = width * minHeight;

//     maxArea = Math.max(maxArea, area);

//     // Move the pointer with the smaller height
//     if (height[left] < height[right]) {
//         left++;
//     } else {
//         right--;
//     }
// }

// console.log(maxArea); // 49




function max(v1,v2){
    if(v1>v2) return v1
    else return v2
}
function min(v1,v2){
    if(v1<v2) return v1
    else return v2
}
// arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// let maxarea =0
// // let obj=[]
// let left= 0;
// let right = arr.length-1;
// while(left < right)
// {
//     let height=(min(arr[right],arr[left]));
//   let area = ((right+1) - (left+1))*  height
//   if(maxarea<area)
//     {
//         maxarea=area
//     }
//     if(arr[left]>arr[right])
//     {
//         right--;
//     }
//     else{
//         left++
//     }
// }
// console.log(maxarea);



// [ ] Sort Colors — Sort an array containing only 0s, 1s, and 2s in one pass.

// In this Question  the array consist only o,1,2 so we can just check that will the mid+> mid pointer will check, 
// arr = [2,1,0,2,1,0,0,1,1,2,0];
// let low =0,mid = 0, high=arr.length-1;
// while(mid <=high)
// {
//     if(arr[mid] ==0)
//     {
//         [arr[low],arr[mid]]=[arr[mid],arr[low]]
//         mid++;
//         low++;
//     }
//     else if(arr[mid]==1){
//         mid++
//     }
//     else{
//         [arr[mid],arr[high]]=[arr[high],arr[mid]]
//         high--
//     }
// }
// console.log(arr);



//! [ ] Longest Substring Without Repeating Characters — Find the longest substring with all distinct characters.

// str ="abcababcdeababcdabcabcabcde";
// let start=0,window=1;
// function swap(v1,v2){
//     return [v2,v1]
// }
// let maxlen=0
// let left=0;
// let seen=new Set()
// for(let right =  0 ; right < str.length ; right++)
// {
//     while(seen.has(str[right]))
//     {
//         left++;
//         seen.delete(str[right])
//     }
//     seen.add(str[right])
//     maxlen = max(maxlen,(right-left)+1)
// }
// console.log(maxlen);


// ![ ] Minimum Size Subarray Sum — Find the shortest subarray whose sum is at least a target.

 arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const target = 11;

let minlen = Infinity;
let left = 0;
let right = 0;
let windowSum = 0;

while (right < arr.length) {
    windowSum += arr[right];

    while (windowSum >= target) {
        minlen = min(minlen, right - left + 1);
        windowSum -= arr[left];
        left++;
    }

    right++;
}

console.log(minlen); // 2
