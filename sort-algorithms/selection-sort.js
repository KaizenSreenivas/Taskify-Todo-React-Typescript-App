const selectionSort = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let loweest = i;
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[j] < ary[loweest]) {
        loweest = j;
      }
    }
    if (i !== loweest) {
      let temp = ary[i];
      ary[i] = ary[loweest];
      ary[loweest] = temp;
    }
  }
  return ary;
};

console.log(selectionSort([3, 5, 6, 7, 8, 1, 2]));
