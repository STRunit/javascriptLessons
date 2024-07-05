// // 1.
// (nums1 = [1, 2, 2, 1]), (nums2 = [2, 2]); // output [2,2]
// (nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]); // output [4,9]

// let result = [];
// for (let i = 0; i < nums1.length - 1; i++) {
//   for (let j = 0; j < nums2.length - 1; j++) {
//     if (nums1[i] === nums2[j]) {
//       result.push(nums1[i]);
//       break;
//     }
//   }
// }
// console.log(result);

// 2. // // Finish this one !!!!!

// (nums1 = [1, 2, 3]), (nums2 = [2, 4, 6]); // output  [[1,3],[4,6]]
// (nums1 = [1, 2, 3, 3]), (nums2 = [1, 1, 2, 2]); // [[3],[]]

// let output = [];
// let empty = "";
// for (let i = 0; i < nums1.length; i++) {
//   for (let j = 0; j < nums2.length; j++) {
//     if (nums1[i] !== nums2[j]) {
//       console.log(nums2[j]);
//       break;
//     }
//   }
// }

// console.log(output);
