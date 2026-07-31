class Solution {
  longestSubArray(nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];

        if (sum == k) {
          let length = j - i + 1;
          if (length > max) {
            max = length;
          }
        }
      }
      return max
    }
  }
}
