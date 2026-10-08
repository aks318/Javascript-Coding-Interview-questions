// Problem: Valid Palindrome

// Given a string s, check whether it is a palindrome after:
//     Ignoring spaces and special characters.
//     Treating uppercase and lowercase letters as the same.

// Input:  "A man, a plan, a canal: Panama"
// Output: true

// After ignoring special characters and spaces:
// amanaplanacanalpanama

function validPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  function isAlphaNumeric(char: string) {
    return /[a-zA-Z0-9]/.test(char);
  }

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      console.log(s[left].toLowerCase(), s[right].toLowerCase());
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
// Time: O(n)
// Space: O(1)

// =====================================================================

// Problem: Best Time to Buy and Sell Stock

// Given an array prices, where prices[i] is the price of a stock on day i, find the maximum profit you can make by buying on one day and selling on a later day.
// You can only buy before you sell.

// Input:  [7, 1, 5, 3, 6, 4]
// Output: 5

// Buy at 1 and sell at 6:
// 6 - 1 = 5

function maxProfit(sales: number[]) {
  let minPrice = sales[0];
  let profit = 0;
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] < minPrice) {
      minPrice = sales[i];
    }
    const temProfit = sales[i] - minPrice;
    if (temProfit > profit) profit = temProfit;
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
