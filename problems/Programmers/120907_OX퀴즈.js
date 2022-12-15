//  프로그래머스 / OX퀴즈 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quizs) {
  return quizs.map(quiz => {
    const [expression, answer] = quiz.split('=');
    return eval(expression) === +answer ? 'O' : 'X';
  });
}
