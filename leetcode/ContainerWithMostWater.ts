// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

function maxArea(height: number[]) {
    let maxArea = 0
    for(let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        const width = j - i
        const minHeight = Math.min(height[i], height[j])
        const currentArea = width * minHeight
        maxArea = Math.max(currentArea, maxArea)
      }
    }
    return maxArea
};

const optimizedMaxArea = (height: number[]) => {
  let maxArea = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const width = right - left
    const minHeight = Math.min(height[left], height[right])
    const currentArea = width * minHeight
    maxArea = Math.max(currentArea, maxArea)
    if(height[left] < height[right]) {
      left++
    } else {
      right++
    }
  }
  return maxArea
}