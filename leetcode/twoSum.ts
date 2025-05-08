function twoSum(nums: number[], target: number): number[] {
 for(let i = 0; i < nums.length - 1; i++) {
     for(let j = 1; j < nums.length; j++ ) {
         if(nums[i] + nums[j] ===  target) {
             return [i, j]
         }
     }
 }
 return []
};

// optimized solution

function twoSumOptimized(nums: number[], target: number): number[] {
 const map = new Map()
 for(let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
 }
 return []
}