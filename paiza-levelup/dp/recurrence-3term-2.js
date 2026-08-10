const MAX_K = 40;

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const q = Number(lines[0]);
const a = [];
a[1] = 1;
a[2] = 1;

for (let i = 3; i <= MAX_K; i++) {
  a[i] = a[i - 2] + a[i - 1];
}

const result = [];
for (let i = 0; i < q; i++) {
  const k = Number(lines[i + 1]);
  result.push(a[k]);
}
console.log(result.join('\n'));

// https://paiza.jp/works/mondai/dp_primer/dp_primer_recursive_formula_boss
