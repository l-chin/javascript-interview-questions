// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// const longestPalindromic = (s: string) => {

//   if(s.length < 3) return s;
//   let maxLen = 1;
//   let start = 0

//   for (let i = 0; i < s.length - 1; i++) {
//    for(let j = i+1; j < s.length; j++) {
//     const subStr = s.slice(i, j)
//     if (isPalindrome(subStr) && subStr.length > maxLen) {
//      maxLen = subStr.length;
//      start = i
//     }
//    }
//   }
//   return s.slice(start, start + maxLen)

// }

// const isPalindrome = (s: string) => {
//   return s === s.split('').reverse().join('');
// }

function longestPalindromic(s:string) {
  if(s.length < 2) return s
  let maxLen = 1;
  let start = 0;

  const expand = (left:number, right:number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for(let i = 0; i < s.length; i++) {
    let len1 = expand(i, i)
    let len2 = expand(i, i+ 1)
    let len = Math.max(len1, len2)
    if(len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2)
    }
  }
  return s.slice(start, start + maxLen)
}