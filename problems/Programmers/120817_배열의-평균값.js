//  프로그래머스 / 배열의 평균값 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((a, c) => a + c) / numbers.length;
}
