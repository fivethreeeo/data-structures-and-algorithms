//  프로그래머스 / 최댓값 만들기 (2) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);

  return Math.max(
    sorted[0] * sorted[1],
    sorted[sorted.length - 1] * sorted[sorted.length - 2]
  );
}
