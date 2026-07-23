class Solution {
    zeroEndArray(nums){
        let n = nums.length

        let temp = []

        for(let i = 0; i<n; i++ ) {
            if(nums[i]!==0){
                temp.push(nums[i])
            }
            
        }
        for(let i = 0 ; i<temp.length; i++){
            nums[i]=temp[i]
        }
    }
}