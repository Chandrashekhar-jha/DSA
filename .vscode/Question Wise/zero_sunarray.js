class Solution {

    longestZeroSumSubarray(nums) {

        let maxLength = 0;

        for (let i = 0; i < nums.length; i++) {

            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum += nums[j];

                if (sum === 0) {

                    let length = j - i + 1;

                    if (length > maxLength) {
                        maxLength = length;
                    }

                }

            }

        }

        return maxLength;

    }

}