let convertButton = document.getElementById("convert-btn");
let destinationP = document.querySelectorAll(".case_div p");

convertButton.addEventListener("click", () => {
	let userText = document.getElementById("text").value.trim();
	if (userText.trim().length === 0) return;
	destinationP.forEach((item) => {
		if (item.id == "camel-case") {
			let textArray = userText.split(" ");
			let output = textArray[0].toLowerCase();
			for (let i = 1; i < textArray.length; i++) {
				output += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
			}
			item.innerHTML = output;
		} else if (item.id == "pascal-case") {
			let textArray = userText.split(" ");
			let output = "";
			for (let i = 0; i < textArray.length; i++) {
				output += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
			}
			item.innerHTML = output;
		} else if (item.id == "snake-case") {
			let output = userText.replaceAll(" ", "_");
			item.innerHTML = output;
		} else if (item.id == "screaming-snake-case") {
			let output = userText.replaceAll(" ", "_");
			item.innerHTML = output.toUpperCase();
		} else if (item.id == "kebab-case") {
			let output = userText.replaceAll(" ", "-");
			item.innerHTML = output;
		} else if (item.id == "screaming-kebab-case") {
			let output = userText.replaceAll(" ", "-");
			item.innerHTML = output.toUpperCase();
		}
	});
});
