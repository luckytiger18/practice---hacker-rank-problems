// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

//  Write code that adds an 'area' method to the Rectangle class' prototype
 
Rectangle.prototype.area = function() {
    return this.w * this.h
  
}  
// Create a Square class that inherits from Rectangle and implement its class constructor
// made a child class which is related to the parent class
class Square extends Rectangle {
    constructor(w){
        super(w, w)
    }
}


// }
let area1 = new Rectangle(5,6);
let square = new Square(3);
square.area();
console.log(square.area());

