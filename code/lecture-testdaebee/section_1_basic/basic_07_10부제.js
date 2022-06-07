// 10부제를 위반한 차량의 수 구하기
function solution(day, arr) {
  // 1. forEach
  // let count = 0;
  // arr.forEach((carNumber) => (day - carNumber) % 10 !== 0 && count++);
  // return count;
  //
  // 2. filter
  return arr.filter((carNumber) => (day - carNumber) % 10 !== 0).length;
}

arr = [3, 23, 3, 47, 53, 17, 33];
console.log(solution(3, arr));
