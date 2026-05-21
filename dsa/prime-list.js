const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const result = [];

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.push(i);
  }
}

console.log(result.join(' '));
