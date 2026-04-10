//Given an array nums of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.
//Please note that this section might seem a bit difficult without prior knowledge on what hashing is, we will soon try to add basics concepts for your ease! If you know the concepts already please go ahead to give a shot to the problem. Cheers!


function highestOccurringElement(nums) {

    // STEP 1: create a hash table (Map)
    const map = new Map();

    // STEP 2: count frequency of each element
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    // STEP 3: variables to track result
    let maxFreq = 0;
    let answer = Infinity;

    // STEP 4: find highest occurring (and smallest if tie)
    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
            answer = key;
        } else if (value === maxFreq && key < answer) {
            answer = key;
        }
    }

    // STEP 5: return result
    return answer;
}


