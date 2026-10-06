// currying
// Sum for 1,2,3 ....n
// Sum(1)(2)(3)....(n)()

function Sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return Sum(a + b);
  };
}

console.log(Sum(1)(2)(3)());
console.log(Sum(1)(2)(3)(4)(5)(6)());

// ===============================================================

// Two Sum — Easy

// Input:
// nums = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]

// Because 2 + 7 = 9.

// Goal: O(n) time using a hash map.

function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i in nums) {
    const value = target - nums[i];
    if (hashMap.has(value)) {
      return [hashMap.get(value), i];
    } else hashMap.set(nums[i], i);
  }
}

console.log(twoSum([2, 11, 7, 15], 9));

// ==============================================================

// Valid Anagram — LeetCode #242
// Given two strings s and t, determine if t is an anagram of s.
// An anagram is a word or phrase formed by rearranging the letters of another word, using all the original letters exactly once.

// Example 1

// s = "anagram"
// t = "nagaram"

// Output:
// true

// Example 2

// s = "rat"
// t = "car"
// Output:
// false

function isAnagram(s, t) {
  const hashMap = new Map();

  for (let i of s) {
    hashMap.set(i, (hashMap.get(i) || 0) + 1);
  }

  for (let i of t) {
    hashMap.set(i, (hashMap.get(i) || 0) - 1);
  }
  for (let value of hashMap.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// Time complexity is O(n) and space complexity is O(n), where n is the length of the input strings. The Map stores the frequency of each unique character.
