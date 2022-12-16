//  프로그래머스 / 짝수 홀수 개수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const odd = num_list.filter(num => num % 2 === 0).length;

  return [odd, num_list.length - odd];
}
