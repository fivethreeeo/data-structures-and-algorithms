//  프로그래머스 / 공 던지기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  const idx = (k * 2) % (numbers.length - 1);
  return idx;
}
