// var lengthOfLastWord = function (s) {
//   const ary = s.trim().split(" ");
//   console.log(ary);
//   ary.slice(-1);
//   return ary.slice(-1).toString().length;
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// const naiveStringSearch = function (str, pattern) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < pattern.length; j++) {
//       // console.log(str[i], pattern[j]);
//       if (pattern[j] !== str[i + j]) {
//         // console.log("break");
//         break;
//       }
//       if (j === pattern.length - 1) {
//         console.log("found one");
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(naiveStringSearch("lolie loled lol", "lol"));

// var isPalindrome = function (num) {
//   let n = num;
//   if (n < 0 || n > 2 ** 31 - 1) {
//     return false;
//   }
//   let reverse = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = parseInt(num / 10);
//   }
//   if (reverse === n) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(isPalindrome(122));
// var longestCommonPrefix = function (strs) {
//   let prefix = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];
//     console.log(char);
//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j][i] !== char) return prefix;
//     }
//     prefix = prefix + char;
//   }
//   return prefix;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// function getUnique(arr) {
//   const result = [];
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = true;
//       result.push(arr[i]);
//     } else {
//       const index = result.indexOf(arr[i]);
//       if (index !== -1) {
//         result.splice(result.indexOf(arr[i]), 1);
//       }
//     }
//   }
//   return result;
// }
// console.log(getUnique([4, 4, 5, 3, 3]));

const reverseNumber = function (num) {
  let rev = 0;
  let reverse = "";
  //   if (num < 0) {
  //     console.log("less than x");
  //     for (let i = 0; i < num.length; i++) {
  //       reverse = num[i] + reverse;
  //       return reverse;
  //     }
  //   }

  while (num != 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return rev;
};

//console.log(reverseNumber(-135));

var reverseString = function (str) {
  return str.reverse().join("");
};
console.log(reverseString(["h", "e", "l"]));
