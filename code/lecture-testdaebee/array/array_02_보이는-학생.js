function solution(students) {
  let tallest = 0;

  return students.reduce((acc, student) => {
    if (student > tallest) {
      tallest = student;
      acc++;
    }
    return acc;
  }, 0);
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
