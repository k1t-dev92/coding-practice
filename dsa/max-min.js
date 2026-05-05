const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);

let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < n; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(max);
console.log(min);
