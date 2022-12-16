//  프로그래머스 / 직각삼각형 출력하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  let tri = '';

  for (let i = 1; i <= Number(input[0]); i++) {
    tri += `${'*'.repeat(i)}\n`;
  }

  console.log(tri);
});
