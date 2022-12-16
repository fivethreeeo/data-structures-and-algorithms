//  프로그래머스 / 특이한 정렬 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  return numlist
    .sort((a, b) => b - a)
    .map(num => [num, Math.abs(n - num)])
    .sort((a, b) => a[1] - b[1])
    .map(numArr => numArr[0]);
}
