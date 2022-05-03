function solution(numbers) {
  return numbers.reduce(
    (acc, number, index) => {
      if (number > numbers[index - 1]) acc.push(number);
      return acc;
    },
    [numbers[0]]
  );
}
console.log(solution([7, 3, 9, 5, 6, 12]));
