//  프로그래머스 / 세균 증식 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n, t) {
  for (let i = 0; i < t; i++) n *= 2;
  return n;
}
