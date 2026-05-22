const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

let max = numbers[0];
let min = numbers[0];

numbers.forEach((v) => {
  if (max < v) {
    max = v;
  }

  if (min > v) {
    min = v;
  }
});

console.log(max);
console.log(min);
