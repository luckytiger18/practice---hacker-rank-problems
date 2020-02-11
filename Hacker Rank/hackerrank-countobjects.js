// Task

// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o. x == o. y.

// Input Format

// The first line contains an integer denoting n.
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.

// Output Format

// Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.

function getCount(objList) {
    var totalNum = 0
    for (var i = 0; i < objList.length; i++) {
        // print the x values of the object
        // console.log(objList[i].x)
        // console.log(objList[i].y)
        if (objList[i].x == objList[i].y) {
            totalNum = totalNum + 1
        }
    }
    return totalNum
}

console.log(getCount([{
        x: 1,
        y: 1
    },
    {
        x: 2,
        y: 3
    },
    {
        x: 3,
        y: 3
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 4,
        y: 5
    },
]))