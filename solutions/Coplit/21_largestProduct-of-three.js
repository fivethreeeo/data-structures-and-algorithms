/*

    Coplit / Largest Product Of Three / Section 3 / 00:09:33
    https://urclass.codestates.com/codeproblem/2b210f60-2f38-45d6-bfcc-4bf75c5abbb5

    ## 문제 ##
    
    - 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
    - 입력 : number[]
    - 출력 : number
    - 주의사항 :
        - 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
        - 입력된 배열의 요소는 음수와 0을 포함하는 정수입니다.
        - 입력된 배열의 길이는 3 이상입니다.


    ## Pseudo Code ##
    
    풀이 1
    - 조합으로 풀기
    - 순서 상관없이 3개를 뽑아서 최대값을 구하는 것이니까 조합을 이용해 풀 수 있다.

    1. 순서 상관없이 3개씩 넣은 배열을 모은 배열 생성
    2. 모은 배열을 내부 요소들의 곱으로 변경
    3. 곱들 중 가장 큰 수 리턴


    풀이 2
    - 뽑는 개수가 3개로 고정이다.
    - 숫자 크기로 정렬한다.
    - 후보1 : 제일 큰 양수 3개를 곱한 수
    - 후보2 : 제일 큰 양수와 제일 작은 수 2개를 곱한 수 (제일 작은 수 2개가 음수일 경우 가능성 생김)

*/

{
  const largestProductOfThree = arr => {
    return Math.max(...combine(arr, 3));
  };

  const combine = (array, k) => {
    const result = [];
    const dfs = (arr, start) => {
      if (arr.length == k) {
        const multiplication = arr.reduce((a, c) => a * c);
        result.push(multiplication);
        return;
      }
      for (let i = start; i < array.length; i++) {
        arr.push(array[i]);
        dfs(arr, i + 1);
        arr.pop();
      }
    };
    dfs([], 0);
    return result;
  };

  console.log(largestProductOfThree([2, 1, 3, 7]));
}

{
  const largestProductOfThree = arr => {
    const sorted = arr.sort((a, b) => b - a);
    const length = sorted.length;

    const [first, second, third] = sorted;
    const [last, penultimate] = [sorted[length - 1], sorted[length - 2]];

    const candidate1 = first * second * third;
    const candidate2 = first * last * penultimate;

    return Math.max(candidate1, candidate2);
  };

  console.log(largestProductOfThree([2, 1, 3, 7]));
}
