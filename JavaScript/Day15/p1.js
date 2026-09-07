// includes -> Checks whether an element exists
let a1 =['minu','tinu','binu','jinu']
let isTinu=a1.includes('tinu')
console.log(isTinu)

// Join -> Converts an array into a string using a separator.
let str = a1.join('+')
console.log(str)


// indexOf -> Finds the index/position of an element.
let index = a1.indexOf('jinu')
console.log(index)


// slice -> Extracts a portion of an array without changing the original array.
let slice = a1.slice(1,3)
console.log(slice)


// reverse -> Reverses the order of an array.
let rev = a1.reverse
// toReversed can also be used as it brings result in a new array
console.log(a1)


// splice -> splice() is used to add, remove, or replace elements in an array.
a1.splice(1,2,'abc','def','ghi')
console.log(a1)

