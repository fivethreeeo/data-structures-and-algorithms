//  프로그래머스 / 짝수는 싫어요 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, i) => i * 2 + 1);
}
