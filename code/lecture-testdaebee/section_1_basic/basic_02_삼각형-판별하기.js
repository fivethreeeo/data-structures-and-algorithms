function solution(a, b, c) {
  // 삼각형 기준 : 가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 작다.
  // (세 변의 길이의 합) - (가장 긴 변의 길이) -> 가장 긴 변의 길이보다 커야 한다.
  const longest = Math.max(a, b, c);
  const sum = a + b + c;
  return sum - longest > longest ? "YES" : "NO";
}

console.log(solution(20, 33, 17));

// 만약 Math를 사용하지 못하면? -> basic_01 활용
