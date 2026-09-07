let a1=[3,2,3,4,5,7,8,9]
let a2=[2,3,4,5,6,7,10,89]
// console.log(a1.concat(a2))
// a3=[]
// a1.forEach((eachEl)=>a3.push(eachEl))
// a2.forEach((eachEl)=>a3.push(eachEl))
// console.log(a3)
a3=[...a1,...a2]
console.log(a3)
