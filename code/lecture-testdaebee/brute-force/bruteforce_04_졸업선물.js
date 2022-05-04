function solution(budget, products) {
  let answer = Number.MIN_SAFE_INTEGER;

  const n = products.length;

  products
    .sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
    .forEach((product, index) => {
      let count = 1;
      let sum = product[0] / 2 + product[1];

      for (let i = 0; i < n; i++) {
        if (index !== i) sum += products[i][0] + products[i][1];
        if (sum > budget) break;
        count++;
      }

      if (answer < count) answer = count;
    });

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

/**
 * 1. 모든 경우의 수를 찾는다.
 * 2. 예산 조건에 맞는지 체크한다.
 * 3. 조건에 맞는 경우 중에 제일 많은 학생 수 케이스를 찾는다.
 */

//   let answer = 0;
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   for (let i = 0; i < n; i++) {
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
