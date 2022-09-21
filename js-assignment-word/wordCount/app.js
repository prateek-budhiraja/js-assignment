let calculateBtn = document.getElementById("calculateBtn");
let userTextBox = document.getElementsByTagName("textarea")[0];

let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");

function getCharCount(text) {
	let count = text.replaceAll(" ", "").length;
	return count;
}

function getWordCount(text) {
	if (text == "") {
		return 0;
	}
	let arrayOfWords = text.split(" ");
	return arrayOfWords.length;
}

calculateBtn.addEventListener("click", () => {
	let userText = userTextBox.value;
	wordCount.innerText = getWordCount(userText);
	charCount.innerText = getCharCount(userText);
});
