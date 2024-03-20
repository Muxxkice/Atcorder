const main = (input) => {
	const age = Number(input.split(" ")[0]);
	const m = Number(input.split(" ")[1]);
	const max_age = Number(input.split(" ")[2]);
	let height = Number(input.split(" ")[3]);
	const d = Number(input.split(" ")[4]);

	if (max_age > m) {
		height = height - (max_age - m) * d
	}
	console.log(height);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
