// Problem statement
// Given a string s containing only the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
// A string is valid

// if:
// 1. Every opening bracket is closed by the same type of bracket.
// 2. Opening brackets are closed in the correct order.
// 3. Every closing bracket has a corresponding opening bracket.
// Pattern: Stack

// Example 1
// Input:
// s = "()"
// Output:
// true

function validParenthesis(str: string) {
  let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  let arr: string[] = [];
  for (let s of str) {
    if (map.has(s)) {
      let opening = map.get(s);
      if (opening === arr[arr.length - 1]) arr.pop();
      else return false;
    } else arr.push(s);
  }
  return arr.length ? false : true;
}

// console.log(validParenthesis("{{([]])}}"));

// Your approach: Stack + Map
// - Time: \(O(n)\) — Each character is processed once. Map lookups and stack operations take \(O(1)\) average time.
// - Space: \(O(n)\) — In the worst case, the stack can store all \(n\) opening brackets. The map has only three entries, so it uses constant space.

// ================================================================================

class MinStack {
  stack: number[] = [];
  private length: number = 0;
  private minStack: number[] = [];

  push(num: number): void {
    this.stack.push(num);
    this.length = this.length + 1;
    if (!this.minStack.length) this.minStack.push(num);
    else if (this.minStack[this.minStack.length - 1] >= num)
      this.minStack.push(num);
  }
  pop() {
    if (this.stack.length) {
      const num = this.stack.pop();
      this.length = this.length - 1;
      if (this.minStack[this.minStack.length - 1] === num) this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.length - 1];
  }
  getMin() {
    console.log(this.minStack);
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
