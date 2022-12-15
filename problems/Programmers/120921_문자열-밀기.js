//  프로그래머스 / 문자열 밀기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  if (A === B) return 0;

  const _A = A.split('');

  for (let i = 1; i <= _A.length; i++) {
    _A.unshift(_A.pop());
    if (_A.join('') === B) return i;
  }

  return -1;
}
