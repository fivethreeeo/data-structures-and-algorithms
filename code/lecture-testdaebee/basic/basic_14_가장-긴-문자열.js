function solution(s) {
  return s.reduce((maxWord, word) =>
    maxWord.length > word.length ? maxWord : word
  );
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
