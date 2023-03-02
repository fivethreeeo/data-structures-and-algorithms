/*

    Coplit / Power / Section 3 / 00:33:59
    https://urclass.codestates.com/codeproblem/376933a7-f5dc-43b2-be3b-34233fb643af

    ## 문제 ##
    
    - 두 수를 입력받아 거듭제곱을 리턴해야 합니다.
    - 입력 : base:number (base >= 2), exponent:number (exponent >= 0)
    - 출력 : number
    - 주의사항 :
        - 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
        - 시간복잡도 O(logN)을 만족해야 합니다.


    ## Pseudo Code ##
  
    - 분할정복!
    - 2^10 을 계산할 경우,
      ㄴ 2 * 2 * 2 ... * 2 => 9번의 연산을 해야한다. 시간복잡도 O(N), N은 지수
      ㄴ 2^5 * 2^5 => 이런 식으로 절반씩 나눠서 연산을 하면. 시간복잡도 O(logN)
    - 원리는 이진탐색과 같다. 
    - 위에서 2^5 * 2^5 로 문제를 쪼개면, 2^5만 구해서 구한 값을 서로 곱해주면 된다.
      ㄴ 이런식으로 계속 쪼개는 과정이 logN번 걸리기 때문에 시간복잡도가 O(logN) 이다.

*/

let i = 1;
const prime = 94906249;

function power(base, exponent) {
  if (exponent === 0) return 1;

  console.log('함수실행 ' + i++);

  const halfExponent = parseInt(exponent / 2);
  const memo = power(base, halfExponent);
  const evenResult = (memo * memo) % prime;

  return exponent % 2 === 0 ? evenResult : (evenResult * base) % prime;
}

console.log(power(2, 20));
