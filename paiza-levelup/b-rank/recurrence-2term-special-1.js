const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [x, d1, d2, k] = lines[0].split(' ').map(Number);
const a = [];
a[1] = x;

for (let i = 2; i <= k; i++) {
  if (i % 2 !== 0) {
    a[i] = a[i - 1] + d1;
  } else {
    a[i] = a[i - 1] + d2;
  }
}

console.log(a[k]);
