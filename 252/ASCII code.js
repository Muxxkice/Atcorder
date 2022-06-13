const main = (input) => {
  const n = Number(input.split("\n")[0]);
  console.log(String.fromCharCode(n));


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
