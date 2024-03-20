const main = (input) => {
	const h = Number(input.split("\n")[0].split(" ")[0]);
	const hit = Number(input.split("\n")[0].split(" ")[1]);

	if (h % hit == 0) {
		console.log(h / hit)
	} else {
		console.log(Math.trunc(h / hit) + 1)
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
