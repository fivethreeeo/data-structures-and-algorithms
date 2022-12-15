//  프로그래머스 / 소인수분해 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const result = [];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) result.push(i);
  }

  return result;
}

const isPrime = number => {
  if (number === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }

  return true;
};
