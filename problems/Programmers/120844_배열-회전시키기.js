//  프로그래머스 / 배열 회전시키기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}
