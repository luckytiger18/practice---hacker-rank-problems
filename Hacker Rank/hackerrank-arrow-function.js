// Complete the function in the editor. It has one parameter: an array, nums . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Input Format

// The first line contains an integer, n, denoting the size of nums.
// The second line contains n space-separated integers describing the respective elements of nums.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
let i = 0;
    while (i < nums.length) {
        // console.log(nums[i])
        // console.log(nums[i] % 2)
        if (nums[i] % 2 == 0){
            nums[i] = nums[i] * 2
        } else {
            nums[i] = nums[i] * 3
        }
        i++
    }
    return nums
//     for (i = 0; i < nums.length; i++) {
//        if (nums[i] % 2 == 0){
//            console.log("even" + nums[i] * 2)
//        } else {
//            console.log("odd" + nums[i] * 3)
//        }

//         }
    }
    console.log(modifyArray([1, 6, 2, 4, 5]))
