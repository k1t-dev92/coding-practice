const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

let sum = 0;
let sumOfSquaredDeviations = 0;

numbers.forEach((number) => {
  sum += number;
});

const average = sum / numbers.length;

numbers.forEach((number) => {
  sumOfSquaredDeviations += (number - average) * (number - average);
});

const variance = sumOfSquaredDeviations / numbers.length;
const std = Math.sqrt(variance);

console.log(average);
console.log(variance);
console.log(std);
