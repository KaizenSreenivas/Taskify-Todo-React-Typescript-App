let mergeAry = function (ary1, ary2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < ary1.length && j < ary2.length) {
    if (ary2[j] > ary1[i]) {
      result.push(ary1[i]);
      i++;
    } else {
      result.push(ary2[j]);
      j++;
    }
  }
  while (i < ary1.length) {
    result.push(ary1[i]);
    i++;
  }
  while (j < ary2.length) {
    result.push(ary2[j]);
    j++;
  }
  return result;
};

const mergeSort = function (ary) {
  if (ary.length <= 1) return ary;
  let midPoint = Math.floor(ary.length / 2);
  let left = mergeSort(ary.slice(0, midPoint));
  let right = mergeSort(ary.slice(midPoint));
  console.log(midPoint);
  return mergeAry(left, right);
};
console.log(mergeSort([8, 8, 2, 3, 4, 5, 6, 7, 9]));
