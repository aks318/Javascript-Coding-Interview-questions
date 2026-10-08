// Problem:
// Given an integer array nums, return an array answer where answer[i] is the product of all elements of nums except nums[i].

// Do not use division.
// Solve in O(n) time.

// Example 1:
// Input:  nums = [1,2,3,4]
// Output: [24,12,8,6]

function ProductOfOthers(array: number[]) {
  const n = array.length;
  const answer = new Array(n).fill(1);
  //[1,1,1,1]
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= array[i];
  }

  let sufix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= sufix;
    sufix *= array[i];
  }
  return answer;
}
console.log(ProductOfOthers([1, 2, 3, 4]));

// ========================================================================================

// Problem:
// Given an unsorted array of integers, find the length of the longest consecutive sequence.
// The solution must run in O(n) time.

// Example:
// Input:  nums = [100, 4, 200, 1, 3, 2]
// Output: 4

// Because the longest consecutive sequence is:
// [1, 2, 3, 4]

function longestConsecutiveSeq(arr: number[]) {
  const set = new Set(arr);
  let longest = 0;

  for (const num of arr) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;

      while (set.has(current + 1)) {
        current++;
        count++;
      }
      longest = Math.max(count, longest);
    }
  }
  return longest;
}

console.log(longestConsecutiveSeq([100, 4, 200, 1, 3, 2]));
