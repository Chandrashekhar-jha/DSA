//Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

class Solution {
    rotateArray(nums, k){
        let n = nums.length

        k = k % n

        for(let i = 0 ; i<=k ; i++){
            
            let temp = nums[0]

            for (leti=1; i<n-1; i++){
                nums[i] = nums[i+1]
            }
            nums[n-1] = temp
        }
    }
}