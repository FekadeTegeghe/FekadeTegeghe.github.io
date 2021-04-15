"use strict";
//Find area of shapes
class Shape {
  constructor() {}
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area(radius) {
    return this.radius * this.radius * Math.PI;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area(length, width) {
    return this.length * this.width;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area(side) {
    return Math.pow(this.side, 2);
  }
}
let circle = new Circle(5);
let rectangle = new Rectangle(5, 6);
let square = new Square(10);

let totalArea = circle.area() + rectangle.area() + square.area();
console.log(totalArea);
