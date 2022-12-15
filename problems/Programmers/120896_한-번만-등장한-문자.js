//  프로그래머스 / 한 번만 등장한 문자 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const map = {};

  for (const str of s) {
    map[str] ? (map[str] = map[str] + 1) : (map[str] = 1);
  }

  return Object.entries(map)
    .filter(value => value[1] === 1)
    .map(value => value[0])
    .sort()
    .join('');
}
