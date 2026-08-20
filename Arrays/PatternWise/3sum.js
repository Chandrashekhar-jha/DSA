class Solution {
    threeSum(nums) {
        let n = nums.length;
        let result = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < n - 2; i++) {

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = n - 1;

            while (left < right) {

                let sum = nums[left] + nums[right];
                let required = -nums[i];

                if (sum === required) {

                    result.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                } else if (sum < required) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}
// Time complexity is o(n2)