//B - Light It Up
const main = (input) => {
	const n = Number(input.split('\n')[0].split(" ")[0]);
	const k = Number(input.split('\n')[0].split(" ")[1]);
	const a = input.split('\n')[1].split(" ");
	const line = input.split('\n').slice(2);
	const line_map = line.map((n) => n.split(" "))


	let ans = 0;
	for (let i = 0; i < k; i++) {
		const x = a[i] - 1;
		//console.log(line_map[x][0],line_map[x][1])
		let line_a = 0;
		let line_b = 0;
		let p = 0;
		let q = 0;
		for (let j = 0; j < n; j++) {
			let min = 0;
			if (line_map[x][0] > line_map[j][0]) {
				p = line_map[x][0] - line_map[j][0];
			} else {
				p = line_map[j][0] - line_map[x][0];
			}
			if (line_map[x][1] > line_map[j][1]) {
				q = line_map[x][1] - line_map[j][1];
			} else {
				q = line_map[j][1] - line_map[x][1];
			}
			let h = 0;
			if (q == 0) {
				h = p
			} else if (p == 0) {
				h = q
			} else {
				h = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2))
			}
			if (j = 0) {
				min = h
			} else {
				if (min > h) {
					min = h;
				}
			}
			if (min > ans) {
				ans = min;
			}


		}
	}
	console.log(ans)

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));



