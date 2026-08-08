const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, a] = lines[0].split(' ').map(Number);

const remainder = a % n;

const result = [];
for (let i = 1; i <= 100000; i++) {
  if (i % n === remainder) {
    result.push(i);
  }
}

console.log(result.join('\n'));

// https://paiza.jp/works/mondai/euclidean_primer/euclidean_primer__mod_equal
