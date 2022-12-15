//  프로그래머스 / 외계행성의 나이 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  return String(age)
    .split('')
    .map(v => String.fromCharCode(+v + 97))
    .join('');
}
