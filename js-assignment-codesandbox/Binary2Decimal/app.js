let inputBinary = document.getElementById("binary");
let convertBtn = document.querySelector(".btn");
let resultDecimal = document.querySelector(".result");
let form = document.querySelector(".container");

form.addEventListener("submit", (event) => {
	event.preventDefault();
});

// check if the input is correct
function checkInput(value) {
	for (let i = 0; i < value.length; i++) {
		if (value.charAt(i) == 0 || value.charAt(i) == 1) continue;
		inputBinary.value = "";
		resultDecimal.innerHTML = `Put correct binary value (0/1) 🔴`;
		return false;
	}
	return true;
}

// convert binary to decimal
function convertBinaryToDecimal(binary) {
	let decimal = 0;
	for (let i = 0; i < binary.length; i++) {
		decimal += Number(binary.charAt(i)) * Math.pow(2, binary.length - i - 1);
	}
	return decimal;
}

convertBtn.addEventListener("click", () => {
	if (checkInput(inputBinary.value)) {
		let resultDecimalValue = convertBinaryToDecimal(inputBinary.value);
		resultDecimal.innerHTML = `Decimal Number : ${resultDecimalValue}`;
	}
});
