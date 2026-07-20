//Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

class Solution {
    secondLargestElement(nums) {

        let n = nums.length;

        if (n < 2) {
            return -1;
        }

        nums.sort((a, b) => a - b);

        let largest = nums[n - 1];

        for (let i = n - 2; i >= 0; i--) {

            if (nums[i] != largest) {
                return nums[i];
            }

        }

        return -1;
    }
}