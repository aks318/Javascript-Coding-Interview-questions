// function throttle() {
//   let cooldown = false;

//   return function () {
//     if (cooldown) return;
//     cooldown = true;
//     setTimeout(() => {
//       console.log("throttle");
//       cooldown = false;
//     }, 2000);
//   };
// }

// const fn = throttle();
// fn();
// fn();
// fn();

// function debounce() {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       console.log("debounce");
//     }, 2000);
//   };
// }

// const fn = debounce();
// fn();
// fn();
// fn();

//====================================================

// Group Anagram ===

// Example 1

// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

function GroupAnagram(strs) {
  const map = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }
    let key = count.join("#");
    if (!map.get(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}
// Array of strings → Create Frequency Signature for each string → Count 26 characters → Convert count array to key → Use key in Map → Same key means same anagram group → Push string into that group → Return Map values

// console.log(GroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Time complexity is O(n × k), where n is the number of strings and k is the average string length. Space complexity is O(n × k) because the Map stores all the strings, while the 26-character frequency array uses constant O(1) extra space.

// =======================================================================

// For Top K Frequent Elements — LeetCode #347, the main pattern is:
// Frequency Map → Bucket Sort → Pick top K

// Example 1

// nums = [1, 1, 1, 2, 2, 3]
// k = 2

// Output:
// [1, 2]

function topKFrequent(nums, k) {
  const frequency = new Map();

  for (let num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const bucket = Array.from(
    {
      length: nums.length + 1,
    },
    () => [],
  );

  for (let [num, count] of frequency) {
    bucket[count].push(num);
  }

  let result = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (let num of bucket[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// Array → Create Frequency Map → Count occurrences → Create buckets where index = frequency → Put each number into bucket[count] → Traverse buckets from highest to lowest → Add numbers to result → Stop when result.length = K → Return result

// "The time complexity is O(n) and the space complexity is O(n). I use a frequency map and bucket sort, where the maximum possible frequency is n."
