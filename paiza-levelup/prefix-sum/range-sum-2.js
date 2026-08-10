const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const a = lines[0].split(' ').map(Number);
const s = new Array(a.length + 1);
s[0] = 0;
for (let i = 0; i < a.length; i++) {
  s[i + 1] = s[i] + a[i];
}

console.log(s[8] - s[2]);

// https://paiza.jp/works/mondai/prefix_sum_problems/prefix_sum_problems__section_sum_step2
