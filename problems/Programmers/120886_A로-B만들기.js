//  프로그래머스 / A로 B 만들기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  const beforeArr = before.split('');

  for (const str of after) {
    const idx = beforeArr.indexOf(str);

    if (idx === -1) return 0;

    beforeArr.splice(idx, 1);
  }

  return 1;
}
