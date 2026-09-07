// checking whether it is present or not


let obj ={name:'mearn',lang:'js',duration:'7months'}
console.log('lang' in obj)

if(obj.hasOwnProperty('duration')){
    console.log("Yes")
}else{console.log("No")}


// to return keys
let keys = Object.keys(obj)
console.log(keys)

// to return values
let values = Object.values(obj)
console.log(values)


let entries = Object.entries(obj)
console.log(entries)