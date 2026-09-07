const weatherData = [
  { district: "Thrissur", temp: 32 },
  { district: "Thiruvananthapuram", temp: 33 },
  { district: "Kozhikode", temp: 31 },
  { district: "Thrissur", temp: 28 },
  { district: "Kozhikode", temp: 27 },
  { district: "Ernakulam", temp: 26 },
  { district: "Ernakulam", temp: 30 },
  { district: "Thiruvananthapuram", temp: 29 },
];

// print district with its highest temperature

let result = {}
weatherData.forEach((eachObj)=>{
    let districtName = eachObj.district
    let currTemp = eachObj.temp  
    if(districtName in result){
        if(currTemp>result[districtName]){
            result[districtName]=currTemp
        }
    }else{
        result[districtName]=currTemp
    }
})
console.log(result)