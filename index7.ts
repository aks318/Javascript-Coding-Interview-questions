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
      stack.length > 0 &&
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
// [1, 1, 4, 2, 1, 1, 0, 0]
