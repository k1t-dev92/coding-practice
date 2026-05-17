const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);

let sum = 0;
let tmp = n;
while (tmp > 0) {
  sum += tmp % 10;
  tmp = Math.floor(tmp / 10);
}

console.log(sum);
