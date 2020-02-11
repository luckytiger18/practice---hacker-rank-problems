// Write a function called sameFrequency. Given two positive intergers, find out if the two numbers have the same frequency of digits. 
// Your solution MUST have the following complexities
// Time: O(N)
// sample Input:
// sameFrequency(182,281) - True
// sameFrequency(31,14) - false
// sameFrequency(3589578, 5879385) - True
// sameFrequency(22, 222) - false

function sameFrequency(num1, num2) {
    // cannot .length a number
    var num1String = num1.toString();
    var num2String = num2.toString();

    if(num1String.length != num2String.length){
        return false
    }
    var countNumber1 = {};
    var countNumber2 = {};

    for (var i = 0; i < num1String.length; i++) {
        console.log(countNumber1[num1String[i]] = (countNumber1[num1String[i]] || 0) +1)
        console.log(countNumber2[num2String[i]] = (countNumber2[num2String[i]] || 0) +1)
    }
    for(var i in countNumber1) {
        if(!i == countNumber2) {
            return false
        }
        if(countNumber1[i] != countNumber2[i]){
            return false
        }
    }
    return true
}
console.log(sameFrequency(182, 281))