//C - K Swap
//未完成
process.stdin.setEncoding('utf8');

const main = (input) => {
  const n = Number(input.split("\n")[0].split(" ")[0]);
  const k = Number(input.split("\n")[0].split(" ")[1]);
  const list = input.split("\n")[1].split(" ");

  const list_a = Array.from(list);
  let list_sort = list_a.sort((a, b) => a - b);
  console.log(list)
  if (list == list_sort) {
    console.log("Yes")
    return
  }

  let list_b = Array.from(list);
  for (let i = 0; i < n - k - 1; i++) {
    let min = Math.min(...list_b);
    console.log(min);
    let min_index = 0;
    list.forEach((n, x) => {
      if (n == min) {
        min_index = x;
        return min_index

      }
    })
    console.log(min_index)
    let mod = list[i];
    console.log(mod)
    list[i] = min;
    list[min_index] = mod;
    console.log(list);

  }

  console.log(list);
  if (list == list_sort) {
    console.log("Yes")
  } else {
    console.log("No")
  }

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
