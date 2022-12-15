//  프로그래머스 / 중앙값 구하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  const mid = Math.ceil(array.length / 2) - 1;
  return array.sort((a, b) => a - b)[mid];
}
