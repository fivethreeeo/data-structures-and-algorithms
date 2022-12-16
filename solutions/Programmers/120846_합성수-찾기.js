//  프로그래머스 / 합성수 찾기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  if (n < 4) return 0;

  return Array.from({ length: n - 3 }, (_, i) => i + 4).filter(
    num => !isPrime(num)
  ).length;
}

const isPrime = num => {
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
