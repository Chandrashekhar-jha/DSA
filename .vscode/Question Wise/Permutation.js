class Solution {
    nextPermutation(nums) {

        let n = nums.length;

        // Step 1: Find the pivot
        let i = n - 2;

        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        // Step 2: If pivot exists,
        // find the smallest number greater than pivot
        if (i >= 0) {

            let j = n - 1;

            while (nums[j] <= nums[i]) {
                j--;
            }

            // Swap pivot and nums[j]
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        // Step 3: Reverse everything after pivot
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];

            left++;
            right--;
        }

        return nums;
    }
}