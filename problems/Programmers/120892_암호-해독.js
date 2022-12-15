//  프로그래머스 / 암호 해독 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  let result = '';
  let count = 1;

  for (const str of cipher) {
    count % code === 0 && (result += str);
    count++;
  }

  return result;
}
