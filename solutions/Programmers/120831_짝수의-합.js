//  프로그래머스 / 짝수의 합 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  let sum = 0;
  Array.from({ length: parseInt(n / 2) }, (_, i) => (sum += (i + 1) * 2));
  return sum;
}
