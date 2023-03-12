/*

    Coplit / Balanced Brackets / Section 3 / 00:11:38
    https://urclass.codestates.com/codeproblem/b726bbd3-6050-422c-b765-f36405c2f11b

    ## 문제 ##
    
    문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

    - 입력: string
    - 출력: true | false


    ## Pseudo Code ##
    
    stack 활용
    1. 문자열의 괄호를 하나씩 체크 (loop)
      ㄴ 괄호가 open([, {, () => stack에 push
      ㄴ 괄호가 close(], }, )) => stack의 마지막 괄호와 페어인지 체크
        ㄴ 페어가 아니면 false 리턴
    2. loop가 끝난 후 stack의 길이가 0이면 true, 아니면 false 리턴


    ## Complexity ##
      
    - 문자열 길이 N

    * 시간복잡도 : O(N) => 최대 N번 loop
    * 공간복잡도 : O(N) => open, pair 저장 공간 + stack 저장공간 => 6 + N
  
*/

const balancedBrackets = function (str) {
  const open = new Set(['[', '{', '('])
  const pair = new Set(['[]', '{}', '()'])

  const isPair = (bracket1, bracket2) => pair.has(`${bracket1}${bracket2}`)

  const stack = []

  for (const bracket of str) {
    if (open.has(bracket)) {
      stack.push(bracket)
      continue
    }
    if (!isPair(stack.pop(), bracket)) {
      return false
    }
  }

  return stack.length === 0
}
