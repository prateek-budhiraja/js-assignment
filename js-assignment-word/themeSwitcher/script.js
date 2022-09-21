let whiteCircle = document.getElementById("white");
let blackCircle = document.getElementById("black");
let blueCircle = document.getElementById("blue");
let greenCircle = document.getElementById("green");

whiteCircle.addEventListener("click", () => {
	document.body.style.backgroundColor = "#F1F1F1";
	document.body.style.color = "#2C3333";
	whiteCircle.style.border = "1px solid #2C3333";
	blueCircle.style.border = "none";
	blackCircle.style.border = "none";
	greenCircle.style.border = "none";
});
blackCircle.addEventListener("click", () => {
	document.body.style.backgroundColor = "#2C3333";
	document.body.style.color = "#F1F1F1";
	blackCircle.style.border = "1px solid #F1F1F1";
	blueCircle.style.border = "none";
	whiteCircle.style.border = "none";
	greenCircle.style.border = "none";
});
blueCircle.addEventListener("click", () => {
	document.body.style.backgroundColor = "#002B5B";
	document.body.style.color = "#F1F1F1";
	blueCircle.style.border = "1px solid #F1F1F1";
	greenCircle.style.border = "none";
	blackCircle.style.border = "none";
	whiteCircle.style.border = "none";
});
greenCircle.addEventListener("click", () => {
	document.body.style.backgroundColor = "#355764";
	document.body.style.color = "#F1F1F1";
	greenCircle.style.border = "1px solid #2C3333";
	blueCircle.style.border = "none";
	blackCircle.style.border = "none";
	whiteCircle.style.border = "none";
});
