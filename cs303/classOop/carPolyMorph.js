"use strict";
//This is done without creating common interface and bad as we need to
//modify the code in total every time new car is added. Price calculator need to be common method for all types of cars.
//Each type of car should inherit from a super class Car.
class Car {
  constructor(brand, year, price, taxRate) {
    this.brand = brand;
    this.year = year;
    this.price = price;
  }
  computePrice() {
    return this.price;
  }
}
class HybridCar extends Car {
  constructor(brand, year, price, taxRate) {
    super(brand, year, price);
    this.taxRate = taxRate;
  }
  computePrice() {
    return this.price * (1 + this.taxRate);
  }
}
class ElectricCar extends Car {
  constructor(brand, year, price, electricTaxRate) {
    super(brand, year, price);
    this.electricTaxRate = electricTaxRate;
  }
  computePrice() {
    return this.price * (1 + this.electricTaxRate);
  }
}

class Toyota extends Car {
  constructor(brand, year, price, toyotaTaxRate) {
    super(brand, year, price);
    this.toyotaTaxRate = toyotaTaxRate;
  }
  computePrice() {
    return this.price * (1 + this.toyotaTaxRate);
  }
}

const cars = [
  new HybridCar("Honda", 2020, 10000, 0.01),
  new HybridCar("BMW", 2021, 50000, 0.01),
  new ElectricCar("Lexus", 2000, 20000, 0.005),
  new ElectricCar("Tesla", 2021, 30000, 0.005),
  new Toyota("Toyota", 2021, 32000, 0.007),
];

const total = cars.reduce((sum, car) => (sum += car.computePrice()), 0);
console.log(total);
const avg = cars.reduce(
  (sum, car, index, array) => sum + car.computePrice() / array.length,
  0
);
console.log(avg);
