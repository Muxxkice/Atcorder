const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);
	const a = Number(input.split("\n")[0].split(" ")[1]);
	const b = Number(input.split("\n")[0].split(" ")[2]);
	let N = 0;
	let ans = 0;
	let num = 0;

	for (let i = 0; i <= n; i++) {
		if (i > 9) {
			N = String(i).split("")

			N.forEach((n) => {
				num = Number(n) + num;
			})
		} else {
			num = i
		}

		if (num >= a && num <= b) {
			ans = ans + i;
		}
		num = 0;
	}
	console.log(ans)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
