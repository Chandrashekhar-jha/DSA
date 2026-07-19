//Given an array of integers nums, return the value of the largest element in the array

class Solution {
    largestElement(nums) {
        let largest = nums[0];
        for (let i = 1; i < nums.length; i++){
           if (nums[i]>largest){
                largest = nums[i]
            }
        }
        return largest
    }
}