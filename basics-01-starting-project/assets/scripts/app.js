//variables
const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '';

//functions
function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, calculationDescription);
}


//main section
addBtn.addEventListener('click', add);