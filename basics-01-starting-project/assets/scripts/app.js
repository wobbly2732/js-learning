/* Unconventional calculator application code
   tim.chapman2732@gmail.com
   version: draft
   
*/

//global variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//functions
function getUserNumberInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(identifier, prevResult, number, newResult) {
    const logEntry = {
        operation: identifier,
        prevResult: prevResult,
        number: number,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries); //outputs to developer console
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&  //and 
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVIDE' || //or
        !enteredNumber
    ) {
        return; 
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);    
}

function add() {
    calculateResult('ADD');
    }

function subtract() {
    calculateResult('SUBTRACT');
}

function multipy() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE')
}

//main body of script

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multipy);
divideBtn.addEventListener('click', divide);