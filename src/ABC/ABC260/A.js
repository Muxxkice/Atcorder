const main = (input) => {
	const s = input.split("\n")[0].split("");

	let Unique = true;
	for (let i = 0; i < s.length; i++) {
		//console.log(s[i])
		let n = 0;
		for (let j = 0; j < s.length; j++) {
			if (s[i] === s[j]) {
				n++;
			}
		}
		if (n == 1) {
			console.log(s[i])
			Unique = false;
			break;
		}
	}
	if (Unique) {
		console.log("-1")
	}

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

