//  프로그래머스 / 가장 큰 수 찾기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  const max = Math.max(...array);
  const idx = array.indexOf(max);

  return [max, idx];
}
