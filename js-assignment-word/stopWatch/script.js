let staStoBtn = document.getElementById("staSto");
let resetBtn = document.getElementById("reset");
let showTime = document.getElementById("time");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

function getTime() {
	seconds++;
	if (seconds === 60) {
		seconds = 0;
		minutes++;
	}
	if (minutes === 60) {
		minutes = 0;
		hours++;
	}
	if (hours === 24) {
		hours = 0;
	}
	return `${hours > 9 ? hours : "0" + hours}:${
		minutes > 9 ? minutes : "0" + minutes
	}:${seconds > 9 ? seconds : "0" + seconds}`;
}

staStoBtn.addEventListener("click", (event) => {
	if (event.currentTarget.innerText === "Start") {
		staStoBtn.innerText = "Stop";
		timer = setInterval(() => {
			showTime.innerText = getTime();
		}, 1000);
	} else {
		clearInterval(timer);
		staStoBtn.innerText = "Start";
	}
});

resetBtn.addEventListener("click", () => {
	if (timer) {
		clearInterval(timer);
		staStoBtn.innerText = "Start";
	}
	hours = 0;
	minutes = 0;
	seconds = 0;
	showTime.innerText = "00:00:00";
});
