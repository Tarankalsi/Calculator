function appendToDisplay(value){
    document.getElementById("display").value += value 
}

function clearDisplay(){
    document.getElementById("display").value = ''
}

function backspace(){
    let value = document.getElementById('display').value
    document.getElementById('display').value = value.slice(0,-1)
}

function calculate(){
    try {
        const equation = document.getElementById("display").value
        let result = eval(equation)
        document.getElementById("display").value = result
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}