//Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.



class solution{
    zeroEndArray(nums){
        let n = nums.length

        let temp = nums[i]

        for(let i = 0; i< n-1; i++){
            if(nums[i]==0){
                nums[i+1]=nums[i]
            }
        }
    }
}