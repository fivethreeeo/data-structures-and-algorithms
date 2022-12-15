//  프로그래머스 / 유한소수 판별하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  if (a % b === 0) return 1;

  const _gcd = gcd(a, b);
  const _b = b / _gcd;

  const divisors = [];

  for (let i = 2; i <= _b; i++) {
    if (_b % i === 0 && isPrime(i)) divisors.push(i);
  }

  return divisors.filter(divisor => divisor !== 2 && divisor !== 5).length
    ? 2
    : 1;
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const isPrime = number => {
  if (number === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }

  return true;
};
