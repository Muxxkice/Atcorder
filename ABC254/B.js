//B - Practical Computing
process.stdin.setEncoding('utf8');

const main = (input) => {
	const n = input.split("\n")[0];

	let list = [];
	for (let i = 0; i < n; i++) {
		let num = [];
		for (let j = 0; j <= i; j++) {
			if (j == 0 || j == i) {
				num.push(1);
			} else {
				let a = Number(list[j - 1]) + Number(list[j]);
				num.push(a);
			}
		}
		console.log(num.join(" "))
		list = num;
	}



}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
