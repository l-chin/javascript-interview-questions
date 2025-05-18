// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// function lswr(s: string) {
//   let maxLength = 0;
//   let left = 0;
//   const charMap = new Map();

//   for(let right = 0; right < s.length; right++) {
//     const currentChar = s[right];

//     if(charMap.has(currentChar) && charMap.get(currentChar) >= left) {
//       left = charMap.get(currentChar) + 1;
//     }

//     charMap.set(currentChar, right);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// const lengthOfLongestSubstring = (s: string) => {
//   // 记录每个字符最后出现的位置
//   const charMap = new Map()
//   let maxLength = 0
//   let left = 0
//   for (let right = 0; right < s.length; right++) {
//     const currentChar = s[right]
//     // 如果当前字符已经出现过，且在当前窗口内
//     if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
//       left = charMap.get(currentChar) + 1
//     }
//     charMap.set(currentChar, right)
//     maxLength = Math.max(maxLength, right - left + 1)
//   }
// }

function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  let substr = ""
  for (let i = 0; i < s.length; i++) {
      const subIndex = substr.indexOf(s[i]);
      if (subIndex >= 0) {
          substr = substr.slice(subIndex + 1)
      }
      substr += s[i]
      maxLength = Math.max(substr.length, maxLength)
  }
  return maxLength
};
