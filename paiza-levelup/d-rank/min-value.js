const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const a = [];
for (let i = 0; i < 5; i++) {
  a[i] = Number(lines[i]);
}

let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  }
}

console.log(min);

// https://paiza.jp/works/mondai/d_rank_skillcheck_sample/min_num
