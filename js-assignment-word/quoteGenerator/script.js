let generateBtn = document.getElementById("generateBtn");
let quoteSection = document.getElementById("quote");

function getQuote() {
	fetch("https://type.fit/api/quotes")
		.then((data) => data.json())
		.then((item) => {
			quoteSection.innerHTML = `"<br/>${
				item[Math.floor(Math.random() * (item.length - 1))].text
			}<br/>"`;
		});
}

generateBtn.addEventListener("click", () => {
	getQuote();
});
