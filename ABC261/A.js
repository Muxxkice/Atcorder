// A - Intersection
const main = (input) => {
	const L1 = Number(input.split("\n")[0].split(" ")[0]);
	const R1 = Number(input.split("\n")[0].split(" ")[1]);
	const L2 = Number(input.split("\n")[0].split(" ")[2]);
	const R2 = Number(input.split("\n")[0].split(" ")[3]);

	let ans = 0;
	if (L2 < R1) {
		if (L1 <= L2) {
			console.log("含まれる")
			ans = R1 - L1;
		}
		else if (L1 < L2) {
			ans = R1 - L2;
		} else if (L1 < R2) {
			ans = R2 - L1
		}
	}




	console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
