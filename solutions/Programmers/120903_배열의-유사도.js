//  프로그래머스 / 배열의 유사도 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  let count = 0;
  s1.forEach(value1 => s2.includes(value1) && count++);
  return count;
}
