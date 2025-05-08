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

function lswr(s: string) {
  let maxLength = 0;
  let left = 0;
  const charMap = new Map();

  for(let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if(charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      left = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
