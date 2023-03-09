/*

    LeetCode / Find a Corresponding Node of a Binary Tree in a Clone of That Tree / Easy / 00:03:15
    https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/


    ### Pseudo Code ###
    
    DFS(CallStack)을 사용해서 탐색하자.
    - original, cloned을 동시에 탐색한다.(같은 위치의 노드)
    - original하고 target하고 일치하면 탐색 성공한거니까 cloned을 리턴!!
    - 아니면 left, right 양쪽 다 재귀호출
      - left끼리 동시 탐색, right끼리 동시 탐색
    
      
    ### Complexity ###

    - original + cloned 노드 개수 N

    * 시간복잡도 : O(N)
    * 공간복잡도 : O(N)
*/

var getTargetCopy = function (original, cloned, target) {
  if (original === null) {
    return null
  }

  if (original === target) {
    return cloned
  }

  const left = getTargetCopy(original.left, cloned.left, target)
  const right = getTargetCopy(original.right, cloned.right, target)

  return left || right
}
