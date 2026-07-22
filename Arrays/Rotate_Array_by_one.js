// Given an integer array nums, rotate the array to the left by one.

class Solution {
    rotateArrayByOne(nums){

        const n = nums.length

        let temp = mums[0]

        for(let i = 0; i<n-1; i++){
            nums[i] = nums[i+1]
        }
        nums[n-1] = temp
    }
}