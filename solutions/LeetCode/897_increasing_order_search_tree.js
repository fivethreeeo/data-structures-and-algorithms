/*

    LeetCode / Increasing Order Search Tree / Easy / 00:30:28
    https://leetcode.com/problems/increasing-order-search-tree/


    ### Pseudo Code ###

    DFS인데 좀 순서가 이상..
    재귀로 DFS를 할 때
    자식 노드들을 호출하고 왼쪽 자식노드의 호출이 끝나면 본인을 visited 처리(노드 연결 처리)
    그 다음 오른쪽 자식 노드 호출

    1. 탐색하면서 새로 정렬할 순서대로 모아놓을 nodes[] 생성
    2. root 부터 DFS 탐색
        ㄴ node가 null이면 return
        ㄴ node가 있으면
            ㄴ node.left DFS 호출
            ㄴ left의 호출이 종료되면 node를 nodes[]에 push
            ㄴ node.right DFS 호출
    3. nodes[]를 loop
        ㄴ nodes[i].left 는 null
        ㄴ nodes[i].right 는 nodes[i + 1]
          ㄴ 만약 마지막 노드라면 null
    4. nodes[i] return
    
      
    ### Complexity ###

    - 노드 개수 N
    * 시간복잡도 : O(N) => DFS N번 호출 + nodes N번 순회 O(2N)
    * 공간복잡도 : O(N) => nodes 배열의 최대 크기
    

*/

var increasingBST = function (root) {
  const nodes = []

  const DFS = node => {
    if (node !== null) {
      DFS(node.left)
      nodes.push(node)
      DFS(node.right)
    }
  }

  DFS(root)

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].left = null
    nodes[i].right = i === nodes.length - 1 ? null : nodes[i + 1]
  }

  return nodes[0]
}
