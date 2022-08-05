const a = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const b = [1, 2, 3, 4, 5].fill(0); // [0, 0, 0, 0, 0]
const c = "a".repeat(5).split(""); // ['a', 'a', 'a', 'a', 'a']
const d = Array.from("a".repeat(5)); // ['a', 'a', 'a', 'a', 'a']

// 속도는 a, b가 제일 빠름
