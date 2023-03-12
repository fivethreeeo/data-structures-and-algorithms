/*

    LeetCode / Invert Binary Tree / Easy / 00:08:23
    https://leetcode.com/problems/invert-binary-tree/


    ### Pseudo Code ###
    
    node가 null이면 return;
    node 의 left, right를 스위치한다.
    left, right dfs 호출


    
      
    ### Complexity ###

    - 노드 개수 N

    * 시간복잡도 : O(N) => 노드 개수만큼 dfs 호출
    * 공간복잡도 : O(logN) => 이진트리 깊이 만큼 스택 프레임을 사용
*/

var invertTree = function (root) {
  if (root !== null) {
    ;[root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)
  }
  return root
}
