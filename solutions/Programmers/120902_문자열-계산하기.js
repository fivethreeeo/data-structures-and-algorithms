//  프로그래머스 / 가장 큰 수 찾기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const splited = my_string.split(' ');

  const number = [+splited[0]];

  splited.forEach((v, i) => {
    if (v === '-') {
      number.push(-splited[i + 1]);
    }
    if (v === '+') {
      number.push(+splited[i + 1]);
    }
  });

  return number.reduce((a, c) => a + c);
}
