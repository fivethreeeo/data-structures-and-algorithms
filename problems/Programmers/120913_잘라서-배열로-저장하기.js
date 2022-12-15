//  프로그래머스 / 잘라서 배열로 저장하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  const result = [];
  const stringArr = my_str.split('');

  while (stringArr.length !== 0) {
    result.push(stringArr.splice(0, n).join(''));
  }

  return result;
}
