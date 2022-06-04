//A - Last Two Digits
process.stdin.setEncoding('utf8');

const main = (input) => {
	const n = input.split("\n")[0].split("");

	console.log(n[n.length - 2] + n[n.length - 1])
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
