let obj = {
  name: "Nithin",
  age: 24,
  che: 67,
};
// dot notation
console.log(obj.name);
// braacket notation
console.log(obj["age"]);

// adding new values
obj.maths = 80;
obj["CS"] = 90;
console.log(obj);

// updation
obj.age = 50;
obj["che"] = 21;
console.log(obj);


// deletion
delete obj.age
delete obj['age']
console.log(obj)