//  프로그래머스 / 머쓱이보다 키 큰 사람 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  return array.filter(v => v > height).length;
}
