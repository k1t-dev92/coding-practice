const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.trim().split('\n');

const [x, d, k] = lines[0].split(' ').map(Number);
const a = new Array(k + 1);
a[1] = x;

for (let i = 2; i <= k; i++) {
  a[i] = a[i - 1] + d;
}

console.log(a[k]);
