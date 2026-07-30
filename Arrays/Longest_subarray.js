class Solution {

    longestSubarray(nums, k) {

        let maxLength = 0;   // <-- Declaration

        for (let i = 0; i < nums.length; i++) {

            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum += nums[j];

                if (sum === k) {

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