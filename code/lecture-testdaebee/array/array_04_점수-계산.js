function solution(arr) {
  let score = 0;

  return arr.reduce((total, mark) => {
    if (mark === 0) {
      score = 0;
      return total;
    }
    score++;
    return total + score;
  }, 0);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
