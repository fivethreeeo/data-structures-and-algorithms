//  프로그래머스 / 컨트롤 제트 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  const arr = s.split(' ');
  const result = [];

  arr.forEach(value => {
    if (value === 'Z') {
      result.length > 0 && result.pop();
    } else {
      result.push(+value);
    }
  });

  return result.reduce((a, c) => a + c, 0);
}
