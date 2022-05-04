function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  arr.forEach((value) => {
    const sum = value
      .toString()
      .split("")
      .map((v) => Number(v))
      .reduce((a, b) => a + b);

    if (sum > max) {
      max = sum;
      answer = value;
    }

    if (sum === max && value > answer) {
      answer = value;
    }
  });

  return answer;
}

let arr = [128, 460, 603, 40, 521, 3233, 137, 129, 245, 123];
console.log(solution(arr));
