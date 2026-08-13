const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

const s = new Array(a.length + 1);
s[0] = 0;
for (let i = 0; i < n; i++) {
  s[i + 1] = s[i] + a[i];
}

const results = [];
for (let i = 0; i <= n - k; i++) {
  results.push(s[i + k] - s[i]);
}

console.log(Math.max(...results));

// https://paiza.jp/works/mondai/prefix_sum_problems/prefix_sum_problems__sum_max_boss
