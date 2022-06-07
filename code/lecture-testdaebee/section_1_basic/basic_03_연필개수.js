// n = 학생 수
// 연필 1 다스는 12자루
// n명의 학생에게 1인당 연필 1자루씩 주면 총 몇 다스 필요?
function solution(n) {
  const DAS_COUNT = 12;
  return Math.ceil(n / DAS_COUNT);
}

console.log(solution(178));
console.log(solution(120));
