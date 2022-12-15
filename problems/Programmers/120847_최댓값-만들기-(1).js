//  프로그래머스 / 최댓값 만들기(1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const [first, second] = numbers.sort((a, b) => b - a);
  return first * second;
}
