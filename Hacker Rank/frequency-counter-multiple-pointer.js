// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// examples:
// areThereDuplicates(1, 2, 3) - false
// areThereDuplicates(1, 2, 2) - true
// areThereDuplicates("a", "b", "c", "a") - true

function areThereDuplicates() {
    let count = {}

    for (var arg in arguments) {
        if(count[arguments[arg]]) {
            return true
        } else {
            count[arguments[arg]] = 1
        }
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3))