let userRock = document.getElementById("r");
let userPaper = document.getElementById("p");
let userScissors = document.getElementById("s");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function getNameForChoice(choice) {
	return choice === 0 ? "Rock" : choice === 1 ? "Paper" : "Scissors";
}

function updateChoice(userChoice, computerChoice) {
	document.getElementById("result-user-stat").innerHTML =
		"User: " + getNameForChoice(userChoice);
	document.getElementById("result-comp-stat").innerHTML =
		"Computer: " + getNameForChoice(computerChoice);
}

function findWinner(userChoice, computerChoice) {
	let result;
	if (userChoice == computerChoice) {
		result = null;
	} else if (
		(userChoice === 0 && computerChoice === 1) ||
		(userChoice === 1 && computerChoice === 2) ||
		(userChoice === 2 && computerChoice == 0)
	)
		result = 1;
	else result = 0;
	return result;
}

function updateWinner(winner) {
	let userScoreDisplay = document.getElementById("userScoreVal");
	let compScoreDisplay = document.getElementById("compScoreVal");

	let announceWinner = document.getElementById("result-final-stat");

	if (winner === 0) {
		announceWinner.innerText = "Winner: User 👤";
		userScore++;
		userScoreDisplay.innerText = userScore;
	} else if (winner === 1) {
		announceWinner.innerText = "Winner: Computer 💻";
		compScore++;
		compScoreDisplay.innerText = compScore;
	} else {
		announceWinner.innerText = "It's a Draw 🤌";
	}
}

userRock.addEventListener("click", () => {
	let userChoice = 0;
	let computerChoice = getComputerChoice();
	updateChoice(userChoice, computerChoice);
	let winner = findWinner(userChoice, computerChoice);
	updateWinner(winner);
});

userPaper.addEventListener("click", () => {
	let userChoice = 1;
	let computerChoice = getComputerChoice();
	updateChoice(userChoice, computerChoice);
	let winner = findWinner(userChoice, computerChoice);
	updateWinner(winner);
});

userScissors.addEventListener("click", () => {
	let userChoice = 2;
	let computerChoice = getComputerChoice();
	updateChoice(userChoice, computerChoice);
	let winner = findWinner(userChoice, computerChoice);
	updateWinner(winner);
});
