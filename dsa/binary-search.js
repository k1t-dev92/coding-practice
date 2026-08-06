const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const arr = lines[0].split(' ').map(Number);
const target = Number(lines[1]);

let left = 0;
let right = arr.length - 1;
let result = -1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2); // 切り捨てで必ず left 寄りになることを保証する
  if (arr[mid] === target) {
    result = mid;
    break;
  }
  if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
