/* const myVariable = 'Mathematics';
console.log(`myVariable.length = ${myVariable.length}`);
const myNumber = 42;
console.log(`myNumber = ${myNumber}`);
const myFloat = 42.01;
console.log(`myFloat = ${myFloat}`);

let Number;
console.log(Number);
console.log(isNaN("John")); 
// it will print true because string is not assignable to parameter of type number
console.log(`Math.PI ==> ${Math.PI}`);
console.log(`Math.round(3.6) ==> ${Math.round(3.6)}`);

// write a code that will return a random letter from your name
const anyName = 'Jonathan';
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));

let name = prompt('Please enter your name.');
if (name ) {
	console.log(name.length);
	console.log(name.trim().length);
	console.log(name.trim());
} else {
	console.log("you didn't enter your name.");
}


// your first interactive game(Rock, Paper, Scissors)
// ROCK PAPER SCISSORS GAME 
let playGame = confirm("Shall we play rock paper or scissors?");
if (playGame) {
	// we start playing the game
	let PlayerChoice = prompt("please enter rock, paper or scissors");
	if (PlayerChoice) {
		let playerOne = PlayerChoice.trim().toLowerCase();
		if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
			let computerChoice = Math.floor(Math.random() * 3 + 1);
			let computer = computerChoice === 1 
				? "rock"
				: computerChoice === 2
				? "paper"
				: "scissors";

			let result = player === computer
				? "Tie game!"
				: playerOne === "rock" && computer === "paper"
				? `playerOne: ${playerOne}\nComputer: ${computer}
				\nComputer wins!`
				: playerOne === "paper" && computer === "scissors"
				?	`playerOne: ${playerOne}\nComputer: ${computer}
				\nComputer wins!`
				: playerOne === "scissors" && computer === "rock"
				? `playerOne: ${playerOne}\nComputer: ${computer}
				\nComputer wins!`
				: `playerOne: ${playerOne}\nComputer: ${computer}
				\nplayerOne wins!`;
			alert(result);
			let playAgain = confirm("Play Again?");
			playAgain ? location.reload() : alert("Ok, thanks for playing");
		} else {
			alert("you did ont enter rock, paper or scissors.")
		}
	} else {
		alert("I Guess ypu chnaged your mind, may be next time.");
	}
} else {
	alert("Ok, may be next time.");
} 

// LOOps
// while loop
let myNumber = 0;
while (myNumber < 10) {
	myNumber++;
	console.log(myNumber);
}
// do .. while loops
let myAge = 31;
do {
	myAge++;
	console.log(myAge);
} while (myAge < 40);
// dont create infinite loops or endless loops
do {
	console.log(myAge);
} while (myAge < 31);

// for loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

let myName = "Karim";
let counter = 0;
let myLetter;
while(counter <= 4) {
	myLetter = myName[counter];
	console.log(myLetter);
	if (counter === 1) {
		counter += 2;
		continue;
	}
	if (myLetter === 'r') break;
	counter++;
}
console.log(counter); */

/* FUNCTIONS */
function sum(num1, num2) {
	if (num2 === undefined) {
		return num1 + num1;
	}
	return num1 + num2;	
};
console.log(sum(2, 6));
console.log(sum(6));

function getUserNameFromEmail(email) {
	return email.slice(0, email.indexOf("@")); 
}
console.log(getUserNameFromEmail("playerOne@somerandomEmail.com"));






