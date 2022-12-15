//  프로그래머스 / 양꼬치 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const ram = n * 12000;
  const drink = k * 2000;
  const discount = parseInt(n / 10) * 2000;

  return ram + drink - discount;
}
