function solution(s) {
  // 1. split + map + join
  // return s
  //   .split("")
  //   .map((word) => (word == "A" ? "#" : word))
  //   .join("");

  // 2. for of
  // let answer = "";
  // for (word of s) word === "A" ? (answer += "#") : (answer += word);
  // return answer;

  // 3. replace
  return s.replace(/A/g, "#");
}

// function solution(s) {
//   let answer = s;
//   answer = answer.replace(/A/g, "#");
//   return answer;
// }

let str = "BANANA";
console.log(solution(str));
