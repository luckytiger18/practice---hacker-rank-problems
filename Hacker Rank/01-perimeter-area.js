function getArea(length, width) {
    let area;
    // Write your code here
    area = length * parseFloat(width);
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter =  2*length + 2*width;
    
    return perimeter;
}
var length = 611.123;
var width = 999.997;

console.log(getArea(length, width))
console.log(getPerimeter(length, width))