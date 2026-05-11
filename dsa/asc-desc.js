const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

let tmp;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      tmp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tmp;
    }
  }
}

console.log(numbers.join(' '));

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      tmp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tmp;
    }
  }
}

console.log(numbers.join(' '));
