const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, a] = lines[0].split(' ').map(Number);

const remainder = a % n;

for (let i = 1; i <= 100000; i++) {
  if (i % n === remainder) {
    console.log(i);
  }
}
