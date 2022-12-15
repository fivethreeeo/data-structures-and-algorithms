//  프로그래머스 / 캐릭터의 좌표 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const maxX = (board[0] - 1) / 2;
  const maxY = (board[1] - 1) / 2;
  const minX = maxX * -1;
  const minY = maxY * -1;

  let [x, y] = [0, 0];

  keyinput.forEach(input => {
    if (input === 'up') {
      y < maxY && (y += 1);
    }
    if (input === 'down') {
      y > minY && (y -= 1);
    }
    if (input === 'right') {
      x < maxX && (x += 1);
    }
    if (input === 'left') {
      x > minX && (x -= 1);
    }
  });

  return [x, y];
}
