//  프로그래머스 / 369게임 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  let count = 0;
  for (const num of String(order)) {
    ['3', '6', '9'].includes(num) && count++;
  }
  return count;
}
