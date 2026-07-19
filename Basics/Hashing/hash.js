class Solution {
    countFrequencies(nums) {
        
        const map = new Map();// Create a new Map to store the frequency of each number

        for(let num of nums){
            if(map.has(num)){
                map.set(num,map.get(num)+1);
            }
            else{
                map.set(num,1)
            }
        }
        const result=[]// Create an array to store the result
        for(let [key,value] of map){// Iterate through the Map and push the key-value pairs into the result array
            result.push([key,value])
        }
        return result
    }
}