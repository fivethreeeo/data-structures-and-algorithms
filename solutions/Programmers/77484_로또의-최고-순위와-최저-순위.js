/*

프로그래머스 / 로또의 최고 순위와 최저 순위 / 레벨 1
https://school.programmers.co.kr/learn/courses/30/lessons/77484

< 소요 시간 >
24분

*/

const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

function solution(lottos, win_nums) {
  const zeroCount = lottos.filter(num => num === 0).length;
  const minCount = lottos.filter(num => win_nums.includes(num)).length;
  const maxCount = zeroCount + minCount;

  return [rank[maxCount], rank[minCount]];
}
