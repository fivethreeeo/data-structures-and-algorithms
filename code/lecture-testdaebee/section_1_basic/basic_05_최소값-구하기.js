function solution(arr) {
  // forEach
  // let min = arr[0];
  // arr.forEach((num) => min > num && (min = num));
  // return min;

  // reduce
  // return arr.reduce((min, num) => (min > num ? num : min));

  // Math.min
  return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
