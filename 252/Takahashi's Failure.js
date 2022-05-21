const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);
	const k = Number(input.split("\n")[0].split(" ")[1]);
	const foods = input.split("\n")[1].split(" ");
	const unlike = input.split("\n")[2].split(" ");

	let best = 0;
	foods.forEach((n) => {
		if (Number(n) > best) {
			best = n;
		}
	});

	let flg = false;

	foods.forEach((n, x) => {
		unlike.forEach((i) => {
			if (Number(n) == best && Number(i) == x + 1) {
				flg = true;
			}
		})
	})

	if (flg) {
		console.log("Yes");
	} else {
		console.log("No");
	}


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
