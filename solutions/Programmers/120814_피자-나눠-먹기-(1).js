//  프로그래머스 / 피자 나눠 먹기 (1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  return n % 7 === 0 ? n / 7 : Math.ceil(n / 7);
}
