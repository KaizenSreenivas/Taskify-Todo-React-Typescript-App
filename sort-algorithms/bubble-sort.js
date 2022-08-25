const bubbleSort = function (ary) {
  for (let i = ary.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(ary, ary[j], ary[j + 1]);
      if (ary[j] > ary[j + 1]) {
        //swap elements
        let temp = ary[j];
        ary[j] = ary[j + 1];
        ary[j + 1] = temp;
      }
    }
  }
  return ary;
};

bubbleSort([23, 45, 3, 28, 34, 2, 8]);
