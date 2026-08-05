const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, x] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < x; i++) {
  sum += a[i];
}

let max = sum;
let left = a[0];

for (let i = x; i < n; i++) {
  sum = sum - a[i - x] + a[i];
  if (sum > max) {
    max = sum;
    left = a[i - x + 1];
  }
}

console.log(`${max} ${left}`);

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step2
