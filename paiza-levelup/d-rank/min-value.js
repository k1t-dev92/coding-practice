const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines.map(Number);
let min = numbers[0];

numbers.forEach((v) => {
  if (min > v) {
    min = v;
  }
});

console.log(min);
