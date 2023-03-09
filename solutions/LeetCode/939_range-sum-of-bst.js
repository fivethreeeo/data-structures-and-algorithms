/*

    LeetCode / Range Sum of BST / Easy / 00:21:36
    https://leetcode.com/problems/range-sum-of-bst/


    ### Pseudo Code ###
    
    DFS(CallStack)을 사용해서 탐색하자.
    - 노드가 null이면 재귀X, sum 리턴
    - 노드 값이 범위 안에 있으면 sum += 값
    - 노드의 left, right 노드 재귀 호출

    * 이진트리는 노드보다 작은 값이 왼쪽, 큰 값이 오른쪽에 온다. 이걸 이용해서 탐색범위를 줄일 수 있다.
    
      
    ### Complexity ###

    - 노드 개수 N

    * 시간복잡도 : O(N) - 모든 노드를 1번 방문
    * 공간복잡도 : O(N)
*/

var rangeSumBST = function (root, low, high) {
  const isInRange = val => val >= low && val <= high

  let sum = 0

  const dfs = node => {
    if (node === null) {
      return sum
    }
    if (isInRange(node.val)) {
      sum += node.val
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root, 0)

  return sum
}

// 이진트리의 경우 node의 left값은 node값보다 작음, right값은 node값보다 큼
// 하나의 node에서 left, right 둘 다 탐색 안해도 될 경우가 생긴다.

var rangeSumBST2 = function (root, low, high) {
  if (root === null) {
    return 0
  }

  // left는 val보다 무조건 작은 값이 오기 때문에 right쪽만 보면 됨.
  if (root.val < low) {
    return rangeSumBST2(root.right, low, high)
  }

  if (root.val > high) {
    return rangeSumBST2(root.left, low, high)
  }

  return root.val + rangeSumBST2(root.left, low, high) + rangeSumBST2(root.right, low, high)
}
