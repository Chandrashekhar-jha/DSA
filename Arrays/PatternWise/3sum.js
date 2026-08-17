class Solution {
    threeSum(nums) {
        let n = nums.length;
        let result = [];

        // 1. Sort the array
        nums.sort((a, b) => a - b);

        // 2. Fix one number
        for (let i = 0; i < n - 2; i++) {

            // Skip duplicate fixed numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // 3. Two pointers
            let left = i + 1;
            let right = n - 1;

            while (left < right) {

                // Sum of the two remaining numbers
                let sum = nums[left] + nums[right];

                // What the two numbers need to equal
                let required = -nums[i];

                // Found a valid triplet
                if (sum === required) {

                    result.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate left values
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }

                // Sum is too small
                else if (sum < required) {
                    left++;
                }

                // Sum is too large
                else {
                    right--;
                }
            }
        }

        return result;
    }
}