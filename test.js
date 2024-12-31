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


// Objects
// key-values pair in curly braces

const myObject = {name: 'hatem karim'};
console.log(myObject);

const anotherObject = {
	alive: true,
	answer: 42,
	hobbies: ['eat', 'sleep', 'code'],
	beverages: {
		morning: 'Coffee',
		afternoon: 'Ice tea',
	},
	action: function() {
		return `time for ${this.beverages.morning}, ${this.beverages.afternoon}`;
	}
}

console.log(anotherObject);
console.log(`anotherObject.hobbies => ${anotherObject.hobbies}`);
console.log(anotherObject.hobbies);
console.log(anotherObject.hobbies[1]);
console.log(anotherObject['alive']);
console.log(anotherObject['beverages']);
console.log(`anotherObject['beverages'].afternoon.toUpperCase() => ${anotherObject['beverages'].afternoon.toUpperCase()}`);
console.log(`anotherObject.action() => ${anotherObject['action']}`);
console.log(anotherObject.action());


const vehicle = {
	wheels: 4,
	engine: function () {
		return "Vroommmmmm!";
	}
};

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
	return "Whhooosshhhh!";
};
console.log(car.engine());
console.log(`car.wheels is ${car.wheels} wheels`);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(`tesla.engine => ${tesla.engine}`);

tesla.engine = function() {
	return "Shhhhhhh!";
};
console.log(`tesla.engine => ${tesla.engine}`);

const band = {
	vocals: "Robert Plant",
	guitar: "Jimmy Page",
	bass: "John Paul Jones",
	drums: "John Bonham"
};

console.log(`band.hasOwnProperty("drums") => ${band.hasOwnProperty("drums")}`);
delete band.drums;
console.log(`band.hasOwnProperty("drums") => ${band.hasOwnProperty("drums")}`);
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
	console.log(`On ${job}, we have ${band[job]}.`);
};

// Destruction in Object
const { guitar: myvariable, bass: myBass } = band;
console.log(myvariable);
console.log(myBass);

function sings({ vocals}) {
	return `${vocals} sings`;
};
console.log(sings(band));

// Factory function
function pizzafactory(pizzaSize) {
	const crush = "original";
	const size = pizzaSize;
	return {
		bake: () => console.log(`Baking a ${size} ${crush} pizza`),
	}
}
const ourPizza = pizzafactory("small");
ourPizza.bake();


// Javascript Classes
class Pizza {
	constructor(pizzaSize) {
		this.size = pizzaSize;
		this.crust = "original";
		this.toppings = [];
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	getToppings() {
		return this.toppings;
	}
	setToppings(topping) {
		this.toppings.push(topping);
	}
}

const myPizza = new Pizza();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());


// Polymorphism in classes
class SpecialtyPizza extends Pizza {
	constructor(pizzaSize) {
		super(pizzaSize);
		this.type = "work";
	}
	slice() {
		console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
	}
}

const MySpecialty = new SpecialtyPizza("medium");
MySpecialty.slice(); 


