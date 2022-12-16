//  프로그래머스 / 옹알이 (1) / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babblings) {
  const 발음s = ['aya', 'ye', 'woo', 'ma'];

  let count = 0;

  babblings.forEach(babbling => {
    let value = babbling;

    발음s.forEach(발음 => {
      value = value.replaceAll(발음, ' ');
    });

    if (value.trim().length === 0) count++;
  });

  return count;
}
