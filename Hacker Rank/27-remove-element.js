var removeElement = function (nums, val) {
    var lastIndex = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            var lastElement = nums[(nums.length - 1) - lastIndex]
            nums[(nums.length - 1) - lastIndex] = nums[i]
            nums[i] = lastElement
            lastIndex++
        }
    }
    return nums
};
var nums = [3, 2, 2, 5]
var val = 3
console.log(removeElement(nums, val))