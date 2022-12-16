//  프로그래머스 / 로그인 성공? / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [id, pw] = id_pw;

  if (!db.find(([_id]) => id === _id)) return 'fail';

  return db.find(([_id, _pw]) => id === _id && pw === _pw)
    ? 'login'
    : 'wrong pw';
}
