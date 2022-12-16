//  프로그래머스 / 가까운 수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  const min = Math.min(...array.map(number => Math.abs(n - number)));

  return array
    .filter(number => min === Math.abs(n - number))
    .sort((a, b) => a - b)[0];
}
