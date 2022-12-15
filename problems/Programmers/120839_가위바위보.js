//  프로그래머스 / 가위바위보 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  return rsp
    .split('')
    .map(v => {
      if (v == 2) return 0;
      if (v == 0) return 5;
      if (v == 5) return 2;
    })
    .join('');
}
