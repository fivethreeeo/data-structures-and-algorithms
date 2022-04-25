function solution(arr) {
  // 1. Math.min + filter
  // return Math.min(...arr.filter((num) => num % 2 !== 0));
  //
  // 2. filter + reduce
  // return arr
  //   .filter((num) => num % 2 !== 0)
  //   .reduce((minOdd, odd) => (minOdd > odd ? odd : minOdd));
  //
  // 3. reduce -> 만약 배열에 홀수가 없으면..?
  // return arr.reduce(
  //   (minOdd, num) => (num % 2 !== 0 && minOdd > num ? num : minOdd),
  //   Number.MAX_SAFE_INTEGER
  // );
  // 4. 합과 최소값 같이 구하기
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      sum += num;
      min > num && (min = num);
    }
  });
  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
