const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let [a, b] = lines[0].split(' ').map(Number);

const product = a * b;

while (b !== 0) {
  let remainder = a % b;
  a = b;
  b = remainder;
}

const lcm = product / a;
console.log(lcm);
