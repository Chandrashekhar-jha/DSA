//Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

//If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It doesn't matter what you leave beyond the first k elements.

class Solution {
    remoceDuplicates(nums){
        n = nums.length

        if(n == 0){
            return false
        }

        let i = 0

        for(let j = 1; j < n; j++){
            if (nums[j] != nums[i]){
                i++
                nums[i] = nums[j]
            }
        }
        return i + 1
    }
}