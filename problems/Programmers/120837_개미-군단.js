//  프로그래머스 / 개미 군단 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  const a = parseInt(hp / 5);
  const aRest = hp % 5;

  if (aRest === 0) return a;

  const b = parseInt(aRest / 3);
  const bRest = aRest % 3;

  if (bRest === 0) return a + b;

  return a + b + bRest;
}
