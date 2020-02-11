var string = "[{(([";


function isValid(string) {
    var lefts = [];
    for (var i = 0; i < string.length; i++) {
        switch (string.charAt(i)) {
            case '(':
                lefts.push('(')
                break;
            case ')':
                if (lefts.pop() !== '(') {
                    return false
                }
                break;
            case '{':
                lefts.push('{')
                break;
            case '}':
                if (lefts.pop() !== '{') {
                    return false
                }
                break;
            case '[':
                lefts.push('[')
                break;
            case ']':
                if (lefts.pop() !== '[') {
                    return false
                }
        }

    }
    if(lefts.length > 0){
        return false
    }
    return true
}
console.log(isValid(string))