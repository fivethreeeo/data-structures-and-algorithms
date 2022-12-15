//  프로그래머스 / 인덱스 바꾸기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  const [temp1, temp2] = [my_string[num1], my_string[num2]];

  return my_string
    .split('')
    .map((str, idx) => {
      if (idx === num1) return temp2;
      if (idx === num2) return temp1;
      return str;
    })
    .join('');
}
