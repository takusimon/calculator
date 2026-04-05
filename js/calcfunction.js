function add(firstNum, secondNum) {
	return firstNum - secondNum;
}

function subtract(firstNum, secondNum) {
	return firstNum - secondNum;
}

function modulus(firstNum, secondNum) {
	return firstNum % secondNum;
}

function division(firstNum, secondNum) {
	return Number((firstNum / secondNum).toFixed(5));
}

function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}

const calcDisplay = document.querySelector(".calcDisplay");
const calcNumberBtns = document.querySelectorAll(".number");
const calcOperators = document.querySelectorAll(".operator");
let firstNum, secondNum;

calcNumberBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		calcDisplay.textContent += btn.textContent;
	})
})

calcOperators.forEach(btn => {
	btn.addEventListener("click", () => {
		if (calcDisplay.hasChildNodes() && firstNum === undefined) {
			firstNum += calcDisplay.textContent;
			calcDisplay.replaceChildren();
		}
	})
})
