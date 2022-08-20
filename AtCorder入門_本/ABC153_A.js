// A - Serval vs Monster
process.stdin.resume();
process.stdin.setEncoding('utf8');

const main = (input) => {
	let h = Number(input.split("\n")[0].split(" ")[0]);
	const hit = Number(input.split("\n")[0].split(" ")[1]);

	let hp = 0;
	let count = 0;
	if (h <= hit) {
		console.log(1);
		return;
	}

	while (h >= hit) {
		hp = h - hit;
		h = hp;
		count++;

		if (h == 0) {
			console.log(count)
		} else if (h < hit) {
			console.log(count + 1)
		}
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
