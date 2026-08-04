const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines.map(Number);
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(min);
