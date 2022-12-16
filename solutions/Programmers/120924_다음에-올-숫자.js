//  프로그래머스 / 다음에 올 숫자 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  const [first, second, third] = common;

  if (third - second === second - first) {
    return common[common.length - 1] + (second - first);
  } else {
    return common[common.length - 1] * (second / first);
  }
}
