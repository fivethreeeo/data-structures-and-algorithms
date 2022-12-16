//  프로그래머스 / 순서쌍의 개수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  const divisors = [1];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }

  return divisors.length;
}
