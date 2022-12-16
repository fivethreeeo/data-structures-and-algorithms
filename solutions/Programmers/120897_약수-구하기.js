//  프로그래머스 / 약수 구하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    num => n % num === 0
  );
}
