function solution(s) {
  return s.filter((word, index) => s.indexOf(word) === index);
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
