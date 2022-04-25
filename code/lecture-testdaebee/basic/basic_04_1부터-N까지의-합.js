function solution(n) {
  // 공식 활용 방법
  // const start = 1;
  // const end = n;
  // const length = n;
  // return (start + end) * (length / 2);

  // 반복문 활용 방법
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(10));
console.log(solution(6));
console.log(solution(1));
