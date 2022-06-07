function solution(arr) {
  const answer = [];

  const sum = arr.reduce((a, c) => a + c);
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        console.log(arr[i], arr[j]);
        answer.push(arr.filter((v) => v != arr[i] && v != arr[j]));
      }
    }
  }

  return answer;
}

let arr = [10, 20, 20, 20, 10, 10, 10, 5, 7];
console.log(solution(arr));
