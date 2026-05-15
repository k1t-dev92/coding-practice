const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);

let digitCount = 0;
let tmp = n;
while (tmp !== 0) {
  tmp = Math.floor(tmp / 10);
  digitCount++;
}

let sum = 0;
let remainder = n;
for (let i = digitCount - 1; i >= 0; i--) {
  const a = Math.floor(remainder / Math.pow(10, i));
  remainder -= a * Math.pow(10, i);
  sum += a;
}

console.log(sum);
