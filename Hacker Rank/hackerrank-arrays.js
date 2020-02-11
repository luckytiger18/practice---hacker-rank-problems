// Complete the getSecondLargest function in the editor below. It has one parameter: an array,nums, of n numbers. The function must find and return the second largest number in nums.
// Locked stub code in the editor reads the following input from stdin and passes it to the function:
// The first line contains an integer, , denoting the size of the  array.
// The second line contains  space-separated numbers describing the elements in .


function getSecondLargest(nums) {
    var largestNum = Math.max(...nums);
    var newArray = nums.filter(num => num !== largestNum)
    var secondLargest = Math.max(...newArray)

}
getSecondLargest([2, 3, 6, 6, 5])