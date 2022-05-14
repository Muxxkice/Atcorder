cprocess.stdin.setEncoding('utf8');

const main = (input) => {
	const n = Number(input.split(" ")[0]);
	const a = Number(input.split(" ")[1]); //たて
	const b = Number(input.split(" ")[2]); //よこ

	const printEvenline = () => {
		for (let p = 0; p < a; p++) {
			for (let j = 0; j < n; j++) {
				if (j % 2 == 0) {
					for (i = 0; i < b; i++) {
						process.stdout.write(".");
					};
				} else {
					for (i = 0; i < b; i++) {
						process.stdout.write("#");
					};
				}
			}
			console.log();
		}
	}

	const printOddline = () => {
		for (let p = 0; p < a; p++) {
			for (let j = 0; j < n; j++) {
				if (j % 2 == 0) {
					for (i = 0; i < b; i++) {
						process.stdout.write("#");
					};
				} else {
					for (i = 0; i < b; i++) {
						process.stdout.write(".");
					};
				}
			}
			console.log();
		}
	}

	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
			printEvenline();
		} else {
			printOddline();
		}
	}


}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));


