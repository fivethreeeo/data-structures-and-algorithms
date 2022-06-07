function solution(s, t) {
  // 1. split + filter
  //return s.split("").filter((word) => word === t).length;
  // 2. split
  return s.split(t).length - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
