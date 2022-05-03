console.time("a");
function solution(strs) {
  return strs.reduce((count, str) => {
    const lower = str.toLowerCase();
    lower.split("").reverse().join("") === lower && count++;
    return count;
  }, 0);
}

let strs = ["gooG", "gooog", "fnvk", "googg"];
console.log(solution(strs));

console.timeEnd("a");
