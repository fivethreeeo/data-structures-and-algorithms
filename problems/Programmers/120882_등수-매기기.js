//  프로그래머스 / 등수 매기기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const averages = score.map(([eng, math]) => (eng + math) / 2);

  const sortedByRank = [...averages]
    .sort((a, b) => b - a)
    .map((average, index, array) => {
      const rank = index === 0 || average !== array[index - 1] ? index + 1 : 0;

      return [average, rank];
    });

  return averages.map(average => {
    return sortedByRank.find(rank => average === rank[0])[1];
  });
}
