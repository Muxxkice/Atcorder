const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);//1個ずつ
	const m = Number(input.split("\n")[0].split(" ")[1]);//3個ずつ
	let t = Number(input.split("\n")[0].split(" ")[2]);
	const room = input.split("\n")[1].split(" ")
	const bonus = input.split("\n").slice(2)

	console.log(bonus.length)

	let flag = true
	let j = 0;
	for (let i = 0; i < n - 1; i++) {
		console.log(`i:${i}`)
		t = t - room[i]
		console.log(t)

		if (i + 2 == (bonus[j]).split(" ")[0]) {
			t = t + Number(bonus[j].split(" ")[1]);
			console.log(t)
			if (j > bonus.length) {
				j++
			}
		} else if (t < 0) {
			flag = false
			break
		}
	}

	if (flag) {
		console.log("Yes")
	} else {
		console.log("No")
	}




}
main(require("fs").readFileSync("/dev/stdin", "utf8"));


