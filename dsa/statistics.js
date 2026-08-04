const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

let sum = 0;
let sumOfSquaredDeviations = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;

for (let i = 0; i < numbers.length; i++) {
  sumOfSquaredDeviations += (numbers[i] - average) * (numbers[i] - average);
}

const variance = sumOfSquaredDeviations / numbers.length;
const std = Math.sqrt(variance);

console.log(average);
console.log(variance);
console.log(std);
