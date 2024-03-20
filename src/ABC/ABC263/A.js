// A - Full House
const main = (input) => {
	const main = (input) => {
		const cards = input.split("\n")[0].split(" ")

		Array.prototype.countCertainElements = function (value) {
			return this.filter(arrayElement => arrayElement == value).length
		}

		let firstCard = false;
		let secondCard = false;

		for (let i = 0; i < 5; i++) {
			const n = cards.countCertainElements(cards[i])
			if (n == 3) {
				firstCard = true;
			} else if (n == 2) {
				secondCard = true
			}
		}

		if (firstCard == true && secondCard == true) {
			console.log("Yes")
		} else {
			console.log("No")
		}
	}

	main(require("fs").readFileSync("/dev/stdin", "utf8"));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
