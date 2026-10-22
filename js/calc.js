
//Functions for all the basic math operators

function add(firstAddend, secondAddend){
    return firstAddend + secondAddend;
}

function subtract(minuend,subtrahend){
    return minuend - subtrahend;
}

function multiply(multiplicand,multiplier){
    return multiplicand * multiplier;
}

function divide(dividend,divisor){
    if (dividend === 0 || divisor === 0){
         return 'ERR';
    }else {
        return dividend/divisor;
    }
    
}

//Functions for the main calculator functions

function clearDisplay(){
    calcDisplay.textContent = '';
}

function valueReset(){
    num1 = null;
    num2 = null;
    operator = null;
}

function assignFirstNumber(){
    if (result && num1 === null){
        num1 = result;
        result = null;
    } else if (num1 === null){
        num1 = +calcDisplay.textContent;
    }
}

function assignSecondNumber(){
    if (num2 === null){
        num2 = +calcDisplay.textContent
        clearDisplay();
    }
}

function assignOperator(event){
    if (justCalculated) {
    num1 = result;
    result = null;
    justCalculated = false;
} else {
    assignFirstNumber();
}
    let button = event.target;

    switch (button.textContent){
        case '+':
            operator = '+';
            break;
        case '/':
            operator = '/';
            break;
        case '*':
            operator = '*';
            break;
        case '-':
            operator = '-';
            break
    }

    clearDisplay();

    if (num1 != null && num2 != null && operator){
        equals();
    }
}

function equals(){
    assignSecondNumber();

    if (num1 != null && num2 != null && operator){
        calculate(num1,num2,operator)
    }
}

function calculate(num1,num2,operator){
    switch (operator){
        case '+':
            result = add(num1,num2);
            valueReset();
            break;
        case '/':
            result = divide(num1,num2);
            valueReset();
            break;
        case '*':
            result = multiply(num1,num2);
            valueReset();
            break;
        case '-':
            result = subtract(num1,num2);
            valueReset();
            break;
    }
    if (result){
        displayResult(result);
    }
}

function displayResult(result){
    clearDisplay();
    calcDisplay.textContent += result;
    justCalculated = true;
}

function clearAll(){
    clearDisplay();
    valueReset();
    if (result){
        result = null;
    }
}

//Set Global Variables
let num1,
    num2,
    operator,
    result;
let justCalculated = false;

//Define events

let calcDisplay = document.querySelector('#calc-display');
let numbers = document.querySelector('#numbers');
let clearBtn = document.querySelector('.clear');
let operatorBtns = document.querySelector('#operators');
let equalsBtn = document.querySelector('.equals');
let delBtn = document.querySelector('.del');

numbers.addEventListener('click',(event) =>{
    let target = event.target;
    if (justCalculated){
        clearDisplay();
        result = null;
        justCalculated = false;
    }
    calcDisplay.textContent += target.textContent;
}
)

clearBtn.addEventListener('click',clearAll);

operatorBtns.addEventListener('click',assignOperator);
equalsBtn.addEventListener('click',equals);
delBtn.addEventListener('click',() =>calcDisplay.textContent = calcDisplay.textContent.slice(0,-1));