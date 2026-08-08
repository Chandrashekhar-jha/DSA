class Solution {
  buysellStock(nums) {
    let maxProfit = 0;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let profit = nums[j] - nums[i];

        maxProfit = Math.max(maxProfit, profit);
      }
    }
    return maxProfit;
  }
}

const sol = new Solution()

const prices = [7,6,3,8,9,1]
console.log("Maximum profit:" , sol.buysellStock(nums))