let staStoBtn = document.getElementById("staStoBtn");
let userTextArea = document.getElementsByTagName("textarea")[0];
let timerDisplay = document.getElementById("time");

let timer;
let seconds = 0;
let minutes = 0;

function updateTime() {
	seconds++;
	if (seconds === 60) {
		seconds = 0;
		minutes++;
	}
	if (minutes === 60) {
		minutes = 0;
	}
	timerDisplay.innerText = `${minutes > 9 ? minutes : "0" + minutes}:${
		seconds > 9 ? seconds : "0" + seconds
	}`;
}

staStoBtn.addEventListener("click", () => {
	if (staStoBtn.innerText === "Start") {
		staStoBtn.innerText = "Stop";
		userTextArea.disabled = false;
		userTextArea.focus();
		timer = setInterval(updateTime, 1000);
	} else {
		clearInterval(timer);
		staStoBtn.innerText = "Start";
		userTextArea.blur();
		userTextArea.disabled = true;
	}
});
