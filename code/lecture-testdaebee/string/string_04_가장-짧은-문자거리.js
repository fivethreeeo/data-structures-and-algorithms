function solution(s, t) {
  let answer = [];

  let p = Number.MAX_SAFE_INTEGER;
  for (let word of s) {
    word === t ? (p = 0) : p++;
    answer.push(p);
  }

  p = Number.MAX_SAFE_INTEGER;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === t ? (p = 0) : p++;
    p < answer[i] && (answer[i] = p);
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
