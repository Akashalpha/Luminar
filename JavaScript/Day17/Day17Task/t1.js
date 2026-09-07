const products = [
{ pid: 100, pName: "Apple", brand: "5G", price: 120000, display: "OLED" },
{ pid: 101, pName: "Samsung", brand: "4G", price: 90000, display: "AMOLED" },
{
pid: 102,
pName: "OnePlus",
brand: "4G",
price: 75000,
display: "Fluid AMOLED",
},
{ pid: 103, pName: "Pixel", brand: "3G", price: 85000, display: "OLED" },
{
pid: 104,
pName: "Xiaomi",
brand: "3G",
price: 40000,
display: "Super AMOLED",
},
];


// print product name only

products.forEach((eachItem)=>{
     let eachProduct = eachItem.pName
    console.log(eachProduct)
})
console.log(`-------------------------------`);



// print all mobile details whose display is oled :

let displayOled = products.filter((mobile)=>mobile.display==="OLED")
console.log(displayOled)

// products.forEach((eachItem)=>{
//     if(eachItem.display=="OLED"){
//         console.log(eachItem)
//     }
// })
console.log(`-------------------------------`);


// print 3g mobile phone names :

let Mobile = products.filter((mobile)=>mobile.brand==="3G").map(mobile=>mobile.pName)
console.log(Mobile)

// products.forEach((eachItem)=>{
//     if(eachItem.brand=="3G"){
//         console.log(eachItem)
//     }
// })
console.log(`-------------------------------`);


// sort mobile based on price - sort

let sortedOrder = products.toSorted((a,b)=>a.price-b.price)
console.log(sortedOrder)
console.log(`-------------------------------`);


// print costly mobile price
let costlyMobile = products.reduce((acc,curr)=>acc.price>curr.price?acc:curr)
console.log(costlyMobile)
console.log(`-------------------------------`);


// print low cost mobile
let lowCostMobile = products.reduce((acc,curr)=>acc.price<curr.price?acc:curr)
console.log(lowCostMobile)
console.log(`-------------------------------`);
