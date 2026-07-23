// brute Method
class Solution {
    moveZeroes(nums){
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
 // Optimal method

 class Rajan {
    moveZeroes(nums) {

        let n = nums.length;

        // Step 1: Find first zero
        let j = -1;

        for (let i = 0; i < n; i++) {
            if (nums[i] === 0) {
                j = i;
                break;
            }
        }

        // No zero found
        if (j === -1) {
            return nums;
        }

        // Step 2: Move non-zero elements forward
        for (let i = j + 1; i < n; i++) {

            if (nums[i] !== 0) {

                // JavaScript swap
                [nums[j], nums[i]] = [nums[i], nums[j]];

                j++;
            }
        }

        return nums;
    }
}