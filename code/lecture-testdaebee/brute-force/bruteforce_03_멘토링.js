function solution(arr) {
  const n = arr[0].length; // 학생 수
  const test = arr.length; // 테스트 수

  let result = 0;
  let mento_menti = [];

  // 2중 for문으로 모든 학생 경우의 수 탐색
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      let isFail = false;

      // 테스트을 돌면서 멘토=멘티 성립 가능한 조건 찾기
      for (let k = 0; k < test; k++) {
        const pi = arr[k].indexOf(i);
        const pj = arr[k].indexOf(j);
        if (pi > pj) {
          isFail = true;
          break;
        }
      }

      if (!isFail) {
        result++;
        mento_menti.push([i, j]);
      }
    }
  }

  return { result, mento_menti };
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
  [4, 1, 3, 2],
];
console.log(solution(arr));

/*
  1. 멘토-멘티가 될 수 있는 모든 경우의 수를 찾는다.
    학생 수 n => n x n (본인이 두 번 들어간 것 포함) 

  2. 모든 경우의 수를 돌면서 멘토-멘티가 가능한지 확인한다.
 */

// function solution(test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }
