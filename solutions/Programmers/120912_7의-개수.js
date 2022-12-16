//  프로그래머스 / 7의 개수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  return array
    .join('')
    .split('')
    .filter(v => v == 7).length;
}
