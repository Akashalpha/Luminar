let displayData = localStorage.getItem('inputVal')
document.querySelector("#result").innerText = displayData

const inputData =()=>{
    let value = document.querySelector('textarea').value
    console.log(value)
    localStorage.setItem("inputVal",value)
}