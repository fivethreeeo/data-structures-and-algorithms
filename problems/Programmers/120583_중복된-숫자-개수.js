//  프로그래머스 / 중복된 숫자 개수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  return array.filter(value => value === n).length;
}
