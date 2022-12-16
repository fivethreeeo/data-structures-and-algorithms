//  프로그래머스 / 옷가게 할인 받기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  let discountRate = 1;
  if (price >= 100000) discountRate = 0.95;
  if (price >= 300000) discountRate = 0.9;
  if (price >= 500000) discountRate = 0.8;

  return parseInt(price * discountRate);
}
