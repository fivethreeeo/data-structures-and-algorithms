// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const result = Array(id_list.length).fill(0);

  report.forEach((single) => {
    single.split(' ').forEach((value, index) => {
      console.log(value, index);
    });
  });
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
);
