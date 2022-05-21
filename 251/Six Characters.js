//Six Characters
function main(input) {
	const text = input.split("\n")[0];
	let ans = text;
	let flg = true;

	while (flg) {
		ans = ans.concat(text)
		if (ans.length === 6) {
			flg = false;
			console.log(ans)
		}
	}
}










main(require("fs").readFileSync("/dev/stdin", "utf8"));
