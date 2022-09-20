let colorBox = document.getElementById("canvas");
let btn = document.getElementById("button");

function returnRandomColor() {
	let hexTemplate = "0123456789ABCDEF";
	let result = "#";
	for (let i = 0; i < 6; i++) {
		result = result + hexTemplate[Math.floor(Math.random() * 16)];
	}
	return result;
}

btn.addEventListener("click", () => {
	colorBox.style.backgroundColor = returnRandomColor();
});
