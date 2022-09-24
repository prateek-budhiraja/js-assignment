let staStoBtn = document.getElementById("staStoBtn");
let userTextArea = document.getElementsByTagName("textarea")[0];

staStoBtn.addEventListener("click", () => {
	if (staStoBtn.innerText === "Start") {
		staStoBtn.innerText = "Stop";
		userTextArea.disabled = false;
		userTextArea.focus();
	} else {
		staStoBtn.innerText = "Start";
		userTextArea.blur();
		userTextArea.disabled = true;
	}
});
