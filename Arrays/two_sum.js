class Solution{
    twoSum(nums, k){
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i] + nums[j]==k){
                    return [i,j]
                }
            }
        }
        return [-1, -1];
    }
}