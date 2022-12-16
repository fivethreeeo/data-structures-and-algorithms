//  프로그래머스 / 저주의 숫자 3 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  let number = 1;
  const generateNumber = number =>
    number % 3 !== 0 && !String(number).split('').includes('3')
      ? number
      : generateNumber(number + 1);

  return Array.from({ length: n }).map(v => {
    const generatedNumber = generateNumber(number);
    number = generatedNumber + 1;
    return generatedNumber;
  })[n - 1];
}
