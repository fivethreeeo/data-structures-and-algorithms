//  프로그래머스 / 숫자 찾기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  return String(num).indexOf(k) > -1 ? String(num).indexOf(k) + 1 : -1;
}
