//  프로그래머스 / 피자 나눠 먹기 (2) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  return lcm(6, n) / 6;
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
