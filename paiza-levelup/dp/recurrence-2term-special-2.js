const MAX_K = 1000;

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [x, d1, d2] = lines[0].split(' ').map(Number);
const Q = Number(lines[1]);
const a = [];
a[1] = x;

for (let i = 2; i <= MAX_K; i++) {
  if (i % 2 !== 0) {
    a[i] = a[i - 1] + d1;
  } else {
    a[i] = a[i - 1] + d2;
  }
}

for (let i = 0; i < Q; i++) {
  const k = Number(lines[i + 2]);
  console.log(a[k]);
}
