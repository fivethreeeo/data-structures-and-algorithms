//  프로그래머스 / 자릿수 더하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  return String(n)
    .split('')
    .reduce((a, c) => a + Number(c), 0);
}
