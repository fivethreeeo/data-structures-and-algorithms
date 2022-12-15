//  프로그래머스 / 문자열 정렬하기 (1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .split('')
    .filter(str => str * 1 >= 0)
    .map(str => str * 1)
    .sort((a, b) => a - b);
}
