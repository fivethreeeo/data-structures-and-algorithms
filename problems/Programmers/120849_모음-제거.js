//  프로그래머스 / 모음 제거 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  return my_string
    .split('')
    .filter(str => (['a', 'e', 'i', 'o', 'u'].includes(str) ? '' : str))
    .join('');
}
