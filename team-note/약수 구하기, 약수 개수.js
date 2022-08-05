// ** 제곱근이 정수면 약수의 개수가 홀수다!!!!

const divisor = (number) => {
  const divisors = [1];

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) divisors.push(i);
  }

  return [divisors, divisors.length];
};
