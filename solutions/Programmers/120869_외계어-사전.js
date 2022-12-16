//  프로그래머스 / 외계어 사전 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  return dic.filter(
    string => string.split('').sort().join('') === spell.sort().join('')
  ).length > 0
    ? 1
    : 2;
}
