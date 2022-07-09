const main = (input) => {
	const x = Number(input.split(" ")[0]);
	const y = Number(input.split(" ")[1]);
	const d = Number(input.split(" ")[2]);

	cos_x = Math.cos(d * (Math.PI / 180))
	sin_x = Math.sin(d * (Math.PI / 180))

	const X = cos_x * x + (-sin_x) * y
	const Y = sin_x * x + cos_x * y

	console.log(X + " " + Y)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
