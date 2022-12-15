//  프로그래머스 / 중복된 문자 제거 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  const result = [];

  for (const str of my_string) {
    result.includes(str) || result.push(str);
  }

  return result.join('');
}
