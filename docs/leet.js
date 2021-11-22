const leetDict = {
	"a": "4",
	"e": "3",
	"i": "1",
	"o": "0",
	"s": "5"
};

const humanDict = {
	"4": "a",
	"3": "e",
	"1": "i",
	"0": "o",
	"5": "s"
};

window.addEventListener('DOMContentLoaded', (event) => {
	let leet = document.getElementById("leet");
	let human = document.getElementById("human");
	leet.addEventListener("input", () => {
		let leetText = leet.value;
		let newText = leet2human(leetText);
		human.value = newText;
		
	})

	human.addEventListener("input", () => {
		let humanText = human.value;
		let newText = human2leet(humanText);
		leet.value = newText;
	})
});

let human2leet = (humanText) => {
	let arr = humanText.split(" ");
	let result = "";
	for (let word of arr) {
		if (!/^\d+$/.test(word)) {
			word = changeH2L(word);
		}
		result += word + " ";
	}
	return result;
}

let changeH2L = (word) => {
	let result = "";
	for (let c of word) {
		let temp = leetDict[c.toLowerCase()];
		if (temp) {
			result += temp;
		} else {
			result += c;
		}
	}
	return result;
}

let leet2human = (leetText) => {
	let arr = leetText.split(" ");
	let result = "";
	for (let word of arr) {
		if (!/^\d+$/.test(word)) {
			word = changeL2H(word);
		}
		result += word + " ";
	}
	return result;
}

let changeL2H = (word) => {
	let result = "";
	for (let c of word) {
		let temp = humanDict[c.toLowerCase()];
		if (temp) {
			result += temp;
		} else {
			result += c;
		}
	}
	return result;
}

