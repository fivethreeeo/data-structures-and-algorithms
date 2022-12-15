//  프로그래머스 / 점의 위치 구하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const [x, y] = dot;
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}
