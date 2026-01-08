// const account_numb =123213;
let str1 = "abcabcbb";

let left = 0;
let max = 0;
let set = new Set();

for (let right =0; right<str1.length; right ++){
        while(set.has(str1[right])){
            set.delete(str1[left]);
            left ++;
        }
        set.add(str1[right])
        max=Math.max(max, right-left +1 )   
     //    console.log(max);
        
    }
        console.log(max);
        return max;