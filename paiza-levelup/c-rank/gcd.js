const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let [a, b] = lines[0].split(' ').map(Number);

while (b !== 0) {
  let remainder = a % b;
  a = b;
  b = remainder;
}
console.log(a);
