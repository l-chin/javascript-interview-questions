// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

// const reverse = (x: number) => {
//   let isNagative = x < 0;
//   let reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join(''));
//   if((reversedNum > Math.pow(2, 31) - 1) || (reversedNum < Math.pow(-2, 31))) {
//     return 0;
//   }
  
//   return isNagative ? -reversedNum : reversedNum;
// }

const reverse = (x: number) => {
  let isNagative = x < 0;
  let absX = Math.abs(x);
  let reversedNum = 0;
  while(absX > 0) {
    reversedNum = reversedNum * 10 + absX % 10;
    absX = Math.floor(absX / 10);
  }
  if((reversedNum > Math.pow(2, 31) - 1) || (reversedNum < Math.pow(-2, 31))) {
    return 0;
  }
  return isNagative ? -reversedNum : reversedNum;
}

