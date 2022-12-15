//  프로그래머스 / 숨어있는 숫자의 덧셈 (2) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  let temp = '';
  const numbers = [];

  for (const str of my_string) {
    if (isNaN(Number(str))) {
      numbers.push(temp);
      temp = '';
    } else {
      temp += str;
    }
  }

  numbers.push(temp);

  return numbers.reduce((a, c) => a + Number(c), 0);
}
