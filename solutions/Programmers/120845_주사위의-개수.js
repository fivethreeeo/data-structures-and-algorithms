//  프로그래머스 / 주사위의 개수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  const [x, y, z] = box;

  return parseInt(x / n) * parseInt(y / n) * parseInt(z / n);
}
