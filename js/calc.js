
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
    return dividend/divisor;
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
    if (result && !num1){
        num1 = result;
        result = null;
    } else if (!num1){
        num1 = +calcDisplay.textContent;
    }
}

function assignSecondNumber(){
    if (!num2){
        num2 = +calcDisplay.textContent
    }
}

function assignOperator(event){
    assignFirstNumber();
    let button = event.target;

    switch (button.id){
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

    if (num1 && num2 && operator){
        equals();
    }
}

function equals(){
    assignSecondNumber();

    if (num1 && num2 && operator){
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
            valueReset;
            break;
    }
    if (result){
        displayResult(result);
    }
}

function displayResult(result){
    clearDisplay();
    calcDisplay.textContent += result;
}

//Set Global Variables
let num1,
    num2,
    operator,
    result;