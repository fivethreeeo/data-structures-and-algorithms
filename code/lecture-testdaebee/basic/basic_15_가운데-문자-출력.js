function solution(s) {
  const isOdd = s.length % 2 == 1;
  const index = Math.round(s.length / 2) - 1;
  return isOdd ? s.substr(index, 1) : s.substr(index, 2);

  // let answer;
  // let mid=Math.floor(s.length/2)
  // if(s.length%2===1) answer=s.substring(mid, mid+1);
  // else answer=s.substring(mid-1, mid+1);
  // //if(s.length%2===1) answer=s.substr(mid, 1);
  // //else answer=s.substr(mid-1, 2);
  // return answer;
}
console.log(solution("study"));
console.log(solution("good"));
