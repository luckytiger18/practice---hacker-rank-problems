// Task

// Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.

// Constraints

// The length of string s is => 3 .
// It's guaranteed that string s contains at least one integer.

// Output Format

// The function must return a RegExp object that matches every integer in some string s.

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar();
const s = '102, 1948948 and 1.3 and 4.5';

const r = s.match(re);
console.log(r)
