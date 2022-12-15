//  프로그래머스 / 분수의 덧셈 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
  const denominator = num1 * num2; // 분모
  const numerator = denum1 * num2 + denum2 * num1; // 분자
  const min = gcd(denominator, numerator); // 최대공약수

  return [numerator / min, denominator / min];
}

let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
