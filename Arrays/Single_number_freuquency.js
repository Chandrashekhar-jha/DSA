//Find the number that appears once, and other numbers twice.

class Solution{
    singleNumber(nums){
        for(let i=0; i<nums.length; i++){
            let count = 0
            let currentElement = nums[i]

            for(let j=0; j<nums.length; j++){
                if(currentElement == arr[j]){
                    count ++
                }
            }
            if(currentElement == 1){
                return currentElement
            }
        }
    }
}