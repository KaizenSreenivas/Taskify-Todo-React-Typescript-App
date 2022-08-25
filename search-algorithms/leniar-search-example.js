const linearSearchExample = function (ary, val) {
  for (let i = 0; i <= ary.length; i++) {
    if (ary[i] === val) return i;
  }
  return -1;
};
console.log(linearSearchExample([1, 2, 3, 4, 5], 5));
