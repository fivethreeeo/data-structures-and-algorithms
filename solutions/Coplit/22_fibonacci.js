/*

    Coplit / Fibonacci / Section 3 / 00:11:33
    https://urclass.codestates.com/codeproblem/7808febd-f75c-43b9-bf99-34cd7588a7f0

    ## 문제 ##
    
    - 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
    - 입력 : number
    - 출력 : number


    ## Pseudo Code ##
    
    - 피보나치는 재귀로 풀면 이전 값을 계속 필요로하니까 이전 값을 기억하면 효율적일 듯
    1. Map으로 값을 기억하기
    2. 값이 있으면 재귀를 멈추고 값을 바로 쓰기

    - 꼬리재귀로 최적화해보기

    시간복잡도 : O(n)

*/

const fibonacci = (
  n,
  memo = new Map([
    [0, 0],
    [1, 1],
  ])
) => {
  if (memo.has(n)) return memo.get(n);
  memo.set(n, fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
  return memo.get(n);
};

const fibonacciTail = (n, a = 0, b = 1) => {
  if (n === 0) return 0;
  if (n === 1) return b;
  return fibonacciTail(n - 1, b, a + b);
};

console.log(fibonacciTail(10));
