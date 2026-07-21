// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

class Solution {
  SortedArrays(nums) {
    const n = nums.length;

    if (n == 0 || n == 1) {
      return true;
    }

    for (let i = 0; i <= n-1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    return true
  }
}
