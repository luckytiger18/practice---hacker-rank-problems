var longestCommonPrefix = function (strs) {
    var charTrak = "";
    if (strs.length <= 0) {
        return charTrak
    }
    if (strs.length == 1) {
        return strs[0]
    } 
    for (var c = 0; c < strs[0].length; c++) {
        for (var i = 1; i < strs.length; i++) {
            if (strs[0].charAt(c) !== strs[i].charAt(c)) {
                return charTrak
            } 
        }
        charTrak = charTrak + strs[0].charAt(c)
    }
    return charTrak
}


var list = ["",""]
// if (list[0].charAt(0) == list[1].charAt(0)) {
//     console.log("boo")
// } else {
//     console.log("blah")
// }

console.log(longestCommonPrefix(list))