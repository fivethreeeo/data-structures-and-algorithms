function getTrie(words) {
  let root = {};

  words.forEach((word) => {
    let current = root;

    word.forEach((letter) => {
      if (!current[letter]) current[letter] = [0, {}]; //  노드에 원하는 정보 추가
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1];
    });
  });

  return root;
}

// PGS_17685_자동완성.js 에서 사용
// 노드에 count 정보가 추가됌

// Reference: 코딩테스트 광탈 방지 A to Z : JavaScript
// https://school.programmers.co.kr/learn/courses/13213
