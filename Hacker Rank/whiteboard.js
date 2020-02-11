var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
         

        }
    }
};

// var nums = [3, 2, 4]
// var target = 6

// console.log(twoSum(nums, target))

// var containsDuplicate = function(nums) {
//     for (var i=0; i<nums.length; i++) {
//         for (var j = i+1; j<nums.length; j++) {
//             if (nums[j] == nums[i]) {
//                 return true
//             }
//         }
       
//     }
//      return false
// };

// console.log(containsDuplicate([0]))

var maxProfit = function(prices) {
    var profit = 0;
    for (var i = 0; i < prices.length; i++){
        for (var j = i + 1; j < prices.length; j++){
            if (-prices[i] + prices[j] > profit){
                profit = -prices[i] + prices[j]
            }
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))

var string = ")("
var lefts = []

switch(string[i]){
    case '(':
        lefts.push('(')
        break;
    case ')':
        if(lefts.pop() == '('){
            // Still valid
        } else {
            // wrong character - invalid
        }
        break;
    case 'Popcorn':
        console.log("I like bone bones!")
        break;
    default: 
        console.log("This is everything else ")
}