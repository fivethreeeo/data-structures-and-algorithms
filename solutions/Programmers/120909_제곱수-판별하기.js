//  프로그래머스 / 제곱수 판별하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n) {
  return Math.ceil(Math.sqrt(n)) === Math.sqrt(n) ? 1 : 2;
}
