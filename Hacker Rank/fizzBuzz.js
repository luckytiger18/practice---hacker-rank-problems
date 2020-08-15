// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {  
   for(var i =0; i < n; i++){
       console.log(i)
       if(i === 3/3){
           console.log("divisible by 3")
       }
   }

};

console.log(fizzBuzz(15))



