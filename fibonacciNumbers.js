function fib(num){
var fibArray = [0,1];
if(num === 0){
    return 0
}
var newNumber = 0;
for(var i = 0; i <= num; i++){
    // if we are at the first index we cannot add it to anything therefore we will continue through
   if(i === 0 ){
       continue
   }
   newNumber = fibArray[i] + fibArray[i-1]
   console.log(newNumber)
   fibArray.push(newNumber)
}
console.log(fibArray)
return fibArray[num]
}
console.log(fib(3))