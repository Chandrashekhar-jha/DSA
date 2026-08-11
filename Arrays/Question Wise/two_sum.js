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

//
class Solution {
    // Variant 1: Check if two numbers sum to target using hashing
    twoSumExists(arr, target) {
        const map = new Map();  // Map to store element -> index
        // Iterate over all elements
        for (let i = 0; i < arr.length; i++) {
            const complement = target - arr[i];
            // Check if complement exists in map
            if (map.has(complement)) {
                return "YES";  // Pair found
            }
            // Store current element and index
            map.set(arr[i], i);
        }
        // No pair found
        return "NO";
    }

    // Variant 2: Return indices of two numbers that sum to target using hashing
    twoSumIndices(arr, target) {
        const map = new Map();  // Map to store element -> index
        for (let i = 0; i < arr.length; i++) {
            const complement = target - arr[i];
            // If complement found, return indices
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            // Store current element and index
            map.set(arr[i], i);
        }
        // No pair found
        return [-1, -1];
    }
}

// Optimized Version 

var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};