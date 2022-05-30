//未完成
const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);
	let line = input.split("\n").slice(1);

	let list = [];
	let max = 0;
	let min = 0;
	line.forEach((i) => {
		const ele = i.split(" ");
		console.log(ele)
		if (ele.length == 2 && ele[0] == 1) {
			list.push(ele[1])
			//console.log(list)
		} else if (ele.length == 2 && ele[0] == 2) {
			let x = ele[1];
			let count = list.match(x)
			let rm = min(x, count);
			let n_rm = rm;
			for (let i = 0; i < list.length; i++) {
				if (list[i] == x && n_rm != 0) {
					list.splice(x);
					n_rm -= 1;
				}
				//console.log(list)
			}
		} else {
			console.log(list)
			max = max(list)
			min = min(list)
			let num = max - min;
			console.log(max)
		}

	})


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
