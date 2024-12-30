// Rock, Paper, Scissors refactored with Functions.
const initGame = () => {
	const startGame = confirm('shall we play rock, paper, or scissors?');
	startGame
		? playGame()
		: alert('Okay, maybe next time!');
};

// Game Flow Function.
const playGame = () => {
	while (true) {
		let playerChoice = getPlayerChoice();
		playerChoice = formatPlayerChoice(playerChoice);
		if (playerChoice === '') {
			invalidChoice();
			continue;
		}
		if (!playerChoice) {
			decidedNotToPlay();
			break;
		}
		playerChoice = evaluatePlayerChoice(playerChoice);
		if (!playerChoice) {
			invalidChoice();
			continue;
		}
		const computerChoice = getComputerChoice(playerChoice);
		const result = determineWinner(playerChoice, computerChoice);
		displayResult(result);
		if (askToPlayAgain) {
			continue;
		} else {
			thanksForPlaying();
			break;
		}
	}
};

const getPlayerChoice = () => {
	return prompt('Please enter rock, paper, or scissors?');
}
const formatPlayerChoice = (playerChoice) => {
	if (playerChoice || playerChoice === '') {
		return playerChoice.trim().toLowerCase();
	} else {
		return false;
	}
};

const decidedNotToPlay = () => {
	alert('I guess you changed your mind, Maybe next time!');
};

const evaluatePlayerChoice = (playerChoice) => {
	if (
		playerChoice === 'rock' ||
		playerChoice === 'paper' ||
		playerChoice === 'scissors'
	) {
		return playerChoice;
	} else {
		return false;
	}
};

const invalidChoice = () => {
	alert('you did not enter rock, paper, or scissors!');
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	const rpsArray = ['rock', 'paper', 'scissors'];
	return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
	const winner =
		player === computer
			? 'Tie game!'
			: player ==='rock' && computer === 'paper'
				? `PlayerOne: ${player}\n Computer: ${computer}\nComputer wins!`
				: player ==='paper' && computer === 'scissors'
					? `PlayerOne: ${player}\n Computer: ${computer}\nComputer wins!`
					: player ==='scissors' && computer === 'rock'
						? `PlayerOne: ${player}\n Computer: ${computer}\nComputer wins!`
						: `PlayerOne: ${player}\n Computer: ${computer}\nPlayerOne wins!`;
	
	return winner;
};

const displayResult = (result) => {
	alert(result);
};

const askToPlayAgain = () => {
	return confirm('Play Again?');
};

const thanksForPlaying = () => {
	alert('Ok, Thanks for playing!');
};

initGame();
