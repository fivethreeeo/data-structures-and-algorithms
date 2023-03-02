/*

    Programmers / 네트워크 / Level 3 / 00:39:11
    https://school.programmers.co.kr/learn/courses/30/lessons/43162

    ## Pseudo Code ## 
    
    * 시간복잡도 : 
    * 공간복잡도 : 

    - computers 배열의 내부 배열은 각 인덱스 별로 해당 인덱스 컴퓨터의 인접 컴퓨터 정보이다.
        - 따라서 각 컴퓨터 별로 인접 컴퓨터 정보를 저장하는 데이터 구조를 만든다.(그래프)
    - 그래프는 만들고, DFS를 돌면서 네트워크 개수를 구한다.
    
    1. computers를 loop
        ㄴ 자기 인덱스를 제외한 다른 인덱스의 값이 '1'인 경우 인접 컴퓨터로 추가
    2. 0번 컴퓨터부터 (n-1)번 컴퓨터까지 DFS 호출 (Loop)
        ㄴ j번 컴퓨터 DFS 호출
            ㄴ 해당 컴퓨터는 방문처리한다.
            ㄴ 인접 컴퓨터들을 DFS 호출한다.
            ㄴ 반복
        ㄴ DFS가 완료됐으면 네트워크 개수에 + 1
        ㄴ 다음 컴퓨터(n-1)가 방문처리가 안됐으면 DFS 호출

*/

function solution(n, computers) {
  console.log([...computers]);
  let networkCount = 0;
  const vertice = [];

  // 그래프 생성 (vertex 생성, 간선 연결)
  computers.forEach((linkInfo, number) => {
    // vertex 생성
    const item = { number, marked: false, adjacencyList: [] };

    // 간선 연결 (인접리스트에 number를 넣어줌)
    linkInfo.forEach((connected, computerNumber) => {
      if (number !== computerNumber && connected === 1) {
        item.adjacencyList.push(computerNumber);
      }
    });

    vertice.push(item);
  });

  // DFS 함수
  const dfs = vertexNumber => {
    const vertex = vertice[vertexNumber];

    // vertex 방문 표시
    vertex.marked = true;

    // 인접리스트 DFS 재귀 호출
    for (const adjacencyVertexNumber of vertex.adjacencyList) {
      const adjacencyVertex = vertice[adjacencyVertexNumber];
      // 방문하지 않은 vertex만 호출
      if (adjacencyVertex.marked) continue;
      dfs(adjacencyVertex.number);
    }
  };

  // vertex들을 순회하면서 방문하지않은 곳만 DFS 호출
  // 한 정점에서 시작해서 DFS탐색이 끝나면 네트워크 + 1
  for (const vertex of vertice) {
    if (!vertex.marked) {
      dfs(vertex.number);
      networkCount++;
    }
  }

  return networkCount;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

/*
    배열을 이용한 풀이

    네트워크 문제
    DFS
    각 정점마다 DFS 탐색 실행
    ㄴ 정점을 방문표시
    ㄴ 탐색이 종료되면 network 개수 + 1
    ㄴ 다음 정점 DFS 탐색 실행
        ㄴ 만약 이미 방문한 정점이면 탐색 X 
        
    1. 네트워크 개수 변수 설정 network
    2. 각 정점의 방문을 기록하는 배열 생성 vertice
        ㄴ 컴퓨터의 넘버는 index와 일치한다.
        ㄴ 따라서 vertice 배열의 인덱스와 컴퓨터를 일치시킨다.
        ㄴ 배열의 요소는 방문여부를 boolean으로 설정 
    3. vertice의 정점(컴퓨터)들을 처음부터 순회하면서 각 정점을 DFS탐색
        ㄴ 이미 방문한 정점은 탐색X
        ㄴ 방문을 안한 정점이라면
            ㄴ 방문표시
            ㄴ computers에서 해당 컴퓨터의 값에서 연결된 컴퓨터를 찾아서 DFS 재귀 호출
        ㄴ DFS탐색을 완료했으면 network ++
        ㄴ 3번부터 반복
*/

function solution2(n, computers) {
  let network = 0;
  const vertice = Array.from({ length: n }, _v => false);

  const DFS = index => {
    if (vertice[index]) {
      return;
    }
    vertice[index] = true;

    for (let j = 0; j < n; j++) {
      if (index !== j && computers[index][j]) {
        DFS(j);
      }
    }
  };

  for (let k = 0; k < n; k++) {
    if (!vertice[k]) {
      network++;
      DFS(k);
    }
  }

  return network;
}
