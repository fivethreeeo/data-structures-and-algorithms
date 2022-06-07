function solution(s) {
  let answer = [];
  for (value of s) !answer.find((word) => word === value) && answer.push(value);
  return answer.join("");
}
console.log(solution("ksekkset"));
