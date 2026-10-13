// You are given an array of integers nums sorted in ascending order and an integer target.
// Write a function that searches for target in nums. If the target exists, return its index. Otherwise, return -1.
// You must write an algorithm with \(O(\log n)\) time complexity.

// Example 1
// Input:
// nums = [-1, 0, 3, 5, 9, 12]
// target = 9
// Output:
// 4

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = arr[mid];

    if (value === target) return mid;
    else if (target > value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Time: \(O(\log n)\)
// Space: \(O(1)\)

// ===========================================================
// You are given an integer array nums that was originally sorted in ascending order, but it has been rotated at some pivot unknown to you.
// Given an integer target, return its index if it exists in nums. Otherwise, return -1.
// You must write an algorithm with \(O(\log n)\) time complexity.
// Assume all integers in nums are unique.
// Example 1
// Input:
// nums = [4, 5, 6, 7, 0, 1, 2]
// target = 0
// Output:
// 4

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Is the target inside the sorted left half?
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // The right half must be sorted
      // Is the target inside the sorted right half?
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// Time: \(O(\log n)\)
// Space: \(O(1)\)
