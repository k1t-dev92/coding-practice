const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [x, d] = lines[0].split(' ').map(Number);
const Q = Number(lines[1]);

const a = [];
a[1] = x;

for (let i = 2; i <= 1000; i++) {
  a[i] = a[i - 1] + d;
}

for (let i = 0; i < Q; i++) {
  const k = Number(lines[i + 2]);
  console.log(a[k]);
}
