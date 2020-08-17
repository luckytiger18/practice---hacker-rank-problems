function isPalindrome(num) {
    if (num < 0) {
        return false
    }
    var numString = num.toString();
    var firstArray = Array.from(numString).toString();
    // console.log(firstArray)
    var reverseArray = Array.from(numString).reverse().toString();
    // console.log(reverseArray)
    if (firstArray === reverseArray){
        return true
    } else {
       return false
    }
}

    console.log(isPalindrome(-121))