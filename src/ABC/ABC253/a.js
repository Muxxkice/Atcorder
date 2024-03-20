const main = (input) => {
  const b = input.split("\n")[0].split(" ")[1];
  let num = input.split("\n")[0].split(" ")
  num.sort((a, b) => a - b);

  if (num[1] === b) {
    console.log("Yes")
  } else {
    console.log("No")
  }

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
