function twoSumUnique(nums, target) {

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    let result = [];

    while (left < right) {

        let sum = nums[left] + nums[right];

        if (sum === target) {

            result.push([nums[left], nums[right]]);

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

        else if (sum < target) {
            left++;
        }

        else {
            right--;
        }
    }

    return result;
}