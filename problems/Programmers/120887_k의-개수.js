//  프로그래머스 / A로 B 만들기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  return Array.from({ length: j - i + 1 }, (_, idx) => idx + i)
    .join('')
    .split('')
    .filter(v => v == k).length;
}
