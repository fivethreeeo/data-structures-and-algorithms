//  프로그래머스 / 2차원으로 만들기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  const result = [];

  while (true) {
    if (num_list.length === 0) break;
    result.push(num_list.splice(0, n));
  }

  return result;
}
