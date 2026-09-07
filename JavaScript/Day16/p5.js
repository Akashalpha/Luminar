let car = {
  name: "polo",
  model: "petrol",
  manufactorer: "Volswagon",
  price: 800000,
};

// 1. display carname and price
console.log(car.name ,car.price)

// 2. Check model key is present, if present display its value
if(car.hasOwnProperty('model')){
    console.log(car.model)
}else{
    console.log("Key is not present")
}

// 3. Add varient as Automatic and manual - new array
car.variant=["Automatic","Manual"]
console.log(car)

// 4. Add color as red
car.color="red"
console.log(car)

// 5. update price to 1000000
car.price = 1000000
console.log(car)

// add new varient - hybrid
car.variant.push("Hybrid")
console.log(car)