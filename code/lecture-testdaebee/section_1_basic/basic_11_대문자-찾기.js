function solution(s) {
  return s.split("").filter((word) => word === word.toUpperCase()).length;
  // 유니코드 '65~90'로도 찾기 가능
}

let str = "KoreaTimeGood";
console.log(solution(str));
