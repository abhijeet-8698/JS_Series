// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// -------------Solution ----------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];

    let map={
        ")":"(",
        "]":"[",
        "}":"{"
    };

    for (let i of s){
        if(i ==="(" || i==="[" || i === "{"){
            stack.push(i);
        }else{
            if (stack.length==0) return false;
            if (stack.pop() !== map[i]) return false;
        }
    }

    return stack.length === 0;;
    
};



// Logic (Very Simple)
// Use a stack.

// Rules:
// Push every opening bracket: (, {, [
// For every closing bracket:
// stack must NOT be empty
// top of stack must match the closing bracket

// ( → )
// [ → ]
// { → }

// If mismatch → return false
// After complete string:
// stack empty → true
// anything left → false