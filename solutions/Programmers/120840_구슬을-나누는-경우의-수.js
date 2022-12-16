//  프로그래머스 / 구슬을 나누는 경우의 수 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
  if (balls === share) return 1;

  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

const factorial = number => {
  const BigN = BigInt(number);

  if (BigN === BigInt(0) || BigN === BigInt(1)) {
    return BigInt(1);
  }

  return BigN * factorial(number - 1);
};
