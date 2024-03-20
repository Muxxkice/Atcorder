// A - We Love Golf
const main = (input) => {
	const k = Number(input.split("\n")[0]);
	const a = Number(input.split("\n")[1].split(" ")[0]);
	const b = Number(input.split("\n")[1].split(" ")[1]);

	let flg = false;
	for (let i = a; i <= b; i++) {
		if (i % k == 0) {
			flg = true;
			break;
		}
	}
	if (flg) {
		console.log("OK")
	} else {
		console.log("NG");
	}
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
