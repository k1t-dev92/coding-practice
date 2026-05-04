const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [a, b] = lines[0].split(' ').map(Number);

if ((a * b) % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}
