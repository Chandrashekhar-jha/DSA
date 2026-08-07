class Solution {
  luu(nums) {
    let maxi = -Infinity;

    let n = nums.length;

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
          sum += nums[k];
        }
        let maxi = Math.max(maxi, sum);
      }
    }
    return maxi;
  }
}

function main() {
  let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  let sol = new Solution();

  let maxSum = luu(nums);

  console.log("The maximum subarray sum is: " + maxSum);
}

main();

// Optimal Solution Kadane's Algo

class Solution {
  kadaneAlgo(nums) {
    let n = nums.length;

    let maxi = -Infinity;

    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += nums[i];

      if (sum > maxi) {
        maxi = sum;
      }

      if (sum < 0) {
        sum = 0;
      }
    }
    return maxi;
  }
}
