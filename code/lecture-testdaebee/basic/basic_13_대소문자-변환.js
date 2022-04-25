function solution(s) {
  // for...of
  // let answer = "";
  // for (word of s) {
  //   word == word.toUpperCase()
  //     ? (answer += word.toLowerCase())
  //     : (answer += word.toUpperCase());
  // }
  // return answer;

  // array
  return s
    .split("")
    .map((word) =>
      word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
    )
    .join("");
}

let str = "ItisTimeToStudy";
console.log(solution(str));
