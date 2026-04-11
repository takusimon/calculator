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

// performs calculator operations and returnsresult
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
const calcClear = document.querySelector("#clear");
const calcDel = document.querySelector("#delete");

calcNumbers.forEach(btn => {
	btn.addEventListener("click", () => {
		calcDisplay.textContent += btn.textContent;
	})
});

calcOperators.forEach(btn => {
	btn.addEventListener("click", () => {
		if (calcDisplay.textContent !== "" && firstNum === undefined){
			firstNum = Number(calcDisplay.textContent);
			operator = btn.textContent;
			calcDisplay.replaceChildren();
		}
	})
});

calcEquals.addEventListener("click", () => {
	if (calcDisplay.textContent !== "" && secondNum === undefined) {
		secondNum = Number(calcDisplay.textContent);
		calcDisplay.replaceChildren();
		const result = operate(firstNum, secondNum,operator);
		calcDisplay.textContent = result;
		firstNum =  undefined;
		secondNum = undefined;
		operator = undefined;
	}
});

calcClear.addEventListener("click", () => {
	firstNum = undefined;
	secondNum = undefined;
	operator = undefined;
	calcDisplay.replaceChildren();
});

calcDel.addEventListener("click", () => {
	calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
});

