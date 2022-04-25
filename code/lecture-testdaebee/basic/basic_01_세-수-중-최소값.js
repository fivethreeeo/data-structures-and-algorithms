function solution(a, b, c) {
  // Math.min 사용
  //return Math.min(a, b, c);

  // 비교구문 사용
  let answer;
  a < b ? (answer = a) : (answer = b);
  return c < answer ? c : answer;
}

console.log(solution(6, 5, 11));
