// Problem statement:
// Given a string s, find the length of the longest substring without repeating characters.
// A substring is a contiguous sequence of characters within a string.

// Pattern: Sliding Window + Set / Last Seen Map
// Input:
// s = "abcaacbb"
// Output:
// 3

function longestSubstring(str: string): number {
  let w = 0;
  let left = 0;
  const hashMap = new Map<string, number>();

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    if (hashMap.has(char) && hashMap.get(char)! >= left) {
      left = hashMap.get(char)! + 1;
      console.log("inside", hashMap);
      console.log("left", left);
    }

    hashMap.set(char, right);
    console.log(hashMap, "right", right);
    w = Math.max(w, right - left + 1);
  }

  return w;
}

// console.log(longestSubstring("abcaacbbxyzl"));

// Your approach: Sliding Window + Map
// - Time: \(O(n)\) — Each character is processed in the loop, and the left pointer only moves forward.
// - Space: \(O(k)\) — The map stores character indices, where \(k\) is the number of distinct characters encountered. More precisely, space is \(O(\min(n, |\Sigma|))\), where \(|\Sigma|\) is the character-set size.

// ================================================================================================

// Problem statement
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the \(i\)-th line are (i, 0) and (i, height[i]).
// Find two lines that, together with the x-axis, form a container that holds the most water.
// Return the maximum amount of water the container can store.
// You cannot tilt the container.

// Example 1
// Input:
// height = [1,8,6,2,5,4,8,3,7]
// Output:
// 49

function mostWaterContent(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;
  let area = 0;
  while (right > left) {
    let currArea = (right - left) * Math.min(arr[left], arr[right]);
    if (currArea > area) area = currArea;
    if (arr[left] > arr[right]) right--;
    else left++;
  }

  return area;
}

console.log(mostWaterContent([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Your approach: Two Pointers
// - Time: \(O(n)\) — Both pointers move inward, and each iteration eliminates one or more possible pairs.
// - Space: \(O(1)\) — Only a fixed number of variables are used, regardless of input size.
