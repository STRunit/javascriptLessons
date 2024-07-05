const nums2 = [1, 1, 2]; // [1, "_", 2]

let k = 1;

const nums = [1, 1, 1, 2, 2, 3]; //[1, "_", "_", 2, "_", 3]
for (let i = 0; i <= nums.length; i++) {
  if (nums[i] === nums[i - k]) {
    k++;
    nums[i] = "_";
    continue;
  }
  k = 1;
}
console.log(nums);

// // Second Version by me
// const nums = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4];

// let result = [];
// for (let i = 0; i < nums.length - 1; i++) {
//   if (nums[i] === nums[i - 1]) {
//     result.push("_");
//   } else {
//     result.push(nums[i]);
//   }
// }
// console.log(result);

// // Made by Intern Kids
// const nums = [1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 3];
// [1, "_", "_", 2, "_", 3]
// for (let i = 0; i <= nums.length; i++) {
//   let newNums = [];
//   let a = nums[0];
//   if (nums[i] === nums[i - 1]) {
//     // newNums.push((nums[i] = "_"));
//     a = "_";
//     newNums.push(a);
//   }
//   return newNums;
// }

// console.log(newNums);
