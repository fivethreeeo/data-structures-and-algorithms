//  프로그래머스 / 팩토리얼 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  for (let i = 1; i <= 10; i++) {
    if (n === factorial(i)) return i;
    if (n < factorial(i)) return i - 1;
  }
}

const factorial = number => {
  if (number === 0) return 1;
  return number * factorial(number - 1);
};
