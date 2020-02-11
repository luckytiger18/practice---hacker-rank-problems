// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task
// Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
// If a is 0, throw an Error with message = Zero Error.
// If a is negative, throw an Error with message = Negative Error.

// Output Format

// If the value of a is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If a is 0, throw an Error with message =  Zero Error.
// If a is negative, throw an Error with message =  Negative Error.

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a > 0){
        return "Yes"
    } if(a == 0){
        throw new Error("Zero Error")
    } if(a < 0){
        throw new Error("Negative Error")
    }
} 
try {
    isPositive(-5)
}catch(e){
    console.log(e.message)
}






