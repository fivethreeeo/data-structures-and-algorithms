//  프로그래머스 / 겹치는 선분의 길이 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const map = {};

  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      map[i] ? map[i]++ : (map[i] = 1);
    }
  });

  let result = 0;

  for (const dot in map) {
    if (map[dot] > 1) result++;
  }

  return result;
}
