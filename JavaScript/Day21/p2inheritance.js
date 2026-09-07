// Task: Vehicle Inheritance
// Create a base class called Vehicle with:
// brand
// model
// year
// A method start() that prints "Vehicle started"
// Then create two child classes:
// Car extends Vehicle
// Add:
// numberOfDoors
// A method drive() that prints "Car is driving"
// Override start() to print "Car started"
// Bike extends Vehicle
// Add:
// hasGear
// A method ride() that prints "Bike is riding"
// Override start() to print "Bike started


class vehicle{
    brand ='BMW'
    model ='M5'
    year = 2025

    start(){
        console.log("Vehicle Started")
    }
}
class car extends vehicle{
    Doors = 5
    drive(){
        console.log("Car is driving")
    }
    start(){
        console.log("Car started")
    }
}
class bike extends vehicle{
    hasGear=true
    ride(){
        console.log("Bike is riding")
    }
    start(){
        console.log("Bike started")
    }
}

let b = new bike
console.log(b.brand)
console.log(b.year)

let c = new car
console.log(c.model)