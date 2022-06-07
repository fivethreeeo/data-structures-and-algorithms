function solution(s) {
  let answer = "";

  let alphabet = null;
  let count = 0;

  for (let word of s) {
    if (word !== alphabet) {
      count > 1 && (answer += count);
      alphabet = word;
      answer += alphabet;
      count = 0;
    }
    count++;
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
