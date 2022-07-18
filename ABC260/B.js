const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);
	const x = Number(input.split("\n")[0].split(" ")[1]);
	const y = Number(input.split("\n")[0].split(" ")[2]);
	const z = Number(input.split("\n")[0].split(" ")[3]);
	const a_line = input.split("\n")[1].split(" ");
	const b_line = input.split("\n")[2].split(" ");

	const Math_map = [];
	const passStudent = [];
	for (let i = 0; i < n; i++) {
		Math_map.push({
			index: i + 1,
			Math: a_line[i],
			English: b_line[i],
			sam: Number(a_line[i]) + Number(b_line[i])
		})

	}
	//console.log(Math_map)
	Math_map.sort((a, b) => b.Math - a.Math)

	//console.log(Math_map)


	for (let i = 0; i < x; i++) {
		passStudent.push(Math_map[i].index)
		Math_map.shift();

	}

	Math_map.sort((a, b) => b.English - a.English)

	for (let i = 0; i < y; i++) {
		passStudent.push(Math_map[i].index)
		Math_map.shift();

	}

	const a = Math_map.sort((a, b) => b.sam - a.sam)


	for (let i = 0; i < z; i++) {
		//console.log(Math_map[i])
		passStudent.push(a[i].index)


	}

	//console.log(passStudent)
	passStudent.sort((a, b) => a - b)
	passStudent.forEach((student) => console.log(student))


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

