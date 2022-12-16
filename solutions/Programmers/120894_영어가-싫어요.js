//  프로그래머스 / 영어가 싫어요 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const set = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let temp = '';
  let result = '';
  for (const str of numbers) {
    temp += str;

    if (set.indexOf(temp) !== -1) {
      result += set.indexOf(temp);
      temp = '';
    }
  }

  return Number(result);
}
