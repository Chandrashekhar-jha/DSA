//Brute Method
function threeSumClosest(nums, target) {
    let n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < n - 2; i++) {

        for (let j = i + 1; j < n - 1; j++) {

            for (let k = j + 1; k < n; k++) {

                let sum = nums[i] + nums[j] + nums[k];

                if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                    closestSum = sum;
                }
            }
        }
    }

    return closestSum;
}