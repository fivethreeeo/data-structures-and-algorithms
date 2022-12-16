//  프로그래머스 / 진료순서 정하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  return emergency
    .map((value, index) => [value, index + 1])
    .sort((a, b) => b[0] - a[0])
    .map((value, index) => [...value, index + 1])
    .sort((a, b) => a[1] - b[1])
    .map(value => value[2]);
}
