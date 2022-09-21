let copyBtn = document.getElementById("copyBtn");
let inputBox = document.getElementsByTagName("input")[0];

copyBtn.addEventListener("click", () => {
	inputBox.focus();
	inputBox.select();
	if (document.execCommand("copy")) {
		copyBtn.innerText = "TEXT COPIED SUCCESSFULLY 🎉";
		copyBtn.style.backgroundColor = "#94B49F";
		setTimeout(() => {
			copyBtn.innerText = "Click to Copy!";
			copyBtn.style.backgroundColor = "#F9F5EB";
		}, 2000);
	}
	inputBox.blur();
});
