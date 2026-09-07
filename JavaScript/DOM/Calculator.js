const displayData =(num)=>{
    let element = document.querySelector('#result')
    element.value += num
}
const clearData=()=>{
    let element = document.querySelector('#result')
    element.value =""
}
const calculateVal=()=>{
    try {
        let element = document.querySelector('#result')
    element.value=eval(element.value)
    } catch (error) {
          let element = document.querySelector('#result')
    element.value="Invalid input"
    console.log(error)
        
    }
}
const deleteLast=()=>{
    let element = document.querySelector('#result')
    element.value=element.value.slice(0,-1)
}