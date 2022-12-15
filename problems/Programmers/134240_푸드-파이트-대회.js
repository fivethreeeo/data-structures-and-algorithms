/*

프로그래머스 / 푸드 파이트 대회 / 레벨 1
https://school.programmers.co.kr/learn/courses/30/lessons/134240

< 소요 시간 >
8분

*/

function solution(food) {
  const water = '0';

  const leftFood = food
    .slice(1)
    .map((amount, index) => `${index + 1}`.repeat(parseInt(amount / 2)));

  const rightFood = [...leftFood].reverse();

  const order = leftFood.join('') + water + rightFood.join('');

  return order;
}
