class Solution {
  RearrangeElements(nums) {
    let negative = [];
    let positive = [];
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        negative.push(nums[i]);
      } else {
        positive.push(nums[i]);
      }
    }
    for (i = 0; i < positive.length; i++) {
      answer.push(positive[i]);
      answer.push(negative[i]);
    }
    return answer
  }
}
