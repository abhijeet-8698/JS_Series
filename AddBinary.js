// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let sum="";
    let sum= (parseInt(a, 2) + parseInt(b, 2)).toString(2)
    return sum;
};

// let A="11", B="1";
// let sum=(parseInt(A,2)+parseInt(B,2)).toString(2)
// console.log(sum);



// A radix parameter specifies the number system to use:
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
// in my case Binary number used (2) as redix.