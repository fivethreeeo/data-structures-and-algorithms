const divisorLength = n => {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i % i === n) count++;
    else if (n % i === 0) count += 2;
  }

  return count;
};
