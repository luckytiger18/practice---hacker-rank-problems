// Objective

// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
// where a is the rectangle's area and p is its perimeter.
// Creates an array consisting of s1 and s2 and sorts it in ascending order.
// Returns the sorted array.

// Input Format

// The first line contains an integer denoting s1.
// The second line contains an integer denoting s2.

function sides(literals, ...expressions) {
    let input = expressions;
    let p = input[1]
    let a = input[0]
    let s1 = (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4
    let s2 = (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4
    return [s1, s2].sort()


}
let s1 = 10;
let s2 = 14;
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log([x,y])