//  프로그래머스 / 평행 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  let result = 0;

  for (let i = 1; i < dots.length; i++) {
    const dotsA = [dots[0], dots[i]];
    const dotsB = dots.filter(dot => dot !== dots[0] && dot !== dots[i]);
    const lineA = getInclination(...dotsA);
    const lineB = getInclination(...dotsB);
    lineA === lineB && (result = 1);
  }

  return result;
}

function getInclination([x1, y1], [x2, y2]) {
  return (x2 - x1) / (y2 - y1);
}
