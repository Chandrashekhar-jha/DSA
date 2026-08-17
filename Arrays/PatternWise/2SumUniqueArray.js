class Solution{
    twoSumuUiqueArray(nums,target){

        nums.sort((a,b)=> a-b)
        let n = nums.length
        let result = []
        let left = 0
        let right = n-1

        while(left < right){
           let sum = nums[left] + nums[right]

           if(sum == target){
            result.push([nums[left],nums[right]])
            left++
            right--

            while(left < right && nums[left] == nums[left -1]){
                left++
            }

            while(left < right && nums[right] == nums[right - 2]){
                right--
            }
           }
           else if(sum > target){
            left ++
           }

           else{
            right --
           }

        }
    }
}