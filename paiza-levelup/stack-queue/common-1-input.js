const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = [];

console.log(n);
for (let i = 0; i < n; i++) {
  a[i] = Number(lines[i + 1]);
  console.log(a[i]);
}

// https://paiza.jp/works/mondai/stack_queue/stack_queue__common_step1
