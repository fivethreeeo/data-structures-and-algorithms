function solution(s) {
  return s.toLowerCase() === s.toLowerCase().replace(/[^a-z]/g, "")
    ? true
    : false;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// let answer="YES";
// s=s.toLowerCase().replace(/[^a-z]/g, '');
// if(s.split('').reverse().join('')!==s) return "NO";
// return answer;
