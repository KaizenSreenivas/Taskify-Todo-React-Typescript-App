// const mergeAry = function (ary1, ary2) {
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < ary1.length && j < ary2.length) {
//     if (ary2[j] > ary1[i]) {
//       result.push(ary1[i]);
//       i++;
//     } else {
//       result.push(ary2[j]);
//       j++;
//     }
//   }
//   while (i < ary1.length) {
//     result.push(ary1[i]);
//     i++;
//   }
//   while (j < ary2.length) {
//     result.push(ary2[j]);
//     j++;
//   }
//   return result;
// };
// console.log(mergeAry([1, 10, 50], [2, 14, 99, 100]));

const mergeTwoArrays = function (array1, array2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
};

console.log(mergeTwoArrays([3, 5, 6, 7], [1, 2]));
