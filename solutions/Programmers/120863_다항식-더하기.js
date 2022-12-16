//  프로그래머스 / 다항식 더하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let x = 0;
  let number = 0;

  polynomial.split(' + ').forEach(value => {
    if (isNaN(value)) {
      x += +value.replace('x', '') || 1;
    } else {
      number += +value;
    }
  });

  const resultX = x === 0 ? '' : `${x > 1 ? x : ''}x`;
  const resultNumber = number || '';

  if (resultX && resultNumber) return `${resultX} + ${resultNumber}`;
  if (resultX && !resultNumber) return resultX;
  if (!resultX && resultNumber) return `${resultNumber}`;
}
