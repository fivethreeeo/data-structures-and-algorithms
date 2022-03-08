// https://www.hackerrank.com/challenges/compare-the-triplets/problem
// Time - 00:07:03

function compareTriplets(a, b) {
  let scores = [0, 0];
  a.forEach((score, index) => {
    score > b[index] && (scores[0] += 1);
    score < b[index] && (scores[1] += 1);
  });

  return scores;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
