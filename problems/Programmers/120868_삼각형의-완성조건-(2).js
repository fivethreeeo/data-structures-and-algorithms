//  프로그래머스 / 삼각형의 완성조건 (2) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  const longer = Math.max(...sides);
  const shorter = Math.min(...sides);

  return longer - (longer - shorter) + (longer + shorter - (longer + 1));
}
