//  프로그래머스 / 연속된 수의 합 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  let numbers = Array.from({ length: num }, (_, i) => i);

  while (total !== sum(numbers)) {
    numbers = numbers.map(n => (total > sum(numbers) ? n + 1 : n - 1));
  }

  return numbers;
}

const sum = numbers => numbers.reduce((a, c) => a + c);
