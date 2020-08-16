// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {
    var list = [""];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            list.push("FizzBuzz")
        } else if (i % 3 === 0) {
            list.push("Fizz")
        } else if (i % 5 === 0) {
            list.push("Buzz")
        } else {
            list.push(i.toString())
        }
    }
    return list

};

console.log(fizzBuzz(100))