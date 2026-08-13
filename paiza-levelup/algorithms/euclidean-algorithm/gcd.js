const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let [a, b] = lines[0].split(' ').map(Number);

while (b !== 0) {
  const remainder = a % b;
  a = b;
  b = remainder;
}
console.log(a);

// https://paiza.jp/works/mondai/euclidean_primer/euclidean_primer__simple_gcd
