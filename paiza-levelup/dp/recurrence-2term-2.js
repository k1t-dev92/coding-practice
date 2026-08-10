const MAX_K = 1000;

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [x, d] = lines[0].split(' ').map(Number);
const q = Number(lines[1]);
const a = [];
a[1] = x;

for (let i = 2; i <= MAX_K; i++) {
  a[i] = a[i - 1] + d;
}

const result = [];
for (let i = 0; i < q; i++) {
  const k = Number(lines[i + 2]);
  result.push(a[k]);
}
console.log(result.join('\n'));

// https://paiza.jp/works/mondai/dp_primer/dp_primer_recursive_formula_step1
