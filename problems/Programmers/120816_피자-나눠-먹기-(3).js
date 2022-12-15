//  프로그래머스 / 피자 나눠 먹기 (3) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  return n % slice === 0 ? n / slice : Math.ceil(n / slice);
}
