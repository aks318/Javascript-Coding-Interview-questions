// You are given an array of integers temperatures representing the daily temperatures.
// Return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] = 0.

// Example
// Input:
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// Output:
// [1, 1, 4, 2, 1, 1, 0, 0]

function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop()!;
      answer[index] = i - index;
    }

    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// - Time: \(O(n)\) — Each temperature index is pushed onto the stack once and popped at most once.
// - Space: \(O(n)\) — The stack and answer array can each hold up to \(n\) elements.

// ============================================================================================================

// You are given an array of intervals where intervals[i] = [startᵢ, endᵢ].
// Merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1
// Input:
// intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output:
// [[1,6],[8,10],[15,18]]

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  // 1. Sort intervals by starting point
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. Initialize result with the first interval
  const result: number[][] = [intervals[0]];

  // 3. Process remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = result[result.length - 1];

    // 4. Check if intervals overlap
    if (current[0] <= lastMerged[1]) {
      // Merge by updating the ending point
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap: add a new interval
      result.push(current);
    }
  }

  return result;
}

// Time: \(O(n \log n)\) — Sorting takes \(O(n \log n)\), and merging takes \(O(n)\).
// Space: \(O(n)\) — The result array can contain up to \(n\) intervals.

// =========================================================================================

// Example 1
// Input:
// intervals = [5,10,-5,-15]
// Output:
// -15

function asteroids(arr: number[]): number[] {
  const stack: number[] = [];

  for (const i of arr) {
    let add_to_stack = true;

    while (stack.length && i < 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];

      if (Math.abs(top) > Math.abs(i)) {
        add_to_stack = false;
        break;
      } else if (Math.abs(top) === Math.abs(i)) {
        stack.pop();
        add_to_stack = false;
        break;
      } else {
        stack.pop();
      }
    }

    if (add_to_stack) stack.push(i);
  }

  return stack;
}

console.log(asteroids([20, 5, 10, -5, -15, -18, -18, 20])); // []

console.log(asteroids([5, 10, -5, -15]));
