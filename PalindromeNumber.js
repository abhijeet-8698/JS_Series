// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        console.log(false);
        return;
    }
    let pali = x.toString();
    let right = pali.length - 1;

    for (let left = 0; left < pali.length / 2; left++) {
        if (pali[left] !== pali[right]) {
            console.log(false);
            return;
            
        }
        right--;
    }
    // return true;
    console.log(true);
};

isPalindrome(121);
// isPalindrome(-121);
// isPalindrome(10);