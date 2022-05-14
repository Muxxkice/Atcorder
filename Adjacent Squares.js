//Adjacent Squares
process.stdin.setEncoding('utf8');

const main = (input) => {
	const h = input.split("\n")[0].split(" ")[0];
	const w = input.split("\n")[0].split(" ")[1];
	const r = input.split("\n")[1].split(" ")[0];
	const c = input.split("\n")[1].split(" ")[1];

	if (h == 1 && w == 1) {
		console.log("0");
	} else if (h == 1) {
		if (c == 1 || c == w) {
			console.log("1");
		} else {
			console.log("2");
		}
	} else if (w == 1) {
		if (r == 1 || r == h) {
			console.log("1");
		} else {
			console.log("2");
		}
	} else {
		if ((r == 1 || r == h) && c == 1) {
			console.log("2");
		} else if ((r == 1 || r == h) && c == w) {
			console.log("2");
		} else if ((r == 1 || r == h) && (c > 1 && w > c)) {
			console.log("3");
		} else if ((1 < r && r < h) && (c == 1 || c == w)) {
			console.log("3");
		} else {
			console.log("4");
		}
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
