function solution(a, b) {
  return a.reduce((acc, unit, index) => {
    let result = unit - b[index];

    if (result === 0) return acc + "D";
    if (result === 1 || result === -2) return acc + "A";
    if (result === -1 || result === 2) return acc + "B";
  }, "");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
