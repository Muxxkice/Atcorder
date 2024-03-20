const main = (input) => {
  let line = input.split("\n").slice(1);

  line_map = line.map((i) => i.split(""))

  let map =[];
  line_map.forEach((i,y) => {
  i.forEach((j,x)=> {
  if(j =="o") {
  map.push(y,x);
  }})
  })

  let ans = 0;
  if(map[0] > map[2]) {
  ans +=  Number(map[0]) - Number(map[2]);
  } else {
  ans +=  Number(map[2]) - Number(map[0]);
  }
  if(map[1] > map[3]) {
  ans +=  Number(map[1]) - Number(map[3]);
  } else {
  ans +=  Number(map[3]) - Number(map[1]);
  }

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
