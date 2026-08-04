class Solution {

    maxSubArray(nums) {

        let maxSum = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < nums.length; i++) {

            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum = sum + nums[j];

                if (sum > maxSum) {
                    maxSum = sum;
                }

            }

        }

        return maxSum;

    }

}