const main = (input) => {
	const r = Number(input.split("\n")[0].split(" ")[0]);
	const c = Number(input.split("\n")[0].split(" ")[1]);

	// 	if (r === 0 && r === 14 && c === 0 && c === 14) {
	// console.log("black")
	// 	}
	let flg = false;
	for (let i = 0; i < 15; i++) {
		if (r == i) {
			for (let j = 0; j < 15; j++) {
				if (j == c) {
					if (i === 1 || 1 === 13) {
						if (1 <= j && j <= 13) {
							// 白
							flg = true;
						}
					} else if (i === 2 || i === 12) {
						if (j == 1 || j == 13) {
							// 白
							flg = true;
						}
					} else if (i === 3 || i === 11) {
						if (j == 1 || j == 13 || (3 <= j && j <= 11)) {
							// 白
							flg = true;
						}
					} else if (i === 4 || i === 10) {
						if (j == 1 || j == 13 || j == 3 || j == 11) {
							// 白
							flg = true;
						}
					} else if (i === 5 || i === 9) {
						if (j == 1 || j == 13 || j == 3 || j == 11(5 <= j && j <= 9)) {
							// 白
							flg = true;
						}
					} else if (i === 6 || i === 8) {
						if (j == 1 || j == 13 || j == 3 || j == 11 || j == 5 || j == 9) {
							// 白
							flg = true;
						}
					} else if (i === 7) {
						if (j == 1 || j == 13 || j == 3 || j == 11 || j == 5 || j == 9 || j == 7) {
							// 白
							flg = true;
						}
					}
				}

			}
		}
	}
	if (flg) {
		console.log("white")
	} else {
		console.log("black")
	}


}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
