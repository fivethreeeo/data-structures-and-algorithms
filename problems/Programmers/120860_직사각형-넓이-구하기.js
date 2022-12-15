//  프로그래머스 / 직사각형 넓이 구하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const x = dots.map(dot => dot[0]);
  const y = dots.map(dot => dot[1]);

  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);

  return width * height;
}
