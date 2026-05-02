const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const tmp = lines[0].split(' ');
let a = Number(tmp[0]);
let b = Number(tmp[1]);

while (b !== 0) {
  let remainder = a % b;
  a = b;
  b = remainder;
}
console.log(a);
