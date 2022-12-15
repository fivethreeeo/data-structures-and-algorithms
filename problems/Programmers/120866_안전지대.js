//  프로그래머스 / 안전지대 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  board.forEach((line, columnIdx) => {
    line.forEach((area, rowIdx) => {
      if (area === 1) {
        line[rowIdx - 1] === 0 && (line[rowIdx - 1] = 2);
        line[rowIdx + 1] === 0 && (line[rowIdx + 1] = 2);
        board[columnIdx - 1] &&
          board[columnIdx - 1][rowIdx] === 0 &&
          (board[columnIdx - 1][rowIdx] = 2);
        board[columnIdx - 1] &&
          board[columnIdx - 1][rowIdx - 1] === 0 &&
          (board[columnIdx - 1][rowIdx - 1] = 2);
        board[columnIdx - 1] &&
          board[columnIdx - 1][rowIdx + 1] === 0 &&
          (board[columnIdx - 1][rowIdx + 1] = 2);
        board[columnIdx + 1] &&
          board[columnIdx + 1][rowIdx] === 0 &&
          (board[columnIdx + 1][rowIdx] = 2);
        board[columnIdx + 1] &&
          board[columnIdx + 1][rowIdx - 1] === 0 &&
          (board[columnIdx + 1][rowIdx - 1] = 2);
        board[columnIdx + 1] &&
          board[columnIdx + 1][rowIdx + 1] === 0 &&
          (board[columnIdx + 1][rowIdx + 1] = 2);
      }
    });
  });

  return board.map(line => line.filter(area => area === 0)).flat().length;
}
