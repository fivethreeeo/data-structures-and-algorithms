//  프로그래머스 / 숨어있는 숫자의 덧셈 (1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  return my_string
    .split('')
    .filter(str => str * 1)
    .reduce((a, c) => a + Number(c), 0);
}
