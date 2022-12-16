//  프로그래머스 / 아이스 아메리카노 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const drink = Math.floor(money / 5500);
  return [drink, money - 5500 * drink];
}
