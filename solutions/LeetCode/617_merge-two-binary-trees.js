/*

    LeetCode / Merge Two Binary Trees / Easy / 00:20:10
    https://leetcode.com/problems/merge-two-binary-trees/


    ### Pseudo Code ###
    
    root2를 root1에 덮어씌우자

    1. root1 없으면 root2로 덮어씌움
    2. root2 없으면 root1로 덮어씌움 
        ㄴ 1., 2. 의 경우 한쪽이 없으면 병합할게없으니까 리턴
    3. 둘다 있으면 root1 + root2
        ㄴ 왼쪽, 오른쪽 둘다 재귀로 병합
    
      
    ### Complexity ###

    - 두 트리의 노드 개수 N
    * 시간복잡도 : O(N)
*/

var mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2
  }
  if (root2 === null) {
    return root1
  }
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
}
