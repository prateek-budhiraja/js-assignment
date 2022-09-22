let colorBar = document.querySelectorAll(".colorBar");
let colorH1 = document.getElementsByTagName("h1")[0];

colorBar.forEach((element) => {
	let copyConfirm = document.createElement("h2");
	copyConfirm.innerText = "Hex Code Copied to ClipBord 🎉";
	copyConfirm.classList.add("clipbordConfirm");

	element.style.backgroundColor = "#" + element.id;
	element.addEventListener("click", () => {
		colorH1.innerHTML = `The color you selected is: #<span id="color" style="color: #${element.id}">${element.id}</span>`;
		var myColor = document.getElementById("color");
		navigator.clipboard.writeText(myColor.innerText).then(
			function () {
				console.log("Copying to clipboard was successful!");
				document.body.prepend(copyConfirm);
				setTimeout(() => {
					copyConfirm.remove();
				}, 2000);
			},
			function (err) {
				console.error("Could not copy text: ", err);
			}
		);
	});
});
