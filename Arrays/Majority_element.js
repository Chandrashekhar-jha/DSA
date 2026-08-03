class Solution {
    majorityElement(nums) {
        
        let n = nums.length;
        
        for (let i = 0; i < n; i++) {
            
            let cnt = 0; 
            
            for (let j = 0; j < n; j++) {
                if (nums[j] === nums[i]) {
                    cnt++;
                }
            }
            
            if (cnt > Math.floor(n / 2)) {
                return nums[i]; 
            }
        }
        
        return -1; 
    }
}
