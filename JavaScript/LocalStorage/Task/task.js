let displayData = localStorage.getItem("bmi")
document.querySelector("#result").innerText = displayData

const inputData =()=>{
    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    let heightInMeter = height/100
    let bmi = weight/(heightInMeter*heightInMeter)
    console.log(bmi)
    localStorage.setItem("bmi",bmi.toFixed(2))
}