// https://www.hackerrank.com/challenges/grading/problem
// Time - 00:18:19

/*
  1. 38점 미만 -> 점수 그대로
  2. 5단위 숫자와 차이 3 이상 -> 점수 그대로
  3. 5단위 숫자와 차이 3 미만 -> 5단위 올림
*/

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const diff = grade % 5;
    return diff < 3 ? grade : grade + (5 - diff);
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
