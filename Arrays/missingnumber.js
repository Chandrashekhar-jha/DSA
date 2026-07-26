class Solution {

    missingNumber(nums) {

        let n = nums.length;

        // Check every number from 0 to n
        for (let i = 0; i <= n; i++) {

            let found = false;

            // Search i in the array
            for (let j = 0; j < n; j++) {

                if (nums[j] === i) {
                    found = true;
                    break;
                }
            }

            // If number is missing
            if (found === false) {
                return i;
            }
        }

        return -1;
    }
}