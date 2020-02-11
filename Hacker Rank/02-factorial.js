function factorial(numb) {
    var total = numb;
    for (var i = numb; i > 1; i--){
      total = total * (i - 1);

    }
        return total
}
console.log(factorial(5))

