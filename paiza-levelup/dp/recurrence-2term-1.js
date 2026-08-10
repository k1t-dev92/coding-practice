const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [x, d, k] = lines[0].split(' ').map(Number);
const a = [];
a[1] = x;

for (let i = 2; i <= k; i++) {
  a[i] = a[i - 1] + d;
}

console.log(a[k]);

// https://paiza.jp/works/mondai/dp_primer/dp_primer_recursive_formula_step0
