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
	} else if (operator === "X") {
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

const calcDisplay = document.querySelector(".display");
const calcNumbers = document.querySelectorAll(".number");
const calcOperators = document.querySelectorAll(".operator");
const calcEquals = document.querySelector("#equals-btn");

calcNumbers.forEach(btn => {
	btn.addEventListener("click", () => {
		calcDisplay.textContent += btn.textContent;
	})
});

calcOperators.forEach(btn => {
	btn.addEventListener("click", () => {
		if (calcDisplay.hasChildNodes() && firstNum === undefined){
			firstNum = Number(calcDisplay.textContent);
			operator = btn.textContent;
			calcDisplay.replaceChildren();
		}
	})
});

calcEquals.addEventListener("click", () => {
	if (calcDisplay.hasChildNodes() && secondNum === undefined) {
		secondNum = Number(calcDisplay.textContent);
		calcDisplay.replaceChildren();
		const result = operate(firstNum, secondNum,operator);
		calcDisplay.textContent = result;
	}
});
