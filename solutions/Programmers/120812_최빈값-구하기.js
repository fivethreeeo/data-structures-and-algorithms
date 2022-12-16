//  프로그래머스 / 최빈값 구하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const map = {};

  array.forEach(num => {
    map[num] === undefined ? (map[num] = 1) : map[num]++;
  });

  const max = Math.max(...Object.values(map));

  const filtered = Object.keys(map).filter(key => map[key] === max);

  return filtered.length > 1 ? -1 : +filtered[0];
}
