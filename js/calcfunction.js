// basic operator functions
function add(firstNum, secondNum) {
	return firstNum + secondNum;
}

function substract(firstNum, secondNum) {
	return firstNum - secondNum;
}

function divide(firstNum, secondNum) {
	return firstNum / secondNum;
}

function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}

// performs calculator operations and returns result
function operate(firstNum, secondNum, operator) {
	let result;
	if (operator === "+") {
		result = add(firstNum, secondNum);
		return result;
	} else if (operator === "-") {
		result = substract(firstNum, secondNum);
		return result;
	} else if (operator === "*") {
		result = multiply(firstNum, secondNum);
		return result;
	} else if (operator === "/") {
		result = divide(firstNum, secondNum);
		return result;
	}
}
//declare three calc variables
let firstNum,
	secondNum,
	operator;


