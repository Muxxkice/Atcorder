const main = (input) => {
	const n = Number(input.split("\n")[0]);
	const persons = input.split("\n")[1].split(" ")

	let P = persons[0];
	let ans = 0;
	for (let i = 1; i > persons.length; i++) {
		if (persons[i] > P) {
			P = persons[i];
			ans++;
		}
	}
	console.log(ans+1)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
