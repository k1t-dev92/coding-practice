const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);

let allEven = true;
let count = 0;
while (allEven) {
  for (let i = 0; i < n; i++) {
    if (numbers[i] % 2 !== 0) {
      allEven = false;
      break;
    }
  }

  if (allEven) {
    for (let i = 0; i < n; i++) {
      numbers[i] /= 2;
    }
    count++;
  }
}

console.log(count);

// https://atcoder.jp/contests/abs/tasks/abc081_b
