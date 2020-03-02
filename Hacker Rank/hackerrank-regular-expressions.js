// Task

// Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    // let str = s;
    // let re = /^(?<vowels>[aeiou]+?).*\k<vowels>$/g;
    let re = /^([aeiou]).+\1$/;
    // console.log(str.match(re))

    /*
     * Do not remove the return statement
     */
    return re
}
// console.log(regexVar('abcdo'));

    const re = regexVar();
    // const s = readLine();
    const s = 'aewxyzae'
    console.log(re.test(s));


