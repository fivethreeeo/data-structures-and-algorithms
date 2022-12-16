//  프로그래머스 / 삼각형의 완성조건 (1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  const [a, b, longest] = sides.sort((a, b) => a - b);
  return a + b > longest ? 1 : 2;
}
