/*

    Programmers / 위장 / Level 2 / 00:09:32
    https://school.programmers.co.kr/learn/courses/30/lessons/42578


    ## Pseudo Code ##
    
    종류 별로 각각 3, 4, 5개의 옷이 있다면 경우의 수 곱의 법칙을 이용
    => 총 경우의 수는 3*4*5 = 60개

    1. (종류 : 개수) 형태의 맵 객체 생성
    2. 종류의 개수들을 전부 곱하기
      ㄴ 개수+1 => 안입는 것도 하나의 경우
      ㄴ 
    3. ㄴ 있으면 찾은 값의 인덱스와 i를 리턴한다.
    4. ㄴ 없으면 hash에 {nums[i]: i} 추가한다.

*/

function solution(clothes) {
  const clothesMap = {};

  for (const [_, kind] of clothes) {
    clothesMap[kind] ? clothesMap[kind]++ : (clothesMap[kind] = 1);
  }

  return Object.values(clothesMap).reduce((a, c) => a * (c + 1), 1) - 1;
}
